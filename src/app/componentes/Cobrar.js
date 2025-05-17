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


export default function Cobrar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
      <>
        <button onClick={onOpen} className="bg-blue-500 text-white px-4 py-2 rounded-md">Continuar</button>
          {/* Encabezado */}
        
        <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Cobrar</ModalHeader>
                <div className="bg-gray-300 h-0.5 my-1"></div>
                <ModalBody>
                    <div className='grid grid-cols-2 gap-6 items-center'>
                        <div className='col-span-1 col-start-1'>
                            <label className="block font-bold text-blue-900">Monto Recibido:</label>
                            <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                        </div>
                        <div className='col-span-1'>
                            <label className="block font-bold text-blue-900">Monto a Cobrar:</label>
                            <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                        </div>
                        <div className="col-span-2 bg-gray-300 h-0.5 my-1"></div>
                        <div className='col-span-1'>
                            <label className="block font-bold text-blue-900">Forma de Pago:</label>                            
                            <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
                                <option>YAPE</option>
                                <option>PLIN</option>
                                <option>EFECTIVO</option>
                            </select>
                        </div>
                        <div className='col-span-1'>
                            <label className="block font-bold text-blue-900">Cambio:</label>
                            <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                        </div>
                        <div className="col-span-2 bg-gray-300 h-0.5 my-1"></div>
                        <div className='col-span-2'>
                            <label className="block font-bold text-blue-900">Observación:</label>
                            <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                        </div>
                        <div className='col-span-2'>
                            <label className="block font-bold text-blue-900">Opciones Adicionales::</label>
                            <button className='bg-blue-900 text-white font-bold rounded-sm py-2 px-4'>+</button>
                        </div>
                    </div>                                 
                </ModalBody>
                <ModalFooter>
                    <Button color="success" className='text-white' onPress={onClose}>
                    Cobrar
                    </Button>                  
                </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
  
      </>
    )
}
