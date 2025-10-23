import _express from "express";
import _bodyParser from "body-parser";
import _cors from "./config/cors.js";
//import orm from './config/sequelize.js';
import helmet from 'helmet';
import PUERTO from "./utils/constantes.js";
import api from "./routes.js"

const app= _express();

app.use(_bodyParser.json());
app.use(_bodyParser.urlencoded({ extended: true, 
    type: 'application/x-www-form-urlencoded' }));
app.use(_cors);

//... endpoints ...
app.use("/api/v1", api);

//... inicializamos la bd en desarrollo ...
//await orm.sync({ force: true });
//await orm.sync({ alter: true });

//listar archivos en la web
app.use(_express.static('uploads'));

//... servidor ...
app.listen(PUERTO, () => {
    console.log('Listening on '+PUERTO);
});

app.use(helmet.frameguard({ action: 'deny' })); // Previene Clickjacking

