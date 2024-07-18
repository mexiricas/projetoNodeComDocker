import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from  './routers/index';


const server = express();

server.use(cors({
    origin: '*'
}));

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(mainRoutes);

server.use((req, res)=>{
    res.render('pages/404');
});

const PORT = parseInt(process.env.PORT as string) || 3000;
const HOST = process.env.HOST as string;
server.listen(PORT, HOST , ()=>{
    console.log(`Servidor ativo na porta ${PORT} e no endereço ${HOST} `)
});