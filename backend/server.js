const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config(); //do narid enivormet variablies inemv file neki

/*
mongoose.connect("mongodb://localhost/mern-tracker", {
  useNewUrlParser: true
}); //ce ne ostaj jo nardi sam!
mongoose.set("useFindAndModify", false);*/
/*const connection = mongoose.connection;
connection.once("once", () => {
  console.log("MongoDB database connection established successfully");
});*/

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //body-arserja ne rabimo v novih expressih to je middleware.

///////////////////////////

const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

//app.use("/exercises", exerciseRouter);
//app.use("/users", usersRouter);

///////////////////////////////

app.get("/", (req, res) => res.send("Hallo World"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
