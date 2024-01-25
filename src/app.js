import express from 'express';
import __dirname from './utils.js'
import handlebars from 'express-handlebars';
import viewsRouter from './views/views.router.js';
import { productsRouter } from './routes/products.router.js';
import { cartsRouter } from './routes/carts.router.js';

import { Server } from 'socket.io';
const app = express();
const httpServer = 

app.use(express.urlencoded({ extended: true })) // Para usar forms
app.use(express.json())
app.use('/api/', productsRouter);
app.use('/api/', cartsRouter);

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(8080, () => {
    console.log("Primera Pre Entrega");
});