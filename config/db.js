import _mysql from 'mysql2/promise'; // Usamos la versión con Promesas

const pool = _mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bdprueba',
  waitForConnections: true,
  connectionLimit: 2,
  queueLimit: 0
});

export default pool;