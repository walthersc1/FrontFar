"use client"
import React from 'react'
import Link from "next/link";
import {  
  FileText,  
} from "lucide-react";
import {Tabs, Tab, Card, CardBody} from "@heroui/react";

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
  )
}

function TablaProductos({ tituloNombre }) {
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
        />
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">Buscar</button>
      </div>
      <div>
        <button className="bg-gray-500 text-white p-4 py-2 mb-4 rounded-md">Exportar</button>
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
            <tr>
              <td className="border p-2">0000000873</td>
              <td className="border p-2">DIMIC 100MG X 100 CAPSULAS</td>
              <td className="border p-2">UND</td>
              <td className="border p-2">0.00</td>
              <td className="border p-2">2.00</td>
              <td className="border p-2">0.00</td>
              <td className="border p-2">96</td>
              <td className="border p-2">SOUTHERN</td>
              <td className="border p-2 flex gap-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded"><FileText className="w-6 h-6 text-white" /></button>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                  <Link href={"/ProductoNuevo"}>✏️</Link>
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">❌</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
