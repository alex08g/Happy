import express from "express";
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import "./database/connection";

import Routes from './routes';
import errorHandlers from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandlers);

app.listen(3333);
