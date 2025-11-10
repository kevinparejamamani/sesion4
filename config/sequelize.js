import Sequelize from 'sequelize';

// Configuración de la conexión
const orm = new Sequelize('bdprueba', 'root', '12345678', {
  host: 'localhost',
  port: 3306, // 👈 agrégalo también (mejor práctica)
  dialect: 'mysql',
  pool: {
    max: 2,
    idle: 10000,
    acquire: 60000,
  },
  logging: false, // 👈 opcional para no saturar la consola
});

export default orm;