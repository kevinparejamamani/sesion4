import { Usuario } from '../models/usuario.model.js';


export const listar = () => Usuario.findAll({ where:{ activo:true } });
export const obtener = (id) => Usuario.findOne({ where:{ id_usuario:id, activo:true } });
export const eliminar = async (id) => (await Usuario.update({ activo:false }, { where:{ id_usuario:id } }))[0];
export const bloquear = async (id, bloqueado=true) => (await Usuario.update({ bloqueado }, { where:{ id_usuario:id } }))[0];
export const obtenerPorEmail = (email) => Usuario.findOne({ where:{ email } });
