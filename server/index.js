const express = require("express");
const app = express();
const cors = require("cors");

//midleware
app.use(express.json()); //req.body
app.use(cors());

//ROUTES

//Register and login routes
app.use("/auth", require("./routes/jwtAuth"));


const port = 5000
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})