import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export async function GET() {
  try {
    // Consulta de prueba (ajusta el nombre de la tabla)
    const result = await sql
    `select 
      LPAD(p.Id::TEXT, 9, '0') || ' | ' || p.nombreproduc || ' | ' 
      || l.nombre || ' | Stock:' || p.stockunitario as Inventario
      from producto p
      left join laboratorio l 
      on l.id = p.laboratorio_id;;`;
    
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    return new Response(JSON.stringify({ error: 'Error al consultar la base de datos' }), {
      status: 500,
    });
  }
}
