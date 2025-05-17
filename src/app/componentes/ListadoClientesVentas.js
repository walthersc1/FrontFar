"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";


export default function ListadoClientesVentas() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
      <>
        <button onClick={onOpen} className="flex items-center gap-2 bg-blue-900 text-white font-bold px-4 rounded-r-md"><Search className='w-5 h-5'></Search>Buscar</button>
          {/* Encabezado */}
        
        <Modal isOpen={isOpen} size="5xl" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Lista de Clientes</ModalHeader>
                <ModalBody>
                    <div className='grid grid-cols-4 gap-4 items-center'>                        
                        <div className='col-start-4 justify-items-end'>
                            <button className="flex h-full items-center gap-2 bg-blue-900 text-white font-bold py-3 px-4 rounded-md"><Search className='w-5 h-5'></Search>Buscar</button>
                        </div>
                        <div className="col-start-1 col-span-4 bg-gray-300 h-0.5 my-1"></div>
                        
                        <div className='col-start-1 col-span-1 flex items-center gap-3 justify-center'>
                            <label className="block font-bold">Registro:</label>
                            <select className="rounded-md bg-gray-50 p-3 border-2 w-35 border-gray-700">
                            <option>5</option>
                            <option>20</option>
                            </select>
                        </div>
                        <div className='col-span-2'>
                            <input placeholder={`Digite el nombre del `} className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                        </div>
                        
                        <div className='col-span-6'>
                            <table className="min-w-full border-collapse border mt-4">
                            <thead>
                                <tr className="bg-gray-200">
                                <th className="border p-2 w-1/6">Código Barra</th>
                                <th className="border p-2">Hola</th>
                                <th className="border p-2 w-1/6">Precio Unitario</th>
                                <th className="border p-2 w-1/6">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="border p-2">Caja</td>
                                <td className="border p-2">Unidad</td>
                                <td className="border p-2 text-right">3.50</td>
                                <td className="border p-2 text-center">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded">✔️</button>
                                </td>
                                </tr>
                            </tbody>
                            </table>                      
                        </div>
                    </div>                                 
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                    </Button>                  
                </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
  
      </>
    )
}
