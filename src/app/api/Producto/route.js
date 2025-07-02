import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
/* Esta query sirve para traer a todos los productos y se tiene que filtrar por sede mas adelante */
export async function POST(request) {
  try {
    // Mas adelante se tiene que traer el codigo de la sede desde el token
    console.log("Entrando a post")
    const body = await request.json();
    console.log(body);
    // Consulta de prueba (ajusta el nombre de la tabla)
    const result = await sql
    `SELECT  p.id, p.nombreproduc, p.digemid,p.registro_sanitario, p.ventaconreseta, 
      p.canjeconpunto, p.descripcion, p.fechacaducidad, 
      p.stockunitario, p.stockminimo,p.preciocostocaja,
      p.precioventacaja, p.unidadesxcaja,p.stockcaja,
      p.unidad_medida_id_unidad, p.preciocostounidad,
      p.precioventaunidad,p.precioventaxblister,
      p.unidad_medida_id_blister, 
      p.unidadesxblister, p.Estado,
      l.nombre as laboratorio, 
      l.ubicacionlab, c.nombre as categoria,
      um.nombre as unidadmedidaunitario,
      pa.nombre as patologia, pr_a.nombre as principio_activo
      FROM producto p
      LEFT JOIN laboratorio l ON l.id = p.laboratorio_id
      LEFT JOIN categoria c on p.categoria_id = c.id
      LEFT JOIN patologia pa on pa.id = p.patologia_id
      LEFT JOIN principio_activo pr_a on pr_a.id = p.principio_activo_id
      LEFT JOIN unidad_medida um on um.id = p.unidad_medida_id_unidad;`
      
      //WHERE  p.id = ${1};

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
