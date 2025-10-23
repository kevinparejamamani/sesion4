import { Pedido, PedidoDetalle } from '../models/pedido.model.js';
import { Producto } from '../models/producto.model.js';

export const listar = () => Pedido.findAll({ include: [ { model: Producto } ] });
export const obtener = (id) => Pedido.findOne({ where:{ id_pedido:id }, include: [ { model: Producto } ] });
export const crear = async (data) => {
  // data: { id_usuario, items:[{id_producto, cantidad}] }
  const p = await Pedido.create({ id_usuario: data.id_usuario });
  let total = 0;
  for (const it of data.items || []) {
    const prod = await Producto.findByPk(it.id_producto);
    if (!prod) continue;
    const pu = Number(prod.precio);
    const cant = Number(it.cantidad || 1);
    total += pu * cant;
    await PedidoDetalle.create({
      id_pedido: p.id_pedido,
      id_producto: prod.id_producto,
      cantidad: cant,
      precio_unitario: pu
    });
  }
  await Pedido.update({ total }, { where:{ id_pedido: p.id_pedido } });
  return p.id_pedido;
};
export const actualizar = async (id, data) => (await Pedido.update(data, { where:{ id_pedido:id } }))[0];
export const eliminar = async (id) => (await Pedido.destroy({ where:{ id_pedido:id } }));
