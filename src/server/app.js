const express = require("express");
const app = express();
const blizzard = require("blizzard.js");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
console.log(process.env);
console.log("hi");

var serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"));

app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "50mb" }));

let itemlevel = "0";
let inputRealm = "";
let inputName = "";
itemlevelArray = [];
let wowClient = null;
let inputRegion = null;

const createToken = async () => {
  wowClient = await blizzard.wow.createInstance({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET,
    //origin: "eu", // optional
  });
};

const requestItemLevel = async () => {
  const requestdata = await wowClient.characterEquipment({
    realm: inputRealm,
    name: inputName,
    origin: inputRegion,
  });
  //console.log(requestdata.data.equipped_items[0].level.value);
  itemlevel = requestdata.data.equipped_items[0].level.value;
  itemlevelArray = requestdata.data.equipped_items;
};

app.get("/createToken", async (req, res) => {
  await createToken();
});

app.post("/getItemlevel", async (req, res) => {
  console.log(req.body.charName);
  inputName = req.body.charName;
  inputRealm = req.body.charRealm;
  inputRegion = req.body.charRegion;
  await requestItemLevel();
  console.log(itemlevel);
  console.log(itemlevelArray);
  //res.send(itemlevel.toString());
  res.send(itemlevelArray);
});



app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening on port`);
});
