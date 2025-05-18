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
import ClienteNuevo from './ClienteNuevo';


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
                      <div className='col-start-4 col-span-1 justify-items-end'>
                          <ClienteNuevo></ClienteNuevo>
                      </div>
                      <div className="col-start-1 col-span-4 bg-gray-300 h-0.5 my-1"></div>
                      <div className='col-start-1 flex items-center gap-3 justify-center'>
                          <label className="block font-bold ml-6">Mostrar</label>
                          <select className="rounded-md bg-gray-50 mx-2 p-3 border-2 w-35 border-gray-700">
                            <option>5</option>
                            <option>20</option>
                          </select>
                          <label className="block font-bold">registros</label>
                      </div>
                      <div className='flex col-start-3 col-span-2 items-center gap-3 justify-center'>
                          <label className="block font-bold">Buscar:</label>
                          <input placeholder={`Digite el nombre del cliente`} className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                      </div>
                      <div className='col-start-1 col-span-1 justify-items-start'>
                          <button className="flex h-full items-center gap-2 bg-gray-500 text-white font-bold py-2 px-4 rounded-md">Exportar</button>
                      </div>
                      
                      <div className='col-span-6'>
                          <table className="min-w-full border-collapse border mt-4">
                          <thead>
                              <tr className="bg-gray-200">
                              <th className="border p-2 w-1/6">DNI/RUC</th>
                              <th className="border p-2">Nombres</th>
                              <th className="border p-2 w-1/6">Nombre Comercial</th>
                              <th className="border p-2 w-1/6">Seleccionar</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                              <td className="border p-2">48414136</td>
                              <td className="border p-2">YOSSELIN ROSEMARY PILLACA VERA</td>
                              <td className="border p-2 text-right"></td>
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
