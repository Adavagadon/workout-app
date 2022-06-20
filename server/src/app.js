import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import * as url from 'url';
import path from 'path';
import './sequelize.js';
import routes from './routes/index.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PATH_TO_CLIENT = path.join(__dirname, '..', '..', 'client', 'build');
const ENV = process.env.NODE_ENV;
const APP_URL = process.env.APP_URL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  ENV === 'development' || ENV === 'test'
    ? cors({ origin: '*' })
    : cors({ origin: APP_URL })
);

app.use('/api', routes);

if (ENV === 'development' || ENV === 'test') {
  app.listen(process.env.PORT, process.env.HOST);
} else {
  app.use(express.static(PATH_TO_CLIENT));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(PATH_TO_CLIENT, 'index.html'));
  });
  app.listen(process.env.PORT);
}
