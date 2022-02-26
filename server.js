// importation
const express = require("express");
const path=require("path")
// creation instance
const app = express();
const testMi=require("./middleware/Auth")
app.use(testMi)


// creation server
const port = 7000;
app.listen(port, (erreur) => {
  erreur
    ? console.log(erreur)
    : console.log(`the server is running on port : ${port}`);
});
// creation route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+"/HomePage.html"))
});
app.get("/OurServices", (req, res) => {
    res.sendFile(path.join(__dirname+"/OurServices.html"))
  });
  app.get("/ContactUs", (req, res) => {
    res.sendFile(path.join(__dirname+"/ContactUs.html"))
  });
  app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname+"/style.css"))
  });
  app.get("/assets/img/pet.jpg", (req, res) => {
    res.sendFile(path.join(__dirname+"/assets/img/pet.jpg"))
  });