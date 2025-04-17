"use client"
import React , {useState} from "react";
import Link from "next/link";

export default function ProductoNuevo (){

    const[selectedOption, setSelecttedOption] = useState("Exonerada");
    const handleOptionChange = (evenet) => {setSelecttedOption(event.target.value);};
    const list1 = ["Exonerada", "Gravada","Inafecto"]
    const [checked1, setChecked1] = useState(false);
    const [comision1, setComision1] = useState("");
    const [habilitarCaja, setHabilitarCaja] = useState(false);
    const [habilitarUnitaria, setHabilitarUnitaria] = useState(false);
    const [habilitarBlister, setHabilitarBlister] = useState(false);

    
    return(
        <div className="grid grid-cols-2 gap-4 flex flex-rows md:colspan-1">
            <div className="grid grid-cols-6 m-2" >
                <div className="col-span-6 border-4 border-t border-blue-900" />
                <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">Información del Producto</h1>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">Código de barras(*):</p>
                    <input placeholder="Ingresar código" className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">Nombre del Producto(*):</p>
                    <input placeholder="Ingresar nombre" className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">P. Activo(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">C. Digemid(*):</p>
                    <input  className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Patología(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">R.Sanitario(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-6 flex flex-row justify-between px-3 py-2">
                    <div className="basis 1/3 text-center p-1 align-center">
                        <input type="checkbox" id="check-lote"></input>
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
                <div className="col-span-6 flex flex-row">
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
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Fecha de Caducidad(*):</p>
                    <input placeholder="Ingresar fecha" type="date" className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <div className="flex">
                        <input type="checkbox" id="check-lote" checked={checked1} onChange={(e)=> setChecked1(e.target.checked)} ></input>
                        <p className="text-left px-2">Comisión(*):</p>
                    </div>
                    {checked1 && (
                        <input 
                        className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"
                        value={comision1}
                        onChange={(e)=>setComision1(e.target.value)}
                        >

                        </input>
                    )
                    }
                    
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Laboratorio(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Categoría(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div> 
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Ubicación(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-6 text-center p-1">
                    <p className="text-left">¿Para qué sirve?:</p>                    
                    <textarea className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></textarea>
                </div>
                <div className="basis 1/3 text-center p-1 align-center">
                        <input type="checkbox" id="check-lote"></input>
                        <label className="p-2">Sede 1</label> 
                </div>
                <div className="col-span-6 p-2 px-8">
                    <div className="flex flex-col">
                        <label className="py-2">Subir foto</label> 
                        <input type="file" id="check-lote"></input>
                    </div>
                </div>
            </div>            
            <div className="grid grid-cols-6 place-self-start container m-2" >
                <div className="col-span-6 border-4 border-t border-blue-900" />
                <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">Precios del Producto</h1>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Utilidad(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1">
                    <p className="text-left">Stock Unitario del Producto(*):</p>
                    <input  className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-3 text-center p-1 col-start-4">
                    <p className="text-left">Stock Unitario del Producto(*):</p>
                    <input className="rounded-md bg-gray-50 p-2 border-2 container border-gray-700"></input>
                </div>
                <div className="col-span-6 text-center">
                    <div className="flex px-1">
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
                            className={`rounded-md p-2 border-2 container border-gray-700 ${
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
                    <div className="flex p-1">
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
                        { label: "PVP 1 Unidades", name: "pvp1" },
                        { label: "PVP 2 Unidades", name: "pvp2" },
                        { label: "PVP 3 Unidades", name: "pvp3" },
                        { label: "Unidad de Medida(*)", name: "unidadMedida" },
                        ].map((item, index) => (
                        <div className="col-span-1 text-center p-1" key={index}>
                            <p className="text-left">{item.label}</p>
                            <input
                            className={`rounded-md p-2 border-2 container border-gray-700 ${
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
                    <div className="flex p-1">
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
                            className={`rounded-md p-2 border-2 container border-gray-700 ${
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
                        <button className="rounded-xl font-bold bg-green-400 p-2">Agregar</button>
                        <button className="col-start-6 rounded-xl font-bold bg-red-400 p-2">Cancelar</button>
                    </div>
                </div>
                
            </div>

            
        </div>

    );
};