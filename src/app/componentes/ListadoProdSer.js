"use client";
import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function ListadoProdSer() {
 
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="productos" title="Productos">
          <Card>
            <CardBody>
              <TablaProductos tituloNombre="Nombre del Producto" />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="productosbaja" title="Productos dados de baja">
          <Card>
            <CardBody>
              <TablaProductos tituloNombre="Nombre del Producto dado de Baja" />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="servicios" title="Servicios activos">
          <Card>
            <CardBody>
              <TablaProductos tituloNombre="Nombre del Servicio" />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="serviciosbaja" title="Servicios dado de baja">
          <Card>
            <CardBody>
              <TablaProductos tituloNombre="Nombre del Servicio dado de Baja" />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

/***************************************/
/***************************************/


function TablaProductos({ tituloNombre }) {
  const consultaProdcutos = async (dato) => {
    const cons = await fetch("api/Producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: dato }),
    });
    return cons.json();
  };

  const [busqueda, setBusqueda] = useState("");  
  const { data, isLoading, error } = useQuery({
    queryKey: ["inventario"],
    queryFn: () => consultaProdcutos(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar inventario</p>;
  if (!data) return <p>No se encontraron datos.</p>;

//Buscar producto 
  const resultadoFiltrado = data.filter((producto) =>
    producto.nombreproduc
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        busqueda
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <h2>Registros</h2>
        <select className="border p-2 rounded-md">
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <input
          type="text"
          placeholder={`Digite el ${tituloNombre}`}
          className="border p-2 ml-16 rounded w-1/3"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} // ✅ actualiza en tiempo real
        />
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
          Buscar
        </button>
      </div>
      <div>
        <button className="bg-gray-500 text-white p-4 py-2 mb-4 rounded-md">
          Exportar
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border bg-white">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border p-2">Código Barra</th>
              <th className="border p-2">{tituloNombre}</th>
              <th className="border p-2">U/M</th>
              <th className="border p-2">P. Caja</th>
              <th className="border p-2">P. Unit</th>
              <th className="border p-2">P. Blister</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Laboratorio</th>
              <th className="border p-2">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {resultadoFiltrado.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.nombreproduc}</td>
                <td className="border p-2">{item.unidadmedidaunitario}</td>
                <td className="border p-2">{item.precioventacaja}</td>
                <td className="border p-2">{item.precioventaunidad}</td>
                <td className="border p-2">{item.precioventaxblister}</td>
                <td className="border p-2">{item.stockunitario}</td>
                <td className="border p-2">{item.laboratorio}</td>
                <td className="border p-2 flex gap-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    <FileText className="w-6 h-6 text-white" />
                  </button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                    <Link href={`/stock/Producto?id=${item.id}`}>✏️</Link>
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
