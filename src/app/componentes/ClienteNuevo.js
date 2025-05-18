"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react';
import {RadioGroup, Radio} from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function ClienteNuevo() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selected, setSelected] = React.useState("dni");
    return (
        <>
            <button onClick={onOpen} className="flex h-full items-center gap-2 bg-blue-900 text-white font-bold py-3 px-4 rounded-md">+ Nuevo</button>
                {/* Encabezado */}
            
            <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Cliente Nuevo</ModalHeader>
                    <div className="bg-gray-300 h-0.5 my-1"></div>
                    <ModalBody>
                        <div className='grid grid-cols-2 gap-6 items-center'>
                            <div className='col-span-1 col-start-1'>
                                <div className="flex flex-col gap-3">
                                    <RadioGroup label="Seleccione documento" orientation="horizontal" value={selected} onValueChange={setSelected}>
                                        <Radio value="dni">DNI</Radio>
                                        <Radio value="ruc">RUC</Radio>
                                        <Radio value="c-extranjera">C.EXTRANJERIA</Radio>
                                    </RadioGroup>                                    
                                </div>
                            </div>
                            {selected === "dni" && (
                                    <>
                                    <div className='col-span-1 flex'>
                                        <input placeholder={selected} className="rounded-l-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                        <button className="bg-green-500 text-white font-bold p-2 w-10 rounded-r-md">+</button>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Nombres(*):</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Apellidos(*):</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Telefono:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Celular:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Email:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Dirección:</p>
                                        <div className='flex'>
                                            <input className="rounded-l-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                            <button className="bg-green-500 text-white font-bold p-2 w-10 rounded-r-md">+</button>
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Fecha de Nacimiento:</p>
                                        <input placeholder="Ingresar fecha" type="date" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Grupo(*):</p>
                                        <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
                                            <option>General</option>
                                            <option>General2</option>
                                            <option>General3</option>
                                        </select>
                                    </div>
                                    </>
                                ) 
                            }

                            {selected === "ruc" && (
                                    <>
                                    <div className='col-span-1 flex'>
                                        <input placeholder={selected} className="rounded-l-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                        <button className="bg-green-500 text-white font-bold p-2 w-10 rounded-r-md">+</button>
                                    </div>
                                    <div className="col-span-2 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Razón Social(*):</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Telefono:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Celular:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Email:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Dirección:</p>
                                        <div className='flex'>
                                            <input className="rounded-l-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                            <button className="bg-green-500 text-white font-bold p-2 w-10 rounded-r-md">+</button>
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Fecha de Nacimiento:</p>
                                        <input placeholder="Ingresar fecha" type="date" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Grupo(*):</p>
                                        <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
                                            <option>General</option>
                                            <option>General2</option>
                                            <option>General3</option>
                                        </select>
                                    </div>
                                    </>
                                ) 
                            }

                            {selected === "c-extranjera" && (
                                    <>
                                    <div className='col-span-1 flex'>
                                        <input placeholder={selected} className="rounded-l-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                        <button className="bg-green-500 text-white font-bold p-2 w-10 rounded-r-md">+</button>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Nombres(*):</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Apellidos(*):</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Telefono:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Celular:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Email:</p>
                                        <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Dirección:</p>
                                        <div className='flex'>
                                            <input className="rounded-l-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                            <button className="bg-green-500 text-white font-bold p-2 w-10 rounded-r-md">+</button>
                                        </div>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Fecha de Nacimiento:</p>
                                        <input placeholder="Ingresar fecha" type="date" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                                    </div>
                                    <div className="col-span-1 text-center p-1">
                                        <p className="text-left text-blue-900 font-bold">Grupo(*):</p>
                                        <select className="rounded-md bg-gray-50 p-3 border-2 w-full border-gray-700">
                                            <option>General</option>
                                            <option>General2</option>
                                            <option>General3</option>
                                        </select>
                                    </div>
                                    
                                    </>
                                ) 
                            }
                            
                        </div>                                 
                    </ModalBody>
                    <ModalFooter className='my-4'>
                        <Button color="success" className='text-white' onPress={onClose}>
                        Guardar
                        </Button>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Cancelar
                        </Button>  
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
    
        </>
    )
}
