"use client"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import React , {useState} from "react";
import Link from "next/link";
import ModalProducto from "@/app/componentes/ModalProducto";

export default function ServicioNuevo (){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const[selectedOption, setSelecttedOption] = useState("Exonerada");
    const handleOptionChange = (evenet) => {setSelecttedOption(event.target.value);};
    const list1 = ["Exonerada", "Gravada","Inafecto"]
    const [checked1, setChecked1] = useState(false);
    const [lote1,setLote1] = useState(false);
    const [comision1, setComision1] = useState("");
    const [habilitarCaja, setHabilitarCaja] = useState(false);
    const [habilitarUnitaria, setHabilitarUnitaria] = useState(false);
    const [habilitarBlister, setHabilitarBlister] = useState(false);

    
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex flex-wrap flex-rows md:colspan-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 m-2" >
                <div className="col-span-6 border-4 border-t border-blue-900" />
                <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">Información del Servicio</h1>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">Código de barras(*):</p>
                    <input placeholder="Ingresar código" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">Nombre del Servicio(*):</p>
                    <input placeholder="Ingresar nombre" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">Categoría(*):</p>
                    <div className="flex">
                        <ModalProducto nombre="Categoría"></ModalProducto>
                        <input className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                    </div>
                </div> 
                
                
            </div>            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 place-self-start w-full m-2" >
                <div className="col-span-6 border-4 border-t border-blue-900" />
                <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">Precios del Servicio</h1>
                <div className="col-start-1 col-end-4 text-center p-1">
                    <p className="text-left">Utilidad(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-start-1 col-end-4 text-center p-1">
                    <p className="text-left">Precio Venta(*):</p>
                    <input  className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                
                <div className="col-span-6">
                    <div className="grid grid-cols-6 p-2">
                        <button className="rounded-xl font-bold bg-green-400 p-2">
                            <Link href={"/stock"}>Agregar</Link>
                        </button>
                        <button className="col-start-6 rounded-xl font-bold bg-red-400 p-2">
                            <Link href={"/stock"}>Cancelar</Link>
                        </button>
                    </div>
                </div>
                
            </div>

            
        </div>

    );
};