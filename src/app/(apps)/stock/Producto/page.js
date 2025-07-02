"use client";
import { useDisclosure } from "@heroui/react";
import Link from "next/link";
import ModalProducto from "@/app/componentes/ModalProducto";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const consultaProdcutos = async (dato) => {
  const cons = await fetch("../api/Producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: dato }),
  });
  return cons.json();
};

export default function Producto() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedOption, setSelecttedOption] = useState("Exonerada");
  const handleOptionChange = (evenet) => {
    setSelecttedOption(event.target.value);
  };
  const list1 = ["Exonerada", "Gravada", "Inafecto"];
  const [checked1, setChecked1] = useState(false);
  const [lote1, setLote1] = useState(false);
  const [comision1, setComision1] = useState("");
  const [habilitarCaja, setHabilitarCaja] = useState(false);
  const [habilitarUnitaria, setHabilitarUnitaria] = useState(false);
  const [habilitarBlister, setHabilitarBlister] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [busqueda, setBusqueda] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["inventario"],
    queryFn: () => (id ? consultaProdcutos(id) : Promise.resolve([])),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const productoSeleccionado = data?.find(
    (producto) => producto.id.toString() === id
  );

  useEffect(() => {
    if (productoSeleccionado) {
      setBusqueda(productoSeleccionado);
    }
    if (id) {
      setHabilitarCaja(true);
      setHabilitarUnitaria(true);
      setHabilitarBlister(true);
    }
  }, [productoSeleccionado]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar datos</p>;
  console.log(busqueda);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex flex-wrap flex-rows md:colspan-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 m-2">
        <div className="col-span-6 border-4 border-t border-blue-900" />
        <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">
          Información del Producto
        </h1>
        <div className="col-span-6 text-center p-1">
          <p className="text-left">Código de barras(*):</p>
          <input
            placeholder="Ingresar código"
            className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            value={busqueda?.id || ""}
            readOnly
          ></input>
        </div>
        <div className="col-span-6 text-center p-1">
          <p className="text-left">Nombre del Producto(*):</p>
          <input
            placeholder="Ingresar nombre"
            className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            value={busqueda?.nombreproduc || ""}
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                nombreproduc: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">P. Activo(*):</p>
          <div className="flex">
            <ModalProducto nombre="P. Activo(*)"></ModalProducto>
            <select
              className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"
              value={busqueda?.principio_activo || ""}
              onChange={(e) =>
                setBusqueda((prev) => ({
                  ...prev,
                  principio_activo: e.target.value,
                }))
              }
            >
              <option value="">Selecciona una opción</option>
              <option value="Ibuprofeno">Ibuprofeno</option>
              <option value="Amoxicilina">Amoxicilina</option>
              <option value="Inafecto">Inafecto</option>
            </select>
          </div>
        </div>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">C. Digemid(*):</p>
          <input
            className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            value={busqueda?.digemid || ""}
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                digemid: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">Patología(*):</p>
          <div className="flex">
            <ModalProducto nombre="Patología(*):"></ModalProducto>
            <select
              className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"
              value={busqueda?.patologia || ""}
              onChange={(e) =>
                setBusqueda((prev) => ({
                  ...prev,
                  patologia: e.target.value,
                }))
              }
            >
              <option value="">Selecciona una opción</option>
              <option value="Infección respiratoria">
                Infección respiratoria
              </option>
            </select>
          </div>
        </div>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">R.Sanitario(*):</p>
          <input
            className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            value={busqueda?.registro_sanitario || ""}
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                registro_sanitario: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="col-span-6 flex flex-wrap flex-row justify-between px-3 py-2">
          <div className="basis 1/3 text-center p-1 align-center">
            <input
              type="checkbox"
              id="check-lote"
              checked={lote1}
              onChange={(e) => setLote1(e.target.checked)}
            ></input>
            <label className="p-2">Lote</label>
          </div>
          <div className="basis 1/3 text-center p-1">
            <input
              type="checkbox"
              id="check-ventaReceta"
              checked={busqueda?.ventaconreseta === true || false}
              onChange={(e) =>
                setBusqueda((prev) => ({
                  ...prev,
                  ventaconreseta: e.target.checked,
                }))
              }
            ></input>
            <label className="p-2">Venta con Receta</label>
          </div>
          <div className="basis 1/3 text-center p-1">
            <input type="checkbox" id="check-canjePuntos"></input>
            <label className="p-2">Canje con Puntos</label>
          </div>
        </div>
        <div className="col-span-6 flex flex-wrap flex-row">
          {list1.map((item, index) => (
            <div
              key={index}
              className="flex-1 p-3 m-2 flex flex-wrap justify-between -gap-y-3 border-2 border-blue-900 rounded-2xl"
            >
              <div className="w-3/4">{item}</div>
              <div className="w-1/4 text-blue-500">
                <input
                  type="radio"
                  value={item}
                  name="op"
                  defaultChecked={index === 0}
                  onChange={handleOptionChange}
                  className="w-full h-full"
                ></input>
              </div>
            </div>
          ))}
        </div>
        {lote1 && (
          <div className="col-span-6">
            <button className="rounded bg-blue-900 my-4 p-2 font-bold text-white">
              + Agregar Lote
            </button>
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
                    <input
                      className="rounded-md bg-gray-50 p-1 border-2 w-full border-gray-700"
                      type="date"
                    ></input>
                  </td>
                  <td className="border p-2">
                    <input className="rounded-md bg-gray-50 p-1 border-2 w-20 border-gray-700"></input>
                  </td>
                  <td className="border p-2">
                    <input className="rounded-md bg-gray-50 p-1 border-2 w-20 border-gray-700"></input>
                  </td>
                  <td className="border p-2 flex gap-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      ❌
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {!lote1 && (
          <div className="col-span-3 text-center p-1">
            <p className="text-left">Fecha de Caducidad(*):</p>
            <input
              placeholder="Ingresar fecha"
              type="date"
              className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            ></input>
          </div>
        )}
        <div className="col-span-3 text-center p-1">
          <div className="flex flex-wrap">
            <input
              type="checkbox"
              id="check-lote"
              checked={checked1}
              onChange={(e) => setChecked1(e.target.checked)}
            ></input>
            <p className="text-left px-2">Comisión(*):</p>
          </div>
          {checked1 && (
            <input
              className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
              value={comision1}
              onChange={(e) => setComision1(e.target.value)}
            ></input>
          )}
        </div>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">Laboratorio(*):</p>
          <div className="flex">
            <ModalProducto nombre="Laboratorio(*):"></ModalProducto>
            <select
              className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"
              value={busqueda?.laboratorio || ""}
              onChange={(e) =>
                setBusqueda((prev) => ({
                  ...prev,
                  laboratorio: e.target.value,
                }))
              }
            >
              <option value="">Selecciona una opción</option>
              <option value="Laboratorios Roche">Laboratorios Roche</option>
            </select>
          </div>
        </div>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">Categoría(*):</p>
          <div className="flex">
            <ModalProducto nombre="Categoría(*):"></ModalProducto>
            <select
              className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"
              value={busqueda?.categoria || ""}
              onChange={(e) =>
                setBusqueda((prev) => ({
                  ...prev,
                  categoria: e.target.value,
                }))
              }
            >
              <option value="">Selecciona una opción</option>
              <option value="Antibiótico">Antibiótico</option>
            </select>
          </div>
        </div>
        <div className="col-span-6 text-center p-1">
          <p className="text-left">Ubicación(*):</p>
          <div className="flex">
            <ModalProducto nombre="Ubicación(*):"></ModalProducto>
            <select
              className="rounded-r-md bg-gray-50 p-2 border-2 w-full border-gray-700"
              value={busqueda?.ubicacionlab || ""}
              onChange={(e) =>
                setBusqueda((prev) => ({
                  ...prev,
                  ubicacionlab: e.target.value,
                }))
              }
            >
              <option value="">Selecciona una opción</option>
              <option value="Av. Javier Prado Este 1234, San Isidro, Lima, Perú">
                Av. Javier Prado Este 1234, San Isidro, Lima, Perú
              </option>
            </select>
          </div>
        </div>
        <div className="col-span-6 text-center p-1">
          <p className="text-left">¿Para qué sirve?:</p>
          <textarea
            className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            value={busqueda?.descripcion || ""}
            maxLength={250}
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                descripcion: e.target.value,
              }))
            }
          ></textarea>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 place-self-start w-full m-2">
        <div className="col-span-6 border-4 border-t border-blue-900" />
        <h1 className="col-span-6 text-center shadow-md py-2 mb-2 font-bold">
          Precios del Producto
        </h1>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">Utilidad(*):</p>
          <input className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
        </div>
        <div className="col-span-3 text-center p-1">
          <p className="text-left">Stock Unitario del Producto(*):</p>
          <input
            className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            value={busqueda?.stockunitario || ""}
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                stockunitario: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="col-span-3 text-center p-1 col-start-4">
          <p className="text-left">Stock Unitario Minimo del Producto(*):</p>
          <input
            className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"
            value={busqueda?.stockminimo || ""}
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                stockminimo: e.target.value,
              }))
            }
          ></input>
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
            <div className="col-span-1 text-center p-1">
              <p className="text-left">Precio Costo(*)</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarCaja ? "bg-gray-50" : "bg-gray-500"
                }`}
                disabled={!habilitarCaja}
                placeholder={"Precio Costo(*)"}
                value={busqueda?.preciocostocaja || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    preciocostocaja: e.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="col-span-1 text-center p-1">
              <p className="text-left">Precio Venta(*)</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarCaja ? "bg-gray-50" : "bg-gray-500"
                }`}
                disabled={!habilitarCaja}
                placeholder={"Precio Venta(*)"}
                value={busqueda?.precioventacaja || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    precioventacaja: e.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="col-span-1 text-center p-1">
              <p className="text-left">Unidades x Caja(*)</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarCaja ? "bg-gray-50" : "bg-gray-500"
                }`}
                disabled={!habilitarCaja}
                placeholder={"Unidades x Caja(*)"}
                value={busqueda?.unidadesxcaja || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    unidadesxcaja: e.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="col-span-1 text-center p-1">
              <p className="text-left">Stock Caja(*)</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarCaja ? "bg-gray-50" : "bg-gray-500"
                }`}
                disabled={!habilitarCaja}
                placeholder={"Stock Caja(*)"}
                value={busqueda?.stockcaja || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    stockcaja: e.target.value,
                  }))
                }
              ></input>
            </div>
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
            <p className="text-left px-2">Presentación Unitaria:</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 text-center p-1">
              <p className="text-left">Precio Costo(*)</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarUnitaria ? "bg-gray-50" : "bg-gray-500"
                }`}
                placeholder={"Precio Costo(*)"}
                disabled={!habilitarUnitaria}
                value={busqueda?.preciocostounidad || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    preciocostounidad: e.target.value,
                  }))
                }
              ></input>
            </div>

            <div className="col-span-1 text-center p-1">
              <p className="text-left">Precio Venta(*)</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarUnitaria ? "bg-gray-50" : "bg-gray-500"
                }`}
                placeholder={"Precio Venta(*)"}
                disabled={!habilitarUnitaria}
                value={busqueda?.precioventaunidad || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    precioventaunidad: e.target.value,
                  }))
                }
              ></input>
            </div>
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
            <p className="text-left px-2">Presentación Blister:</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 text-center p-1">
              <p className="text-left">Precio Venta(*)</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarBlister ? "bg-gray-50" : "bg-gray-500"
                }`}
                placeholder={"Precio Venta(*)"}
                disabled={!habilitarBlister}
                value={busqueda?.precioventaxblister || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    precioventaxblister: e.target.value,
                  }))
                }
              ></input>
            </div>

            <div className="col-span-1 text-center p-1">
              <p className="text-left">Unidades x Blister</p>
              <input
                className={`rounded-md p-2 border-2 w-full border-gray-700 ${
                  habilitarBlister ? "bg-gray-50" : "bg-gray-500"
                }`}
                placeholder={"Unidades x Blister"}
                disabled={!habilitarBlister}
                value={busqueda?.unidadesxblister || ""}
                onChange={(e) =>
                  setBusqueda((prev) => ({
                    ...prev,
                    unidadesxblister: e.target.value,
                  }))
                }
              ></input>
            </div>
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
}
