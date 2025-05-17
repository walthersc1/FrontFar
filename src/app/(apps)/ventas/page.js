"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Ventas(){

  return (
    <div className="p-6">
      {/* Encabezado */}
      <h1 className="text-2xl font-bold mb-4">Ventas Nueva | SUCURSAL: SEDE 1</h1>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        <Link href={"/ventas/VentaNuevo"}>+ Agregar Ventas</Link>
      </button>

      <div className="bg-gray-300 h-0.5 my-6"></div>

      <div className="grid grid-cols-12 gap-4 mb-4 items-center">
        <div className="col-span-1 justify-items-end ">
          <h1 className="text-2xl">Turno:</h1>
        </div>
        <div className="col-span-3">
          <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
            <option>TICKET</option>
            <option>BOLETA</option>
            <option>FACTURA</option>
          </select>
        </div>
        <div className="col-start-1 col-span-1 justify-items-end ">
          <h1 className="text-2xl">Usuario:</h1>
        </div>
        <div className="col-span-3">
          <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
            <option>TICKET</option>
          </select>
        </div>
        <div className="col-start-1 col-span-1 justify-items-end ">
          <h1 className="text-2xl">Total Ventas:</h1>
        </div>
        <div className="col-span-3 flex items-center mx-8">
          <label className="block mx-4 font-bold text-xl">S/.</label>
          <input className="rounded-md bg-gray-50 p-2 border-2 w-3/4 border-gray-700"></input>          
        </div>
        <div className="col-span-3 flex items-center mx-8">
          <label className="block mx-4 font-bold text-xl">$</label>
          <input className="rounded-md bg-gray-50 p-2 border-2 w-3/4 border-gray-700"></input>          
        </div>
        <div className="col-span-3 flex items-center mx-8">
          <label className="block mx-4 font-bold text-xl">€</label>
          <input className="rounded-md bg-gray-50 p-2 border-2 w-3/4 border-gray-700"></input>
        </div>
        <div className="col-start-1 col-span-1 justify-items-end ">
          <h1 className="text-2xl">Desde:</h1>
        </div>
        <div className="col-span-3">
          <input placeholder="Ingresar fecha" type="date" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
        </div>
        <div className="col-span-1 justify-items-end">
          <h1 className="text-2xl">Hasta:</h1>
        </div>
        <div className="col-span-3">
          <input placeholder="Ingresar fecha" type="date" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
        </div>

      </div>

      
    </div>
  );
};



