require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3500;

const cors = require('cors')
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

const todoListRoute = require('./Routes/TodolistRoute');
app.use('/api/v1/',todoListRoute);

db.on('error',(error) => {
    console.log(error);
})

db.once('open',() => {
    console.log(`db connected sucessfully`);
})

app.listen(PORT,() => {
    console.log(`server listening to http://localhost:${PORT}`);
})