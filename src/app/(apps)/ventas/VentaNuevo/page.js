"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react';
import ListadoVentas from '@/app/componentes/ListadoVentas';
import Cobrar from '@/app/componentes/Cobrar';
import ListadoClientesVentas from '@/app/componentes/ListadoClientesVentas';
import {Autocomplete, AutocompleteItem, AutocompleteSection} from "@heroui/react";

export default function VentasNuevo() {
    const [producto, setProducto] = useState("");
  const productosSugeridos = [
    { key:"d100", nombre: "DICLOFENACO 100 MG X 100 COMP.", laboratorio: "FARVET", precio: 1.50, stock: 59 },
    { key:"doloneurobin", nombre: "DOLO NEUROBION NF", laboratorio: "PROCTER", precio: 3.50, stock: 96 },
    { key:"doloneuropress", nombre: "DOLO NEUROPRESS FORTE X 60 TAB", laboratorio: "PHARME CORPORATION", precio: 2.50, stock: 59 },
    { key:"doloquimag", nombre: "DOLO-QUIMAGESICO 1% AEROSOL X 5 ML", laboratorio: "FARMAINDUSTRIA", precio: 37.50, stock: 0 },
    { key:"dolocodralan", nombre: "DOLOCORDRALAN EXTRA FORTE NF X 54 CAPSULAS", laboratorio: "ANSOLAT", precio: 3.00, stock: 46 },
  ];
  return (
    <div className='p-6'>
      {/* Encabezado */}
      <h1 className="text-2xl font-bold mb-4">Ventas Nueva | SUCURSAL: SEDE 1</h1>
      {/* Datos del comprobante */}
      <div className="grid grid-cols-6 gap-4 mb-4">
        <div className='col-span-1'>
          <label className="block font-bold">Comprobante:</label>
          <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
            <option>TICKET</option>
            <option>BOLETA</option>
            <option>FACTURA</option>
          </select>
        </div>
        <div className='col-span-1'>
          <label className="block font-bold">Serie:</label>
          <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
            <option>TICKET</option>
          </select>
        </div>
        <div className='col-span-1'>
          <label className="block font-bold">Número:</label>
          <input type="text" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700" value="00004377" readOnly />
        </div>
        <div className='col-span-3'>
          <label className="block font-bold">Cliente:</label>
          <div className='flex'>
            <input type="text" className="rounded-l-md bg-gray-50 p-2 border-2 w-full border-gray-700" />
            <ListadoClientesVentas></ListadoClientesVentas>

          </div>
        </div>
        <div className='col-span-2'>
          <label className="block font-bold">Ingrese Nombre del Producto: (*)</label>
          <div className='flex'>
            <Autocomplete
            isRequired
            className='max-w-sm'
            defaultItems={productosSugeridos}
            defaultSelectedKey="d100"
            label="Ingrese Producto"            
            >
              {(item)=><AutocompleteItem key={item.key}>{item.nombre}</AutocompleteItem>}
            </Autocomplete>
            <ListadoVentas nombre="Producto"></ListadoVentas>

          </div>
        </div>
        <div className='col-span-2'>
          <label className="block font-bold">Ingrese Nombre del Servicio: (*)</label>
          <div className='flex'>
            <Autocomplete
            isRequired
            className='max-w-sm'
            defaultItems={productosSugeridos}
            defaultSelectedKey="d100"
            label="Ingrese Servicio"            
            >
              {(item)=><AutocompleteItem key={item.key}>{item.nombre}</AutocompleteItem>}
            </Autocomplete>
            <ListadoVentas nombre="Servicio"></ListadoVentas>

          </div>
        </div>
        <div className='col-span-1 col-start-1'>
          <label className="block font-bold">Fecha de Venta:</label>
          <input disabled className="rounded-md bg-gray-100 p-2 border-2 w-full border-gray-700"></input>
        </div>
        <div className='col-span-1'>
          <label className="block font-bold">Items:</label>
          <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
        </div>
        <div className='col-span-1'>
          <label className="block font-bold">Moneda:</label>
          <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
            <option>S/. SOLES</option>
            <option>$ DOLAR</option>
            <option>EUROS</option>
          </select>
        </div>
        <div className='col-span-1'>
          <label className="block font-bold">Tipo Cambio:</label>
          <input disabled className="rounded-md bg-gray-100 p-2 border-2 w-full border-gray-700"></input>
        </div>
        <div className='col-span-1'>
          <label className="block font-bold">Evento: 0% Dscto</label>
          
        </div>     
        
      </div>   
      {/* Tabla de ventas */}
      <table className="min-w-full border-collapse border mt-4">
        <thead>
          <tr className="bg-teal-500 text-white">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">P/U</th>
            <th className="border p-2">Stock Unidades</th>
            <th className="border p-2">Unid x Caja</th>
            <th className="border p-2">Unid x Blister</th>
            <th className="border p-2">Tipo IGV</th>
            <th className="border p-2">Presentación Venta</th>
            <th className="border p-2">Cantidad</th>
            <th className="border p-2">Importe</th>
            <th className="border p-2">Editar</th>
            <th className="border p-2">Eliminar</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          <tr>
            <td className="border p-2">INY.INTRAMUSCULAR</td>
            <td className="border p-2">1</td>
            <td className="border p-2 text-center">1000</td>
            <td className="border p-2 text-center">0</td>
            <td className="border p-2 text-center">0</td>
            <td className="border p-2 text-center">
              <select className="rounded-md bg-gray-50 p-3 border-2 w-35 border-gray-700">
                <option>Gravado</option>
                <option>Exonerado</option>
                <option>Inafecto</option>
              </select>
            </td>
            <td className="border p-2 text-center">
              <select className="rounded-md bg-gray-50 p-3 border-2 w-35 border-gray-700">
                <option>PVP1</option>
                <option>PVP2</option>
              </select>
            </td>
            <td className="border p-2 text-right">
              <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
            </td>
            <td className="border p-2 text-right">3.50</td>
            <td className="border p-2 text-center">
              <button className="bg-orange-400 text-white px-2 py-1 rounded">✏️</button>
            </td>
            <td className="border p-2 text-center">
              <button className="bg-red-500 text-white px-2 py-1 rounded">❌</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Resumen de totales */}
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-lg font-bold">Totales</h2>
        <div className='grid grid-cols-5'>
          <div className='col-span-1'>
            <button disabled={true} className='border font-bold p-2 bg-gray-100 border-gray-400 rounded-l-md'> Subtotal</button>
            <input disabled className="rounded-r-md bg-gray-200 p-2 border-2 border-gray-700"></input>
          </div>
          <div className='col-span-1'>
            <button disabled={true} className='border font-bold p-2 bg-gray-100 border-gray-400 rounded-l-md'> Dscto:</button>
            <input disabled className="rounded-r-md bg-gray-200 p-2 border-2 border-gray-700"></input>
          </div>
          <div className='col-span-1'>
            <button disabled={true} className='border font-bold p-2 bg-gray-100 border-gray-400 rounded-l-md'> Total:</button>
            <input disabled className="rounded-r-md bg-gray-200 p-2 border-2 border-gray-700"></input>
          </div>

        </div>
      
      </div>

      {/* Botones de acción */}
      <div className="flex gap-4 mt-4 justify-between">
        <Cobrar></Cobrar>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Cancelar</button>
      </div>

      <div className='py-6'>
        <h1 className='text-2xl font-bold'>Totales</h1>
        <div className='grid grid-cols-2 w-1/4  gap-2 items-center justify-center'>
          <h1 className='col-span-1 text-blue-900 font-bold text-xl'>Exonerada</h1>
          <input className=" col-span-1 rounded-md bg-gray-50 p-2 border-2 border-gray-700"></input>
          <h1 className='col-span-1 text-blue-900 font-bold text-xl'>Inafecta</h1>
          <input className=" col-span-1 rounded-md bg-gray-50 p-2 border-2 border-gray-700"></input>
          <h1 className='col-span-1 text-blue-900 font-bold text-xl'>Gravada</h1>
          <input className=" col-span-1 rounded-md bg-gray-50 p-2 border-2 border-gray-700"></input>
          <h1 className='col-span-1 text-blue-900 font-bold text-xl'>IGV</h1>
          <input className=" col-span-1 rounded-md bg-gray-50 p-2 border-2 border-gray-700"></input>
          <h1 className='col-span-1 text-blue-900 font-bold text-xl'>Gratuita</h1>
          <input className=" col-span-1 rounded-md bg-gray-50 p-2 border-2 border-gray-700"></input>
          <h1 className='col-span-1 text-blue-900 font-bold text-xl'>Descuento</h1>
          <input className=" col-span-1 rounded-md bg-gray-50 p-2 border-2 border-gray-700"></input>
          <h1 className='col-span-1 text-blue-900 font-bold text-xl'>Total</h1>
          <input className=" col-span-1 rounded-md bg-gray-50 p-2 border-2 border-gray-700"></input>

        </div>
      </div>
    </div>
  )
}
