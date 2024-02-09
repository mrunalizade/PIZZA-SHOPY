const express = require("express");
const dotenv = require('dotenv')
const connectDB = require('./config/config')
require("colors");
const morgan = require("morgan");


//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.get("/", (req, res) => {
    res.send("<h1>Hello From Node Server vai nodemon</h1>");
});


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server Runnign On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});