const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
//path module
const path = require('path');

// Api Routes Importation
const users = require("./routes/api/users");
const defaultEstimation = require("./routes/api/estimation/default");
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());



// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/estimation/default", defaultEstimation);

// For heroku deploy

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'));
  app.get("*",(req,res)=>{
    res.sendfile(path.resolve(__dirname,'client','build','index.html'));
  })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
