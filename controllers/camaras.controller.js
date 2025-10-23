import * as s from '../services/camaras.service.js';
export const getAll = async (req, res) => { try { res.json(await s.getAll() || []); } catch(e) { res.status(500).json({error:'Error obteniendo cámaras'});} };
export const getById = async (req, res) => { try { res.json((await s.getById(req.params.id)) || {}); } catch(e) { res.status(500).json({error:'Error obteniendo cámara'});} };
export const create = async (req, res) => { try { const idCamara = await s.create(req.body); res.status(201).json({ idCamara }); } catch(e) { res.status(500).json({error:'Error creando cámara'});} };
export const update = async (req, res) => { try { res.json({ actualizados: await s.update(req.params.id, req.body) }); } catch(e) { res.status(500).json({error:'Error actualizando cámara'});} };
export const deletes = async (req, res) => { try { res.json({ eliminados: await s.deletes(req.params.id) }); } catch(e) { res.status(500).json({error:'Error eliminando cámara'});} };
