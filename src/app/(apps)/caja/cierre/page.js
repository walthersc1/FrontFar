"use client";
import React, { useState } from "react";
import { NumberInput } from "@heroui/react";
import {
  Save,
  FileDown,
  X,
} from "lucide-react";

export default function CierreCaja() {
  const [checked1, setChecked1] = useState(false);
  const [conteos, setConteos] = useState({}); // Guardar valores por denominación
  const precios = ["200", "100", "50", "20", "10", "5", "2", "1", "0.50", "0.20", "0.10"];

  // Función para calcular total en efectivo
  const calcularTotal = () => {
    return precios.reduce((total, precio) => {
      const cantidad = parseFloat(conteos[precio] || 0);
      return total + (cantidad * parseFloat(precio));
    }, 0).toFixed(2);
  };

  return (
    <>
      <h1 className="text-2xl font-bold m-4">CAJA Cierre | SUCURSAL: SEDE 1</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex flex-wrap flex-rows md:colspan-1 bg-white rounded-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 m-6 md:grid-cols-6 gap-2">
          <div className="col-span-6 h-1 bg-orange-400" />
          <div className="col-span-6 text-center p-1">
            <p className="text-left font-bold">Fecha:</p>
            <input disabled className="rounded-md bg-gray-200 p-2 border-2 w-full border-gray-700" />
          </div>
          <div className="col-span-6 text-center p-1">
            <p className="text-left font-bold">Saldo Final Efectivo:</p>
            <input disabled className="rounded-md bg-gray-200 p-2 border-2 w-full border-gray-700" />
          </div>
          <div className="col-span-6 text-center p-1">
            <p className="text-left font-bold">Saldo Final Virtual:</p>
            <input disabled className="rounded-md bg-gray-200 p-2 border-2 w-full border-gray-700" />
          </div>
          <div className="col-span-6 text-center p-1">
            <p className="text-left font-bold">Saldo Real:</p>
            <input readOnly placeholder={calcularTotal()} className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700" />
          </div>
          <div className="col-span-6 text-center p-1">
            <p className="text-left font-bold">Monto Sobrante(+)/Faltante(-):</p>
            <input placeholder="0.00" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700" />
          </div>
          <div className="col-span-6 flex flex-row h-min gap-7">
            <button className="w-min bg-orange-400 p-2 pr-4 rounded text-white font-bold flex justify-center">
              <Save className="pr-1 w-9" />Guardar
            </button>
            <button className="bg-green-500 w-min p-2 rounded text-white font-bold flex">
              <FileDown className="w-9" />
            </button>
            <button className="w-min bg-red-500 p-2 pr-4 rounded text-white font-bold flex justify-center">
              <X className="pr-1 w-9" />Salir
            </button>
          </div>
        </div>

        {/* Segunda columna: Conteo de efectivo */}
        <div className="content-start grid grid-cols-1 sm:grid-cols-2 m-6 md:grid-cols-6 gap-2 m-2">
          <div className="col-span-full flex">
            <input
              type="checkbox"
              id="check-lote"
              checked={checked1}
              onChange={(e) => setChecked1(e.target.checked)}
            />
            <p className="font-bold text-left px-2">Conteo de efectivo(*):</p>
          </div>

          {checked1 && (
            <>
              {precios.map((precio) => (
                <NumberInput
                  key={precio}
                  value={conteos[precio] || ""}
                  onChange={(value) => setConteos((prev) => ({ ...prev, [precio]: value }))}
                  className="py-2 col-span-2 px-8"
                  label={`S/ ${precio}`}
                  labelPlacement="outside"
                  placeholder="Cantidad"
                />
              ))}
              <div className="col-span-6 text-right mt-4">
                <p className="text-lg font-bold">Total en efectivo: S/ {calcularTotal()}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
