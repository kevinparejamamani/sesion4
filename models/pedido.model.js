import { DataTypes } from 'sequelize';
import orm from '../config/sequelize.js';
import { Usuario } from './usuario.model.js';
import { Producto } from './producto.model.js';

export const Pedido = orm.define('pedido', {
  id_pedido: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_usuario: { type: DataTypes.INTEGER, allowNull: true },
  total: { type: DataTypes.DECIMAL(10,2) },
  estado: { type: DataTypes.STRING(30), defaultValue: 'CREADO' },
  creado_en: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'pedido', timestamps: false });

// Relación 1..N: Usuario tiene muchos Pedidos
Usuario.hasMany(Pedido, { foreignKey:'id_usuario' });
Pedido.belongsTo(Usuario, { foreignKey:'id_usuario' });

// Relación N..N simple a través de una tabla intermedia pedido_detalle
export const PedidoDetalle = orm.define('pedido_detalle', {
  id_pedido: { type: DataTypes.INTEGER, primaryKey: true },
  id_producto: { type: DataTypes.INTEGER, primaryKey: true },
  cantidad: { type: DataTypes.INTEGER, defaultValue: 1 },
  precio_unitario: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, { tableName: 'pedido_detalle', timestamps: false });

Pedido.belongsToMany(Producto, { through: PedidoDetalle, foreignKey: 'id_pedido', otherKey: 'id_producto' });
Producto.belongsToMany(Pedido, { through: PedidoDetalle, foreignKey: 'id_producto', otherKey: 'id_pedido' });
