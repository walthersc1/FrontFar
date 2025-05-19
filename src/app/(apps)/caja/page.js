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
  Search,  
} from "lucide-react";

const cajaData = [
  {
    usuario: "admin",
    caja: "Caja 1",
    turno: "Mañana",
    fecha_apertura: "2025-05-18",
    hora_apertura: "08:00",
    monto_apertura: 500,
    saldo_final_efectivo: 800,
    saldo_final_tarjeta: 200,
    opciones: ""
  },
  {
    usuario: "cajero1",
    caja: "Caja 2",
    turno: "Tarde",
    fecha_apertura: "2025-05-18",
    hora_apertura: "14:00",
    monto_apertura: 400,
    saldo_final_efectivo: 600,
    saldo_final_tarjeta: 300,
    opciones: ""
  },
  {
    usuario: "cajero1",
    caja: "Caja 3",
    turno: "Tarde",
    fecha_apertura: "2025-05-20",
    hora_apertura: "14:00",
    monto_apertura: 400,
    saldo_final_efectivo: 600,
    saldo_final_tarjeta: 300,
    opciones: ""
  },
  {
    usuario: "cajero1",
    caja: "Caja 4",
    turno: "Tarde",
    fecha_apertura: "2025-05-21",
    hora_apertura: "14:00",
    monto_apertura: 400,
    saldo_final_efectivo: 600,
    saldo_final_tarjeta: 300,
    opciones: ""
  },
  // ... más datos
];

export default function Caja() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 2;

    const pages = Math.ceil(cajaData.length / rowsPerPage);

    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      return cajaData.slice(start, end);
    }, [page, cajaData]);

    let list = useAsyncList({
    async load({ signal }) {
      // Aquí puedes simular una carga asincrónica (como si viniera de un API)
      await new Promise((resolve) => setTimeout(resolve, 500)); // simulación de delay
      setIsLoading(false);
      return {
        items: cajaData,
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
            <h1 className="text-2xl font-bold mb-4">CAJA - Listado</h1>
    
            {/* Botones superiores */}
            <div className="flex gap-8 mb-4">
              <Link href={"/stock/ProductoNuevo"}>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">            
                + Nueva Apertura</button>
              </Link>
              <Link href={"/stock/ServicioNuevo"}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                + Nuevo Egreso</button>
              </Link>
              <Link href={"/stock/ServicioNuevo"}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                + Nuevo Ingreso</button>
              </Link>
            </div>
            <div className='grid grid-cols-4 gap-4 my-4 items-center'>
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
                  <input placeholder={`Digite el nombre del usuario`} className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
              </div>
              <div className='col-start-1 col-span-1 justify-items-start'>
                  <button className="flex h-full items-center gap-2 bg-gray-500 text-white font-bold py-2 px-4 rounded-md">Exportar</button>
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
                    <TableColumn key="usuario" isRowHeader allowsSorting>Usuario</TableColumn>
                    <TableColumn key="caja" allowsSorting>Caja</TableColumn>
                    <TableColumn key="turno" allowsSorting>Turno</TableColumn>
                    <TableColumn key="fecha_apertura" allowsSorting>Fecha Apertura</TableColumn>
                    <TableColumn key="hora_apertura" allowsSorting>Hora Apertura</TableColumn>
                    <TableColumn key="monto_apertura" allowsSorting>Monto Apertura</TableColumn>
                    <TableColumn key="saldo_final_efectivo" allowsSorting>Saldo Final Efectivo</TableColumn>
                    <TableColumn key="saldo_final_tarjeta" allowsSorting>Saldo Final Tarjeta</TableColumn>
                    <TableColumn key="opciones">Opciones</TableColumn>
                </TableHeader>
                <TableBody
                    isLoading={isLoading}
                    items={items}
                    loadingContent={<Spinner label="Cargando..." />}
                >
                    {(item) => (
                    <TableRow key={item.usuario + item.fecha_apertura}>
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
      </div>
    )
}
