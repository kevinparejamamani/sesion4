import * as m from '../models/camara.model.js';
export const getAll = () => m.getAll();
export const getById = (id) => m.getById(id);
export const create = (data) => m.create(data);
export const update = (id, data) => m.update(id, data);
export const deletes = (id) => m.deletes(id);
