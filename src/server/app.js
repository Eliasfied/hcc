const express = require("express");
const app = express();
const blizzard = require("blizzard.js");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "50mb" }));

let itemlevel = "0";
let inputRealm = "";
let inputName = "";
itemlevelArray = [];
let wowClient = null;

const createToken = async () => {
  wowClient = await blizzard.wow.createInstance({
    key: "9f49b3b1f55c41c89896081558fadbf5",
    secret: "61VhuItNaBr6fkUOTzEOdStU6VcrIaCx",
    origin: "eu", // optional
    // locale: "de_DE", // optional
  });
};

const requestItemLevel = async () => {
  const requestdata = await wowClient.characterEquipment({
    realm: inputRealm,
    name: inputName,
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
  await requestItemLevel();
  console.log(itemlevel);
  console.log(itemlevelArray);
  //res.send(itemlevel.toString());
  res.send(itemlevelArray);
});

const port = "8080";

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
