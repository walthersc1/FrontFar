"use client"
import React from 'react'
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  Spinner,
} from "@heroui/react";
import {useAsyncList} from "@react-stately/data";
import {  
  FileText,  
} from "lucide-react";
import {Tabs, Tab, Card, CardBody} from "@heroui/react";

const transfSalidasData = [
  {
    usuario: "admin",
    nro_transferencia: "Caja 1",
    fecha_registro: "Mañana",
    responsable: "2025-05-18",
    motivo: "08:00",
    serie: 500,
    opciones: ""
  },
  {
    usuario: "cajero1",
    nro_transferencia: "Caja 2",
    fecha_registro: "Tarde",
    responsable: "2025-05-18",
    motivo: "14:00",
    serie: 400,
    opciones: ""
  },
  {
    usuario: "cajero1",
    nro_transferencia: "Caja 3",
    fecha_registro: "Tarde",
    responsable: "2025-05-20",
    motivo: "14:00",
    serie: 400,
    opciones: ""
  },
  {
    usuario: "cajero1",
    nro_transferencia: "Caja 4",
    fecha_registro: "Tarde",
    responsable: "2025-05-21",
    motivo: "14:00",
    serie: 400,
    opciones: ""
  },
  // ... más datos
];

export default function TransferenciaSalida() {
  const [isLoading, setIsLoading] = React.useState(true);
      const [page, setPage] = React.useState(1);
      const rowsPerPage = 2;
  
      const pages = Math.ceil(transfSalidasData.length / rowsPerPage);
  
      const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
  
        return transfSalidasData.slice(start, end);
      }, [page, transfSalidasData]);
  
      let list = useAsyncList({
      async load({ signal }) {
        // Aquí puedes simular una carga asincrónica (como si viniera de un API)
        await new Promise((resolve) => setTimeout(resolve, 500)); // simulación de delay
        setIsLoading(false);
        return {
          items: transfSalidasData,
        };
      },
      async sort({ items, sortDescriptor }) {
        return {
          items: items.sort((a, b) => {
            let first = a[sortDescriptor.column];
            let second = b[sortDescriptor.column];
            let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
  
            if (sortDescriptor.direction === "descending") {
              cmp *= -1;
            }
  
            return cmp;
          }),
        };
      },
    });
  return (
    <div className="p-6">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold mb-4">TRANSFERENCIA Y SALIDA - Listado</h1>
  
        {/* Botones superiores */}
        <div className="flex gap-4 mb-4">          
          <Link href={"/transferenciaSalida/TransferenciaNueva"}>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            + Nueva Tranferencia</button></Link>            
          <Link href={"/transferenciaSalida/SalidaNueva"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Nueva Salida</button>
          </Link>
        </div>
        <Tabs aria-label="Options">
              <Tab key="transfSalida" title="TRANSFERENCIAS Y/YO SALIDAS REALIZADOS">
                <Card>
                  <CardBody>
                    <div className='grid grid-cols-4 gap-4 my-4 items-center'>                      
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
                            <input placeholder={`Digite el nombre del usuario`} className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                        </div>                                          
                    </div>
                      <Table
                        aria-label="Tabla de caja con ordenamiento"
                        rowHeight={30}
                        classNames={{
                            table: "min-h-[200px] my-4",
                            th: "bg-blue-500 text-white text-base hover:text-white",
                            thead: "text-white",
                            tbody:"uppercase",
                        }}
                        sortDescriptor={list.sortDescriptor}
                        selectionMode="multiple"
                        bottomContent={
                          <div className="flex w-full justify-center">
                            <Pagination
                              isCompact
                              showControls
                              showShadow
                              color="primary"
                              page={page}
                              total={pages}
                              onChange={(page) => setPage(page)}
                            />
                          </div>
                        }
                        onSortChange={list.sort}
                        >
                        <TableHeader>
                            <TableColumn key="usuario" isRowHeader allowsSorting>ID</TableColumn>
                            <TableColumn key="nro_transferencia" allowsSorting>Nro Tranferencia</TableColumn>
                            <TableColumn key="fecha_registro" allowsSorting>Fecha Hora Registro</TableColumn>
                            <TableColumn key="responsable" allowsSorting>Responsable</TableColumn>
                            <TableColumn key="motivo" allowsSorting>Motivo</TableColumn>
                            <TableColumn key="serie" allowsSorting>Serie</TableColumn>
                            <TableColumn key="opciones">Ver</TableColumn>
                        </TableHeader>
                        <TableBody
                            isLoading={isLoading}
                            items={items}
                            loadingContent={<Spinner label="Cargando..." />}
                        >
                            {(item) => (
                            <TableRow key={item.usuario + item.nro_transferencia}>
                              {(columnKey) =>
                                columnKey === "opciones" ? (
                                  <TableCell>
                                    <div className="flex gap-2">
                                      <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                        <FileText className="w-5 h-5" />
                                      </button>
                                      <Link href={"/"}>
                                        <button className="bg-yellow-500 text-white px-2 py-1 rounded">✏️</button>
                                      </Link>
                                      <Link href={"/caja/cierre"}>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded">❌</button>
                                      </Link>
                                    </div>
                                  </TableCell>
                                ) : (
                                  <TableCell className="uppercase">
                                    {getKeyValue(item, columnKey)}
                                  </TableCell>
                                )
                              }
                            </TableRow>
                            )}
                        </TableBody>
                      </Table>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="Salida" title="TRANSFERENCIAS Y/YO SALIDAS REALIZADOS">
                <Card>
                  <CardBody>
                      <div>Prueba</div>
                  </CardBody>
                </Card>
              </Tab>              
        </Tabs> 
    </div>
  )
}
