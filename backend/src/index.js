const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const {connectDB} = require('./config/db');
const authRouter = require('./routes/auth.route.js');
const productRouter = require('./routes/product.route.js');

dotenv.config();

connectDB();

const app = express();
const port = 3000;



app.use(express.urlencoded({
  extends: false
}));

app.use(express.json());

// app.get('/home', (req, res) => {
//   res.render('home');
// })


// app.get('/', (req, res) => {
//   res.status(200).json('Hello world');
// })


// route(app);
app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
