import _express from 'express';
import * as c from '../controllers/pedidos.controller.js';
import auth from '../middlewares/auth.js';

const router = _express.Router();
router.get('/',  c.listar);
router.get('/:id', c.obtener);
router.post('/', c.crear);
router.put('/:id', c.actualizar);
router.patch('/:id',  c.actualizar);
router.delete('/:id', c.eliminar);
export default router;
