import jwt from 'jsonwebtoken';

import * as users from '../services/usuarios.service.js';

const SECRET = process.env.JWT_SECRET || 'dev_secret_key_123';
const EXP = process.env.JWT_EXP || '8h';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const u = await users.obtenerPorEmail(email);
    if (!u) return res.status(401).json({ error: 'Credenciales inválidas' });
    if (u.bloqueado) return res.status(403).json({ error: 'Usuario bloqueado' });

    if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' });
    const token = jwt.sign({ id:u.id_usuario, email:u.email }, SECRET, { expiresIn: EXP });
    res.json({ token });
  } catch (e) {
    res.status(500).json({ error: 'Error en login' });
  }
};
