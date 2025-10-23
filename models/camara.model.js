import { DataTypes } from 'sequelize';
import orm from '../config/sequelize.js';

export const Camara = orm.define('camara', {
  id_camara: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  precio: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  resolucion: { type: DataTypes.STRING(50) },
  tipo: { type: DataTypes.STRING(50) },
  activo: { type: DataTypes.BOOLEAN, defaultValue: true },
  fecharegistro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'camara', timestamps: false });

export const getAll = async () => Camara.findAll({ where:{ activo:true } });
export const getById = async (id) => Camara.findOne({ where:{ id_camara:id, activo:true } });
export const create = async (data) => (await Camara.create(data)).id_camara;
export const update = async (id, data) => (await Camara.update(data, { where:{ id_camara:id, activo:true } }))[0];
export const deletes = async (id) => (await Camara.update({ activo:false }, { where:{ id_camara:id } }))[0];
