import _express from 'express';
import * as c from '../controllers/usuarios.controller.js';
import auth from '../middlewares/auth.js';

const router = _express.Router();
router.get('/', auth, c.listar);
router.get('/:id', auth, c.obtener);
router.post('/', auth, c.crear);
router.put('/:id', auth, c.actualizar);
router.patch('/:id', auth, c.actualizar);
router.delete('/:id', auth, c.eliminar);
router.patch('/bloquear/:id', auth, c.bloquear);
router.patch('/desbloquear/:id', auth, c.desbloquear);

export default router;
