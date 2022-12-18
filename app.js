const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.query);
  next();
});

const productRouter = require('./routers/productRouter');

app.use('/products', productRouter);

app.listen(port, () => {
  console.log(port, 'Server is listening...');
});
