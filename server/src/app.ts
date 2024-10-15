import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

const { PORT, PORT_DB, DB_NAME } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:${PORT_DB}/${DB_NAME}`).then(() => {
      console.log('Соединение с базой данных установлено');
    });
    app.listen(PORT, () => {
      console.log(`Сервер запущен на 8080 порту!`);
    });
  } catch (err) {
    console.log(err);
  }
};

start().then();
