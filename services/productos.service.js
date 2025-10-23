import { Producto } from '../models/producto.model.js';

export const listar = () => Producto.findAll({ where:{ activo:true } });
export const obtener = (id) => Producto.findOne({ where:{ id_producto:id, activo:true } });
export const crear = async (data) => (await Producto.create(data)).id_producto;
export const actualizar = async (id, data) => (await Producto.update(data, { where:{ id_producto:id } }))[0];
export const eliminar = async (id) => (await Producto.update({ activo:false }, { where:{ id_producto:id } }))[0];
