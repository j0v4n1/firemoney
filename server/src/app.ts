import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import usersRouter from './routes/users';
import errorsMiddleware from './middlewares/errors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', usersRouter);
app.use(errorsMiddleware);

const start = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:${process.env.PORT_DB}/${process.env.DB_NAME}`).then(() => {
      console.log('Соединение с базой данных установлено');
    });
    app.listen(process.env.PORT, () => {
      console.log(`Сервер запущен на 8080 порту!`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
