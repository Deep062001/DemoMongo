import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
const app = express();
import foodRoutes from './routes/food.js';
import shopRoutes from './routes/shop.js';
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/food' , foodRoutes);
app.use('/shops' , shopRoutes);
const CONNECTION_URL = 'mongodb+srv://foodhunt:foodhunt123@cluster0.v5ohb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

