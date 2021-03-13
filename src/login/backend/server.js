'use strict'
const authRoutes = require ('./auth/auth.routes');
const express = require('express');
const DB = require('./config/db');
DB();
const app = express();
const router = express.Router();
const properties = require('./config/properties');
//app.use('/api', router);
//authRoutes(router);
router.get('/', (req, res) => {
    res.send('');//Se deja penddiente para poner el login
});
app.use(router);
app.listen(properties.PORT, ()=> console.log('Servidor corriendo en el puerto 3000'));
