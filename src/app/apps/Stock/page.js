
export default function Stock() {
    return (

    <div>
      
    <main className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg text-center mb-6">
            <h1 className="text-2xl font-bold">¡Gran oferta de temporada!</h1>
            <p className="text-gray-700 mt-2">Descuentos especiales en todos nuestros productos.</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/150" alt="Producto" className="mx-auto"></img>
                <h2 className="text-lg font-semibold mt-2">Producto 1</h2>
                <p className="text-gray-600">$25.00</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/150" alt="Producto" className="mx-auto"></img>
                <h2 className="text-lg font-semibold mt-2">Producto 2</h2>
                <p className="text-gray-600">$30.00</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src="https://via.placeholder.com/150" alt="Producto" className="mx-auto"></img>
                <h2 className="text-lg font-semibold mt-2">Producto 3</h2>
                <p className="text-gray-600">$20.00</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
        </section>
    </main>
    
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        &copy; 2025 Tienda Online. Todos los derechos reservados.
    </footer>
    </div>

    );
  }
  