import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Producto } from '../models/producto.model.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/products');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `prod_${req.params.id || 'new'}_${Date.now()}${ext}`);
  }
});
export const upload = multer({ storage });

export const uploadProductoImagen = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await Producto.findByPk(id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    // Save filename in DB
    await Producto.update({ imagen: req.file.filename }, { where:{ id_producto:id } });
    res.json({ ok:true, file: req.file.filename });
  } catch (e) {
    res.status(500).json({ error: 'Error subiendo imagen' });
  }
};

export const descargarProductoImagen = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await Producto.findByPk(id);
    if (!producto || !producto.imagen) return res.status(404).json({ error: 'Imagen no disponible' });
    const fp = path.join('uploads/products', producto.imagen);
    if (!fs.existsSync(fp)) return res.status(404).json({ error: 'Archivo no encontrado' });
    return res.download(fp);
  } catch (e) {
    res.status(500).json({ error: 'Error descargando imagen' });
  }
};
