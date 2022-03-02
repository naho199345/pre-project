const express = require('express');
const connect =require('./modules')
const port = 3000;
const app = express();
const cors = require("cors");

connect();

// const TimerRouter = require("./routes/timer");


app.use(express.json());

app.use(cors());

// app.use("/api", [TimerRouter]);


app.get('/', (req, res) => {
    res.send("hello world")
});

app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요");
});

module.exports = app;