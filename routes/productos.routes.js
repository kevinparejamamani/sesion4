import _express from 'express';
import * as c from '../controllers/productos.controller.js';
import auth from '../middlewares/auth.js';
import { upload, uploadProductoImagen, descargarProductoImagen } from '../controllers/files.controller.js';

const router = _express.Router();
router.get('/', auth, c.listar);
router.get('/:id', auth, c.obtener);
router.post('/', auth, c.crear);
router.put('/:id', auth, c.actualizar);
router.patch('/:id', auth, c.actualizar);
router.delete('/:id', auth, c.eliminar);

// Manejo de archivos (upload / download)
router.post('/:id/imagen', auth, upload.single('imagen'), uploadProductoImagen);
router.get('/:id/imagen', auth, descargarProductoImagen);

export default router;
