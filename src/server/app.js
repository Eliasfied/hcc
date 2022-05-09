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
app.get(/.*/, function (req, res) {
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
let key_ID = "9f49b3b1f55c41c89896081558fadbf5";
let secret_ID = "wV4d6FqQHMODXZ8ftucNGL0acgNIeLnR";
//let requestdata = null;

const createToken = async () => {
  wowClient = await blizzard.wow.createInstance({
    key: key_ID,
    //process.env.API_KEY,
    secret: secret_ID,
    //process.env.API_SECRET,

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

/*server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
}); */
