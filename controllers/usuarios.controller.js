import * as s from '../services/usuarios.service.js';

export const listar = async (req, res) => {
  try { res.json(await s.listar()); } catch(e){ res.status(500).json({error:'Error listando usuarios'}); }
};
export const obtener = async (req, res) => {
  try { res.json((await s.obtener(req.params.id)) || {}); } catch(e){ res.status(500).json({error:'Error obteniendo usuario'}); }
};
export const crear = async (req, res) => {
  try { const id = await s.crear(req.body); res.status(201).json({ idUsuario: id }); } catch(e){ res.status(500).json({error:'Error creando usuario'}); }
};
export const actualizar = async (req, res) => {
  try { res.json({ actualizados: await s.actualizar(req.params.id, req.body) }); } catch(e){ res.status(500).json({error:'Error actualizando usuario'}); }
};
export const eliminar = async (req, res) => {
  try { res.json({ eliminados: await s.eliminar(req.params.id) }); } catch(e){ res.status(500).json({error:'Error eliminando usuario'}); }
};
export const bloquear = async (req, res) => {
  try { res.json({ bloqueados: await s.bloquear(req.params.id, true) }); } catch(e){ res.status(500).json({error:'Error bloqueando usuario'}); }
};
export const desbloquear = async (req, res) => {
  try { res.json({ desbloqueados: await s.bloquear(req.params.id, false) }); } catch(e){ res.status(500).json({error:'Error desbloqueando usuario'}); }
};
