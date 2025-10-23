import * as s from '../services/pedidos.service.js';

export const listar = async (req, res) => {
  try { res.json(await s.listar()); } catch(e){ res.status(500).json({error:'Error listando pedidos'}); }
};
export const obtener = async (req, res) => {
  try { res.json((await s.obtener(req.params.id)) || {}); } catch(e){ res.status(500).json({error:'Error obteniendo pedido'}); }
};
export const crear = async (req, res) => {
  try { const id = await s.crear(req.body); res.status(201).json({ idPedido: id }); } catch(e){ res.status(500).json({error:'Error creando pedido'}); }
};
export const actualizar = async (req, res) => {
  try { res.json({ actualizados: await s.actualizar(req.params.id, req.body) }); } catch(e){ res.status(500).json({error:'Error actualizando pedido'}); }
};
export const eliminar = async (req, res) => {
  try { res.json({ eliminados: await s.eliminar(req.params.id) }); } catch(e){ res.status(500).json({error:'Error eliminando pedido'}); }
};
