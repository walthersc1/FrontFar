"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Menú lateral que empuja el contenido */}
      <div
        className={`bg-blue-900 text-white p-5 transition-all ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-lg mb-4"
        >
          {isOpen ? "✖ Cerrar" : <FiMenu size={24} />}
        </button>

        {isOpen && (
          <ul>
            <li className="mb-3 hover:bg-blue-700 p-2 rounded">
              <Link href={"/apps/Menu"}>Inicio</Link>
            </li>
            <li className="mb-3 hover:bg-blue-700 p-2 rounded">
              <Link href={"/apps/ProductosYServicios"}>Stock</Link>
            </li>
            <li className="mb-3 hover:bg-blue-700 p-2 rounded">
              <Link href={"/apps/Ventas"}>Ventas</Link>
            </li>
            <li className="mb-3 hover:bg-blue-700 p-2 rounded">Reportes</li>
          </ul>
        )}
      </div>
    </div>
  );
}
