const express = require("express");
const pool = require("./db");

const port = 1432;
const app = express();

app.use(express.json());


// Routes

app.listen(port, () => {
    console.info(`Server is running on port ${port}`)
})


app.get ("/", (req, res) => {
    res.send("Welcome to the homepage")
})
