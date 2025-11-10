import { Usuario } from '../models/usuario.model.js';
import bcrypt from 'bcryptjs';

export const listar = () => Usuario.findAll({ where:{ activo:true } });
export const obtener = (id) => Usuario.findOne({ where:{ id_usuario:id, activo:true } });
export const crear = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  data.password = hash;
  return (await Usuario.create(data)).id_usuario;
};
export const actualizar = async (id, data) => {
  if (data.password) data.password = await bcrypt.hash(data.password, 10);
  return (await Usuario.update(data, { where:{ id_usuario:id } }))[0];
};
export const eliminar = async (id) => (await Usuario.update({ activo:false }, { where:{ id_usuario:id } }))[0];
export const bloquear = async (id, bloqueado=true) => (await Usuario.update({ bloqueado }, { where:{ id_usuario:id } }))[0];
export const obtenerPorEmail = (email) => Usuario.findOne({ where:{ email } });
