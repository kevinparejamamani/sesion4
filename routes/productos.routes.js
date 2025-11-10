import _express from 'express';
import * as c from '../controllers/productos.controller.js';
import auth from '../middlewares/auth.js';
import { upload, uploadProductoImagen, descargarProductoImagen } from '../controllers/files.controller.js';

const router = _express.Router();
router.get('/', c.listar);
router.get('/:id', c.obtener);
router.post('/',  c.crear);
router.put('/:id', c.actualizar);
router.patch('/:id', c.actualizar);
router.delete('/:id',  c.eliminar);

// Manejo de archivos (upload / download)
router.post('/:id/imagen',  upload.single('imagen'), uploadProductoImagen);
router.get('/:id/imagen', descargarProductoImagen);

export default router;
