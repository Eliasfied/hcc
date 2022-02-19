<template>
  <base-card>
    <div>
      <h1>Please enter your Name and Realm!</h1>
      <label id="labelInput" for="name">Name: </label>
      <input type="text" id="input" name="name" v-model="name" />
      <p></p>
      <label id="labelInput" for="realm">Realm: </label>
      <input type="text" id="input" name="realm" v-model="realm" />
    </div>
    <div>
      <p></p>
      <a href="#" class="calculateHonorButton" @click="getItemlevel"
        >Calculate Honor</a
      >
      <h2>
        In order to have full Duelist Gear you need to farm additional
        {{ honorcost }} honor!
      </h2>
      <p></p>
      <div v-if="showConvert">
        <ul>
          <h2>This means you need to either win:</h2>
          <h2>
            <li>{{ bgwins }} Battlegrounds</li>
            <li>{{ arena2vs2wins }} 2vs2 Arena Games</li>
            <li>{{ arena3vs3wins }} 3vs3 Arena Games</li>
            <li>{{ skirmishwins }} Skirmishes</li>
          </h2>
        </ul>
      </div>
    </div>
  </base-card>
</template>

<script>
/*eslint-disable */
import axios from "axios";
import BaseCard from "../components/UI/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },

  data() {
    return {
      name: "",
      realm: "",
      ilvlArray: [],
      honorcost: 0,
      showConvert: false,
    };
  },
  computed: {
    skirmishwins() {
      return "~" + Math.round(this.honorcost / 110);
    },
    arena2vs2wins() {
      return "~" + Math.round(this.honorcost / 170);
    },
    arena3vs3wins() {
      return "~" + Math.round(this.honorcost / 200);
    },
    bgwins() {
      return "~" + Math.round(this.honorcost / 350);
    },
  },
  created() {
    axios.request({
      method: "GET",
      url: "http://localhost:8080/createToken",
    });
  },
  methods: {
    calculateBigPieces(itemlvl) {
      //head, chest, legs, melee weapons for 900 conquest
      switch (itemlvl) {
        case 220:
          this.honorcost = this.honorcost + 8725;
          break;
        case 226:
          this.honorcost = this.honorcost + 7950;
          break;
        case 229:
          this.honorcost = this.honorcost + 7025;
          break;
        case 233:
          this.honorcost = this.honorcost + 5950;
          break;
        case 236:
          this.honorcost = this.honorcost + 4725;
          break;
        case 239:
          this.honorcost = this.honorcost + 3350;
          break;
        case 242:
          this.honorcost = this.honorcost + 1825;
          break;
        case 246:
          this.honorcost = this.honorcost + 0;
          break;
        case 249:
          this.honorcost = this.honorcost + 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateSmallPieces(itemlvl) {
      //neck, back, wrist, finger
      switch (itemlvl) {
        case 220:
          this.honorcost = this.honorcost + 5225;
          break;
        case 226:
          this.honorcost = this.honorcost + 5225 - 450;
          break;
        case 229:
          this.honorcost = this.honorcost + 5225 - 1000;
          break;
        case 233:
          this.honorcost = this.honorcost + 5225 - 1650;
          break;
        case 236:
          this.honorcost = this.honorcost + 5225 - 2375;
          break;
        case 239:
          this.honorcost = this.honorcost + 5225 - 3200;
          break;
        case 242:
          this.honorcost = this.honorcost + 5225 - 4125;
          break;
        case 246:
          this.honorcost = this.honorcost + 0;
          break;
        case 249:
          this.honorcost = this.honorcost + 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateMiddlePieces(itemlvl) {
      //shoulder, waist, feet, trinket(not insigne), hands
      switch (itemlvl) {
        case 220:
          this.honorcost = this.honorcost + 6950;
          break;
        case 226:
          this.honorcost = this.honorcost + 6950 - 600;
          break;
        case 229:
          this.honorcost = this.honorcost + 6950 - 1325;
          break;
        case 233:
          this.honorcost = this.honorcost + 6950 - 2175;
          break;
        case 236:
          this.honorcost = this.honorcost + 6950 - 3150;
          break;
        case 239:
          this.honorcost = this.honorcost + 6950 - 4250;
          break;
        case 242:
          this.honorcost = this.honorcost + 6950 - 5475;
          break;
        case 246:
          this.honorcost = this.honorcost + 0;
          break;
        case 249:
          this.honorcost = this.honorcost + 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculate2HandWeapon(itemlvl) {
      //shoulder, waist, feet, trinket(not insigne), hands
      switch (itemlvl) {
        case 220:
          this.honorcost = this.honorcost + 17450;
          break;
        case 226:
          this.honorcost = this.honorcost + 17450 - 1550;
          break;
        case 229:
          this.honorcost = this.honorcost + 17450 - 3400;
          break;
        case 233:
          this.honorcost = this.honorcost + 17450 - 5500;
          break;
        case 236:
          this.honorcost = this.honorcost + 17450 - 8000;
          break;
        case 239:
          this.honorcost = this.honorcost + 17450 - 10750;
          break;
        case 242:
          this.honorcost = this.honorcost + 17450 - 13800;
          break;
        case 246:
          this.honorcost = this.honorcost + 0;
          break;
        case 249:
          this.honorcost = this.honorcost + 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateShield(itemlvl) {
      //shield and offhand
      switch (itemlvl) {
        case 220:
          this.honorcost = this.honorcost + 4300;
          break;
        case 226:
          this.honorcost = this.honorcost + 4300 - 375;
          break;
        case 229:
          this.honorcost = this.honorcost + 4300 - 825;
          break;
        case 233:
          this.honorcost = this.honorcost + 4300 - 1350;
          break;
        case 236:
          this.honorcost = this.honorcost + 4300 - 1950;
          break;
        case 239:
          this.honorcost = this.honorcost + 4300 - 2625;
          break;
        case 242:
          this.honorcost = this.honorcost + 4300 - 3375;
          break;
        case 246:
          this.honorcost = this.honorcost + 0;
          break;
        case 249:
          this.honorcost = this.honorcost + 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateMainHand(itemlvl) {
      //caster Mainhand
      switch (itemlvl) {
        case 220:
          this.honorcost = this.honorcost + 13150;
          break;
        case 226:
          this.honorcost = this.honorcost + 13150 - 1175;
          break;
        case 229:
          this.honorcost = this.honorcost + 13150 - 2575;
          break;
        case 233:
          this.honorcost = this.honorcost + 13150 - 4200;
          break;
        case 236:
          this.honorcost = this.honorcost + 13150 - 6050;
          break;
        case 239:
          this.honorcost = this.honorcost + 13150 - 8125;
          break;
        case 242:
          this.honorcost = this.honorcost + 13150 - 10425;
          break;
        case 246:
          this.honorcost = this.honorcost + 0;
          break;
        case 249:
          this.honorcost = this.honorcost + 0;
          break;
      }
      console.log(this.honorcost);
    },
    getItemlevel() {
      this.showConvert = true;
      this.ilvlArray = null;
      this.honorcost = 0;
      let getName = this.name.toLowerCase();
      let getRealm = this.realm.toLowerCase();
      console.log(getName);
      axios
        .request({
          method: "POST",
          url: "http://localhost:8080/getItemlevel",
          headers: {},
          data: {
            charName: getName,
            charRealm: getRealm,
          },
        })
        .then((resp) => {
          this.ilvlArray = resp.data;
          console.log(this.ilvlArray);

          for (var i = 0; i < this.ilvlArray.length; i++) {
            //-1 because tabard is last slot we dont need that
            console.log(this.ilvlArray[i].level.value.toString());
            if (
              this.ilvlArray[i].name.includes("Unchained Gladiator's") === true
            ) {
              switch (this.ilvlArray[i].inventory_type.type) {
                case "HEAD":
                  this.calculateBigPieces(this.ilvlArray[i].level.value);
                  break;
                case "NECK":
                  this.calculateSmallPieces(this.ilvlArray[i].level.value);
                  break;
                case "SHOULDER":
                  this.calculateMiddlePieces(this.ilvlArray[i].level.value);
                  break;
                case "CHEST":
                  this.calculateBigPieces(this.ilvlArray[i].level.value);
                  break;
                case "LEGS":
                  this.calculateBigPieces(this.ilvlArray[i].level.value);
                  break;
                case "WAIST":
                  this.calculateMiddlePieces(this.ilvlArray[i].level.value);
                  break;
                case "WRIST":
                  this.calculateSmallPieces(this.ilvlArray[i].level.value);
                  break;
                case "HAND":
                  this.calculateMiddlePieces(this.ilvlArray[i].level.value);
                  break;
                case "FINGER":
                  this.calculateSmallPieces(this.ilvlArray[i].level.value);
                  break;
                case "TRINKET":
                  if (
                    this.ilvlArray[i].name.includes("Emblem") === true ||
                    this.ilvlArray[i].name.includes("Alacrity") === true ||
                    this.ilvlArray[i].name.includes("Shackles") === true ||
                    this.ilvlArray[i].name.includes("Ferocity") === true
                  ) {
                    this.calculateMiddlePieces(this.ilvlArray[i].level.value);
                    break;
                  } else {
                    this.calculateSmallPieces(this.ilvlArray[i].level.value);
                  }

                  break;
                case "CLOAK":
                  this.calculateSmallPieces(this.ilvlArray[i].level.value);
                  break;
                case "TWOHWEAPON":
                  this.calculate2HandWeapon(this.ilvlArray[i].level.value);
                  break;
                case "WEAPON":
                  if (
                    this.ilvlArray[i].name.includes("Ritual Dagger") === true ||
                    this.ilvlArray[i].name.includes("Ceromonial Sword") ===
                      true ||
                    this.ilvlArray[i].name.includes("Gavel") === true
                  ) {
                    this.calculateMainHand(this.ilvlArray[i].level.value);
                  } else {
                    this.calculateBigPieces(this.ilvlArray[i].level.value);
                  }

                  break;
                case "SHIELD":
                  this.calculateShield(this.ilvlArray[i].level.value);
                  break;
                case "HOLDABLE":
                  this.calculateShield(this.ilvlArray[i].level.value);
                  break;
              }
            } else {
              this.honorcost = this.honorcost + 0;
            }
          }
        })
        .catch((err) => {
          this.ilvl = "ERROR";
        });
    },
  },
};
</script>

<style>
body {
  background-image: url("../assets/600px-Nagrand.png");
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#input {
  border: 2px solid black;
  border-radius: 4px;
  font-size: 3ch;
}

#labelInput {
  font-size: 4ch;
  width: 200px;
  display: inline-block;
}

.calculateHonorButton {
  background-color: black;
  border-radius: 28px;
  border: 1px solid grey;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px black;
}
.calculateHonorButton:hover {
  background-color: green;
}
.calculateHonorButton:active {
  position: relative;
  top: 1px;
}
</style>
