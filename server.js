const express = require("express")
const app = express();

const callerRouter = require("./caller");
app.use("/", callerRouter);

app.listen(3000, () => console.log("Server started"));