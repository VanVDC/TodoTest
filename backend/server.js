import express from 'express';
import connect from './connectDB.js';
import todoRouter from './todoRoute.js';

const app = express();
connect();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());

app.use('/todo', todoRouter);

const POST = process.env.POST || 5000;
app.listen(POST, () => [console.log('Server is start at: ' + POST)]);
