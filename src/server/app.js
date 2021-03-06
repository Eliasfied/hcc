const express = require("express");
const app = express();
const blizzard = require("blizzard.js");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
console.log(process.env);
console.log("hi2");
console.log(__dirname);

app.use(cors());

var serveStatic = require("serve-static");
const path = require("path");

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "../../dist")));

//this * route is to serve project on different page routes except root `/`
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.get("/hcc", function (req, res) {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "50mb" }));

let itemlevel = "0";
let inputRealm = "";
let inputName = "";
itemlevelArray = [];
let wowClient = null;
let inputRegion = null;
let iconData = null;
let charMedia = [];

//let requestdata = null;

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

const requestItemIcon = async (trueID) => {
  const requestdata = await wowClient.item({
    id: trueID,
    media: true,
  });
  iconData = requestdata.data;
  console.log(iconData);
};

const requestCharacterImage = async (xname, xrealm, xregion) => {
 
  inputName = xname;
  inputRealm = xrealm;
  inputRegion = xregion;
  console.log(inputName, inputRealm, inputRegion);

  const requestdata = await wowClient.characterMedia({
    name: inputName,
    realm: inputRealm,
    origin: inputRegion,
  });
  console.log("test");
  charMedia = requestdata.data;
  console.log(charMedia);
};

app.get("/createToken", async (req, res) => {
  try {
    await createToken();
  } catch (error) {
    console.log(error);
  }
});

app.post("/getItemlevel", async (req, res) => {
  console.log(req.body.charName);
  inputName = req.body.charName;
  inputRealm = req.body.charRealm;
  inputRegion = req.body.charRegion;
  try {
    await requestItemLevel();
    console.log(itemlevel);
    console.log(itemlevelArray);
    //res.send(itemlevel.toString());
    res.send(itemlevelArray);
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});

app.post("/getItemIcon", async (req, res) => {
  console.log("reqID " + req.body.iconID);
  try {
    await requestItemIcon(req.body.iconID);
    res.send(iconData);
  } catch (error) {
    console.log("ERROR IN GETITEM SERVER METHOD");
    res.send("error FROM SERVER GETITEMICON METHOD");
  }
});

app.post("/getCharacterImage", async (req, res) => {
  console.log("bis hierhin kommt er")
  inputName = req.body.name;
  inputRealm = req.body.realm;
  inputRegion = req.body.region;
  try {
    await requestCharacterImage(req.body.name, req.body.realm, req.body.region);
    res.send(charMedia);
  } catch (error) {
    console.log(charMedia);
    console.log("error from characterImage function");
    res.send("error from getCharacterImage function");
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening on port`);
});

/*server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
}); */
