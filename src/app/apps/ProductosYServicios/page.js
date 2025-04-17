import React from "react";
import Link from "next/link";



export default function ProductosYServicios() {
    return (

        <div className="p-6">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold mb-4">Productos y Servicios - Listado</h1>
  
        {/* Botones superiores */}
        <div className="flex gap-4 mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            
            <Link href={"/apps/ProductoNuevo"}>+ Agregar Productos</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Agregar Servicios
          </button>
        </div>
  
        {/* Pestañas de navegación */}
        <div className="border-b mb-4">
          <ul className="flex gap-4">
            <li className="cursor-pointer border-b-2 border-blue-500 text-blue-500 pb-2">Productos</li>
            <li className="cursor-pointer text-gray-500">Productos dados de baja</li>
            <li className="cursor-pointer text-gray-500">Servicios activos</li>
            <li className="cursor-pointer text-gray-500">Servicios dados de baja</li>
          </ul>
        </div>
  
        {/* Filtros y búsqueda */}
        <div className="flex items-center gap-4 mb-4">
          <select className="border p-2 rounded">
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <input
            type="text"
            placeholder="Digite el Nombre del Producto"
            className="border p-2 rounded w-1/3"
          />
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">Buscar</button>
        </div>
  
        {/* Tabla de productos */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Código Barra</th>
                <th className="border p-2">Nombre del Producto</th>
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
              {/* Datos de ejemplo */}
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
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">🔍</button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">✏️</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">❌</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );
  }
  