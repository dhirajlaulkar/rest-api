import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import compresssion from 'compression';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compresssion());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});


const MONGO_URL = "mongodb://localhost:27017/rest-api";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error:', error);
    process.exit(1);
});