import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import compresssion from 'compression';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compresssion());
app.use(cookieParser());
app.use(bodyParser.json());

const server =http.createServer(app);

server.listen(8080,()=>{
    console.log('Server is running on port 8080');
});