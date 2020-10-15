const express = require('express')
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose")

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

const Image = require('./image');
app.use('/image', Image)


app.listen(port, () => {
    console.log((`Server is up on port ${port}`))
});
