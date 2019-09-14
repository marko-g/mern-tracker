const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
require("dotenv").config(); //do narid enivormet variablies inemv file neki
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/mern-tracker", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}); //ce ne ostaj jo nardi sam!
mongoose.set("useFindAndModify", false);

///////////////////////////

const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

///////////////////////////////

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
