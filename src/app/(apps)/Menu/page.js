'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArchiveRestore,
  Blocks,
  Boxes,
  FileText,
  ArrowRightLeft,
  ArrowLeftToLine,
  Plus,
} from "lucide-react";

export default function Menu() {
  const buttons = [
    { text: "Apertura y Cierre", number: 1, icon: <ArchiveRestore className="w-12 h-12 text-white" />, referencia:"/" },
    { text: "Productos", number: 883, icon: <Blocks className="w-12 h-12 text-white" />, referencia:"/stock"},
    { text: "Compras", number: 0, icon: <Boxes className="w-12 h-12 text-white" />, referencia:"/"},
    { text: "Ventas", number: 27,icon: <FileText className="w-12 h-12 text-white" />, referencia:"/ventas"},
    { text: "Transferencias y Salidas", number: 0, icon: <ArrowRightLeft className="w-12 h-12 text-white" />, referencia:"/"},
    { text: "Entradas", number: 0, icon: <ArrowLeftToLine className="w-12 h-12 text-white" />, referencia:"/"},
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 50 }, (_, i) => ({
      code: `00${i + 1}`,
      name: `Producto ${i + 1}`,
      category: ["Analgésico", "Antibiótico", "Vitaminas", "Antiinflamatorio"][i % 4],
      format: "Tabletas 500mg",
      stock: Math.floor(Math.random() * 100),
      minStock: 10,
      unit: "Cajas",
      expiration: "2025-08-12",
      supplier: "Lab. Genfar",
      unitPrice: (Math.random() * 20).toFixed(2),
    }));
    setProducts(generated);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Sección Superior */}
      <h1 className="text-lg font-semibold text-gray-700 mb-2">DAHSBOARD</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Botones grandes con iconos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 flex-auto max-w-screen">
          {buttons.map((btn, index) => (
            <Link key={index} href={btn.referencia} passHref>
            <button
                           
              className="flex flex-col items-center justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-md transition w-full h-32"
            >
              {/* Icono a la izquierda */}
              <div className="flex items-center w-full h-full ">
                <div className="bg-white bg-opacity-20 p-4 pr-6 h-full place-content-center " style={{borderRadius:"0px 50px 50px 0px"}}>
                  <div className="">{btn.icon}</div>
                </div>

                <div className="pl-2">
                  {/* Número + Texto */}
                  <div className="text-left">
                    <p className="text-sm">{btn.text}</p>
                    <span className="text-2xl font-bold">{btn.number}</span>
                  </div>

                  {/* Pequeño icono de más */}
                  <div className="flex items-center text-sm">
                    <Plus className="w-4 h-4 mr-1" /> Más opciones
                  </div>
                </div>
              </div>
            </button>
            </Link>
          ))}
        </div>

        {/* Lista de categorías */}
        <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Categorías</h2>
          <ul className="space-y-2">
            {[
              "Analgésicos",
              "Antibióticos",
              "Vitaminas",
              "Antiinflamatorios",
            ].map((category, index) => (
              <li
                key={index}
                className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tabla de productos con scroll */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Inventario de Productos
        </h2>
        <div className="overflow-x-auto max-h-96 border rounded-lg">
          {<table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-500 text-white sticky top-0">
              <tr>
                <th className="p-3 border">Código</th>
                <th className="p-3 border">Nombre</th>
                <th className="p-3 border">Categoría</th>
                <th className="p-3 border">Formato</th>
                <th className="p-3 border">Stock Actual</th>
                <th className="p-3 border">Stock Mínimo</th>
                <th className="p-3 border">Unidad</th>
                <th className="p-3 border">Fecha Venc.</th>
                <th className="p-3 border">Proveedor</th>
                <th className="p-3 border">Precio Unitario (S/)</th>
                <th className="p-3 border">Precio Total (S/)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="text-center border bg-gray-100 even:bg-gray-200"
                >
                  <td className="p-2 border">{product.code}</td>
                  <td className="p-2 border">{product.name}</td>
                  <td className="p-2 border">{product.category}</td>
                  <td className="p-2 border">{product.format}</td>
                  <td className="p-2 border">{product.stock}</td>
                  <td className="p-2 border">{product.minStock}</td>
                  <td className="p-2 border">{product.unit}</td>
                  <td className="p-2 border">{product.expiration}</td>
                  <td className="p-2 border">{product.supplier}</td>
                  <td className="p-2 border">{product.unitPrice}</td>
                  <td className="p-2 border font-semibold">
                    {(product.stock * product.unitPrice).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
        </div>
      </div>
    </div>
  );
}
