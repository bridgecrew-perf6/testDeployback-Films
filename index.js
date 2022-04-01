const express = require("express");
const cors = require("cors")

const app= express()
app.use(cors());

const videos= require("./json/videos.json")

const port = process.env.port ||3000;

app.get("/", (req, res) => {
    res.send("Deploy");
  });
  
  app.get("/films", (req, res) => {
    res.json(videos);
  });

  app.listen(port, () => {
    console.log("working");
  });