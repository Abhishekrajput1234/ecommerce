require('dotenv').config();
const express = require('express');
const ConnectDB = require("./config/db")
const router = require("./router/router")
const cors = require("cors")
const bodyparser = require("body-parser")
const app = express();

ConnectDB();

app.use(cors())

app.use(bodyparser.json())

app.use("/",router)








app.listen(2000, () => {
    console.log('Server is running on port 2000');
});