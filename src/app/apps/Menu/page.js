{/*Este es el menu principal*/}
import { Plus, Pencil, Trash2, Search, Package, FileText } from "lucide-react";


export default function Menu() {
  const buttons = [
    { text: "Agregar", icon: <Plus className="w-6 h-6" /> },
    { text: "Editar", icon: <Pencil className="w-6 h-6" /> },
    { text: "Eliminar", icon: <Trash2 className="w-6 h-6" /> },
    { text: "Buscar", icon: <Search className="w-6 h-6" /> },
    { text: "Stock", icon: <Package className="w-6 h-6" /> },
    { text: "Reportes", icon: <FileText className="w-6 h-6" /> },
  ];

  const products = Array.from({ length: 50 }, (_, i) => ({
    code: `00${i + 1}`,
    name: `Producto ${i + 1}`,
    category: ["Analgésico", "Antibiótico", "Vitaminas", "Antiinflamatorio"][i % 4],
    format: "Tabletas 500mg",
    stock: Math.floor(Math.random() * 100),
    minStock: 10,
    unit: "Cajas",
    expiration: "2025-08-12",
    supplier: "Lab. Genfar",
    unitPrice: (Math.random() * 20).toFixed(2),
  }));

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Sección Superior */}
      <div className="flex space-x-4">
        {/* Botones grandes con iconos */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-md transition w-full"
            >
              {btn.icon}
              {btn.text}
            </button>
          ))}
        </div>

        {/* Lista de categorías */}
        <div className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Categorías</h2>
          <ul className="space-y-2">
            {["Analgésicos", "Antibióticos", "Vitaminas", "Antiinflamatorios"].map((category, index) => (
              <li key={index} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer">
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tabla de productos con scroll */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Inventario de Productos</h2>
        <div className="overflow-y-auto max-h-96 border rounded-lg">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-500 text-white sticky top-0">
              <tr>
                <th className="p-3 border">Código</th>
                <th className="p-3 border">Nombre</th>
                <th className="p-3 border">Categoría</th>
                <th className="p-3 border">Formato</th>
                <th className="p-3 border">Stock Actual</th>
                <th className="p-3 border">Stock Mínimo</th>
                <th className="p-3 border">Unidad</th>
                <th className="p-3 border">Fecha Venc.</th>
                <th className="p-3 border">Proveedor</th>
                <th className="p-3 border">Precio Unitario (S/)</th>
                <th className="p-3 border">Precio Total (S/)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="text-center border bg-gray-100 even:bg-gray-200">
                  <td className="p-2 border">{product.code}</td>
                  <td className="p-2 border">{product.name}</td>
                  <td className="p-2 border">{product.category}</td>
                  <td className="p-2 border">{product.format}</td>
                  <td className="p-2 border">{product.stock}</td>
                  <td className="p-2 border">{product.minStock}</td>
                  <td className="p-2 border">{product.unit}</td>
                  <td className="p-2 border">{product.expiration}</td>
                  <td className="p-2 border">{product.supplier}</td>
                  <td className="p-2 border">{product.unitPrice}</td>
                  <td className="p-2 border font-semibold">{(product.stock * product.unitPrice).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
