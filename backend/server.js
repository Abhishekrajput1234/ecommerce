require('dotenv').config();
const express = require('express');
const ConnectDB = require("./config/db")
const router = require("./router/router")
const cors = require("cors")
const bodyparser = require("body-parser")
const app = express();

ConnectDB();

app.use(cors())
app.use(express.json());



app.use("/",router)

app.get("/", (req, res) => {
    res.send("Backend is running successfully");
});







const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});