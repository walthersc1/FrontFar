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

export default function ProductoNuevo (){
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
                <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">Información del Producto</h1>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">Código de barras(*):</p>
                    <input placeholder="Ingresar código" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">Nombre del Producto(*):</p>
                    <input placeholder="Ingresar nombre" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">P. Activo(*):</p>
                    <div className="flex">
                        <ModalProducto nombre="P. Activo(*)"></ModalProducto>
                        <input className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                        
                    </div>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">C. Digemid(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Patología(*):</p>
                    <div className="flex">
                        <ModalProducto nombre="Patología(*):"></ModalProducto>
                        <input className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                    </div>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">R.Sanitario(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-6 flex flex-wrap flex-row justify-between px-3 py-2">
                    <div className="basis 1/3 text-center p-1 align-center">
                        <input type="checkbox" id="check-lote" checked={lote1} onChange={(e)=> setLote1(e.target.checked)}></input>
                        <label className="p-2">Lote</label> 
                    </div>
                    <div className="basis 1/3 text-center p-1">
                        <input type="checkbox" id="check-ventaReceta"></input>
                        <label className="p-2">Venta con Receta</label> 
                    </div>
                    <div className="basis 1/3 text-center p-1">
                        <input type="checkbox" id="check-canjePuntos"></input>
                        <label className="p-2">Canje con Puntos</label> 
                    </div>  
                </div>
                <div className="col-span-6 flex flex-wrap flex-row">
                    {
                        list1.map((item, index)=>(
                            <div key={index} className="flex-1 p-3 m-2 flex flex-wrap justify-between -gap-y-3 border-2 border-blue-900 rounded-2xl">
                                <div className="w-3/4">{item}</div>
                                <div className="w-1/4 text-blue-500">
                                    <input type="radio" value={item} name="op" defaultChecked={index ===0}
                                    onChange={handleOptionChange} className="w-full h-full"></input>
                                </div>
                            </div>
                        ))
                    }                    
                </div> 
                 {lote1 &&
                <div className="col-span-6">
                    <button className="rounded bg-blue-900 my-4 p-2 font-bold text-white">+ Agregar Lote</button>
                    <table className="w-full border-collapse border bg-white">
                    <thead>
                    <tr className="bg-blue-900 text-white">
                        <th className="border p-2">Item</th>
                        <th className="border p-2">Lote</th>
                        <th className="border p-2">Fecha Caducidad</th>
                        <th className="border p-2">Stock</th>
                        <th className="border p-2">Cost. U</th>
                        <th className="border p-2">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody className="place-items-center">
                    {/* Datos de ejemplo */}
                    <tr>
                        <td className="border p-2">1</td>
                        <td className="border p-2">
                            <input className="rounded-md bg-gray-50 p-1 border-2 w-full border-gray-700"></input>
                        </td>
                        <td className="border p-2">
                            <input className="rounded-md bg-gray-50 p-1 border-2 w-full border-gray-700" type="date"></input>
                        </td>
                        <td className="border p-2">
                            <input className="rounded-md bg-gray-50 p-1 border-2 w-20 border-gray-700"></input>
                        </td>
                        <td className="border p-2">
                            <input className="rounded-md bg-gray-50 p-1 border-2 w-20 border-gray-700"></input>
                        </td>
                        <td className="border p-2 flex gap-2">
                            <button className="bg-red-500 text-white px-2 py-1 rounded">❌</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                </div>

                }
                
                {!lote1 && <div className="col-span-3 text-center p-1">
                    <p className="text-left">Fecha de Caducidad(*):</p>
                    <input placeholder="Ingresar fecha" type="date" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>}
                <div className="col-span-3 text-center p-1">
                    <div className="flex flex-wrap">
                        <input type="checkbox" id="check-lote" checked={checked1} onChange={(e)=> setChecked1(e.target.checked)} ></input>
                        <p className="text-left px-2">Comisión(*):</p>
                    </div>
                    {checked1 && (
                        <input 
                        className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
                        value={comision1}
                        onChange={(e)=>setComision1(e.target.value)}
                        >

                        </input>
                    )
                    }
                    
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Laboratorio(*):</p>
                    <div className="flex">
                        <ModalProducto nombre="Laboratorio(*):"></ModalProducto>
                        <input className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                    </div>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Categoría(*):</p>
                    <div className="flex">
                        <ModalProducto nombre="Categoría(*):"></ModalProducto>
                        <input className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                    </div>
                </div> 
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Ubicación(*):</p>
                    <div className="flex">
                        <ModalProducto nombre="Ubicación(*):"></ModalProducto>
                        <input className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                    </div>
                </div>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">¿Para qué sirve?:</p>                    
                    <textarea className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></textarea>
                </div>
                <div className="basis 1/3 text-center p-1 align-center">
                        <input type="checkbox" id="check-lote"></input>
                        <label className="p-2">Sede 1</label> 
                </div>
                
            </div>            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 place-self-start w-full m-2" >
                <div className="col-span-6 border-4 border-t border-blue-900" />
                <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">Precios del Producto</h1>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Utilidad(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Stock Unitario del Producto(*):</p>
                    <input  className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1 col-start-4">
                    <p className="text-left">Stock Unitario del Producto(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                </div>
                <div className="col-span-6 text-center">
                    <div className="flex flex-wrap px-1">
                        <input
                        type="checkbox"
                        id="check-lote"
                        checked={habilitarCaja}
                        onChange={(e) => setHabilitarCaja(e.target.checked)}
                        />
                        <p className="text-left px-2">Presentación Caja:</p>
                    </div>

                    <div className="grid grid-cols-2">
                        {[
                        { label: "Precio Costo(*)", name: "precioCosto" },
                        { label: "Precio Venta(*)", name: "precioVenta" },
                        { label: "Unidades x Caja(*)", name: "unidadesCaja" },
                        { label: "Stock Caja(*)", name: "stockCaja" },
                        { label: "Unidad de Medida(*)", name: "unidadMedida" },
                        ].map((item, index) => (
                        <div className="col-span-1 text-center p-1" key={index}>
                            <p className="text-left">{item.label}</p>
                            <input
                            className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                                habilitarCaja ? "bg-gray-50" : "bg-gray-500"
                              }`}
                            disabled={!habilitarCaja}
                            placeholder={item.label}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-6 text-center">
                    <div className="flex flex-wrap p-1">
                        <input
                        type="checkbox"
                        id="check-lote"
                        checked={habilitarBlister}
                        onChange={(e) => setHabilitarBlister(e.target.checked)}
                        />
                        <p className="text-left px-2">Presentación Unitaria:</p>
                    </div>

                    <div className="grid grid-cols-2">
                        {[
                        { label: "Precio Costo(*)", name: "precioCosto" },
                        
                        { label: "Unidad de Medida(*)", name: "unidadMedida" },
                        ].map((item, index) => (
                        <div className="col-span-1 text-center p-1" key={index}>
                            <p className="text-left">{item.label}</p>
                            <input
                            className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                                habilitarBlister ? "bg-gray-50" : "bg-gray-500"
                              }`}
                            disabled={!habilitarBlister}
                            placeholder={item.label}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-6 text-center">
                    <div className="flex flex-wrap p-1">
                        <input
                        type="checkbox"
                        id="check-lote"
                        checked={habilitarUnitaria}
                        onChange={(e) => setHabilitarUnitaria(e.target.checked)}
                        />
                        <p className="text-left px-2">Presentación Blister:</p>
                    </div>

                    <div className="grid grid-cols-2">
                        {[
                        { label: "Precio Venta(*)", name: "precioVentaB" },
                        { label: "Unidades x Blister", name: "uniXBlister" },                        
                        ].map((item, index) => (
                        <div className="col-span-1 text-center p-1" key={index}>
                            <p className="text-left">{item.label}</p>
                            <input
                            className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                                habilitarUnitaria ? "bg-gray-50" : "bg-gray-500"
                              }`}
                            disabled={!habilitarUnitaria}
                            placeholder={item.label}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-6 border-2 border-t border-gray-200 my-2 mx-1" />

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