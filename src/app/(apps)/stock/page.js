"use client"
import React from "react";

import Link from "next/link";
import ListadoProdSer from "@/app/componentes/ListadoProdSer";
import {  
  FileText,  
} from "lucide-react";

export default function ProductosYServicios() {
    return (

        <div className="p-6">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold mb-4">Productos y Servicios - Listado</h1>
  
        {/* Botones superiores */}
        <div className="flex gap-4 mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            
            <Link href={"/stock/ProductoNuevo"}>+ Agregar Productos</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            <Link href={"/stock/ServicioNuevo"}>+ Agregar Servicios</Link>
          </button>
        </div>
        <ListadoProdSer></ListadoProdSer> 
      </div>

    );
  }
  
