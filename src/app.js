import express from 'express';
import __dirname from './utils.js'
import handlebars from 'express-handlebars';
import viewsRouter from './views/views.router.js';
import { productsRouter } from './routes/products.router.js';
import { cartsRouter } from './routes/carts.router.js';

import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(8080, () => console.log('Escuchando en puerto 8080...'));

const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engines', 'handlebars');
app.use(express.static(__dirname + 'public'));

app.use(express.urlencoded({ extended: true })) // Para usar forms
app.use(express.json())

app.use('/', viewsRouter);

socketServer.on('connection', socket => console.log('Nuevo cliente conectado...'));

socketServer.on('message', data => console.log(data));
app.use('/api/', productsRouter);
app.use('/api/', cartsRouter);

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(8080, () => {
    console.log("Primera Pre Entrega");
});