import React from 'react'

export default function SalidaNueva() {
  return (
    <div className='p-6'>
      <h1 className="text-2xl font-bold mb-4">SALIDA - Nuevo</h1>
      <div className='grid grid-cols-6'>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">Origen(*):</p>
          <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
        </div>

      </div>
    </div>
  )
}
