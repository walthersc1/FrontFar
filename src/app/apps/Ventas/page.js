"use client";

import React, { useState } from "react";

export default function Ventas(){

  const [producto, setProducto] = useState("");
  const productosSugeridos = [
    { nombre: "DICLOFENACO 100 MG X 100 COMP.", laboratorio: "FARVET", precio: 1.50, stock: 59 },
    { nombre: "DOLO NEUROBION NF", laboratorio: "PROCTER", precio: 3.50, stock: 96 },
    { nombre: "DOLO NEUROPRESS FORTE X 60 TAB", laboratorio: "PHARME CORPORATION", precio: 2.50, stock: 59 },
    { nombre: "DOLO-QUIMAGESICO 1% AEROSOL X 5 ML", laboratorio: "FARMAINDUSTRIA", precio: 37.50, stock: 0 },
    { nombre: "DOLOCORDRALAN EXTRA FORTE NF X 54 CAPSULAS", laboratorio: "ANSOLAT", precio: 3.00, stock: 46 },
  ];

  return (
    <div className="p-6">
      {/* Encabezado */}
      <h1 className="text-2xl font-bold mb-4">Ventas Nueva | SUCURSAL: SEDE 1</h1>

      {/* Datos del comprobante */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block">Comprobante:</label>
          <select className="border p-2 w-full rounded">
            <option>TICKET</option>
          </select>
        </div>
        <div>
          <label className="block">Serie:</label>
          <input type="text" className="border p-2 w-full rounded" value="T001" readOnly />
        </div>
        <div>
          <label className="block">Número:</label>
          <input type="text" className="border p-2 w-full rounded" value="00004377" readOnly />
        </div>
        <div>
          <label className="block">Cliente:</label>
          <input type="text" className="border p-2 w-full rounded" value="PÚBLICO EN GENERAL" readOnly />
        </div>
      </div>

      {/* Búsqueda de productos y servicios */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block">Ingrese Nombre del Producto:</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
          />
          <ul className="border mt-2 bg-white rounded shadow-md">
            {productosSugeridos
              .filter((p) => p.nombre.toLowerCase().includes(producto.toLowerCase()))
              .map((p, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer ${p.stock === 0 ? "bg-red-200" : "hover:bg-gray-200"}`}
                  onClick={() => setProducto(p.nombre)}
                >
                  {p.nombre} | (S/. {p.precio}) | Stock: {p.stock}
                </li>
              ))}
          </ul>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md h-10 self-end">Buscar (F4)</button>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block">Ingrese Nombre del Servicio:</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md h-10 self-end">Buscar (F8)</button>
      </div>

      {/* Tabla de ventas */}
      <table className="min-w-full border-collapse border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Presentación</th>
            <th className="border p-2">Presentación Venta</th>
            <th className="border p-2">Cantidad</th>
            <th className="border p-2">Importe</th>
            <th className="border p-2">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Caja</td>
            <td className="border p-2">Unidad</td>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2 text-right">3.50</td>
            <td className="border p-2 text-center">
              <button className="bg-red-500 text-white px-2 py-1 rounded">❌</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Resumen de totales */}
      <div className="mt-4 p-4 border rounded w-1/4">
        <h2 className="text-lg font-bold">Totales</h2>
        <p>Exonerada: S/. 0.00</p>
        <p>Inafecta: S/. 0.00</p>
        <p>Gravada: S/. 0.00</p>
        <p>IGV: S/. 0.00</p>
        <p>Gratuita: S/. 0.00</p>
        <p>Descuento: S/. 0.00</p>
        <p className="font-bold">Total: S/. 0.00</p>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Continuar</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Cancelar</button>
      </div>
    </div>
  );
};


