import _express from 'express';
import * as c from '../controllers/usuarios.controller.js';


const router = _express.Router();
router.get('/',  c.listar);
router.get('/:id',  c.obtener);
router.post('/', c.crear);
router.put('/:id',  c.actualizar);
router.patch('/:id',  c.actualizar);
router.delete('/:id',  c.eliminar);
router.patch('/bloquear/:id',  c.bloquear);
router.patch('/desbloquear/:id', c.desbloquear);

export default router;
