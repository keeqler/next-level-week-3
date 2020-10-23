import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import { errorHandler } from './errors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/images', express.static(path.join(__dirname, '..', 'tmp', 'uploads')));
app.use(errorHandler);
app.listen(3333, () => console.log('Listening on 3333'));
