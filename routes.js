import _express from 'express';
import rAuth from './routes/auth.routes.js';
import rProductos from './routes/productos.routes.js';
import rUsuarios from './routes/usuarios.routes.js';
import rPedidos from './routes/pedidos.routes.js';

const router = _express.Router();

// Seguridad
router.use('/auth', rAuth);

// Módulos protegidos (requieren JWT en headers)
router.use('/productos', rProductos);
router.use('/usuarios', rUsuarios);
router.use('/pedidos', rPedidos);

export default router;
