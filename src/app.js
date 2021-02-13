const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// mongoose setup
const mongoDB = process.env.DB;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// routes
app.use('/', indexRouter);

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));