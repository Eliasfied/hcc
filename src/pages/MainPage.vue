<template>
  <base-card>
    <div class="hcc-container">
      <form @submit.prevent="getItemlevel" class="hcc-form">
        <label for="input" class="input-label">Find your Character</label>
        <input
          :maxlength="40"
          type="text"
          id="input"
          name="name"
          placeholder="character-realm"
          v-model="name"
        />
        <a href="#" class="calculateHonorButton" @click="getItemlevel">
          <fa icon="search"></fa
        ></a>

        <label for="eu" class="region-label"
          ><img src="../assets/eu.png" class="region-image"
        /></label>
        <input
          class="region-input"
          type="checkbox"
          id="eu"
          v-model="checkedEu"
          v-on:change="changeToEu"
        />

        <label for="us" class="region-label"
          ><img src="../assets/us.png" class="region-image"
        /></label>
        <input
          class="region-input"
          type="checkbox"
          id="us"
          v-model="checkedUs"
          v-on:change="changeToUs"
        />
      </form>
      <div>
        <h2 id="errorHeader">{{ errorMessage }}</h2>
      </div>
    </div>
  </base-card>
  <characterOutput
    :name="name"
    :region="region"
    :itemIcon="itemIcon"
    :honorcost="honorcost"
    :ilvlArray="ilvlArray"
    :upgradeCostArray="upgradeCostArray"
    v-if="showConvert"
  ></characterOutput>
</template>

<script>
/*eslint-disable */
import axios from "axios";
import BaseCard from "../components/UI/BaseCard.vue";
import characterOutput from "../components/comp/CharacterOutput.vue";
export default {
  components: {
    BaseCard,
    characterOutput,
  },

  data() {
    return {
      name: "",
      realm: "",
      ilvlArray: [],
      honorcost: 0,
      showConvert: false,
      region: null,
      checkedEu: false,
      checkedUs: false,
      errorMessage: "",
      upgradeCostArray: [],
      itemIcon: 0,
    };
  },

  created() {
    document.addEventListener.call(window, "keyup", event => {
      if (event.key === 13) {
        console.log("lol");
        this.getItemlevel();
      }
    });

    axios.request({
      method: "GET",

      url: "https://honorcostcalculator.herokuapp.com/createToken",
      //url: "http://localhost:8080/createToken",
    });
  },
  methods: {
    changeToEu() {
      this.region = "eu";
      this.checkedEu = true;
      this.checkedUs = false;
    },
    changeToUs() {
      this.region = "us";
      this.checkedEu = false;
      this.checkedUs = true;
    },
    calculateBigPieces(itemlvl, index) {
      //head, chest, legs, melee weapons for 900 conquest
      switch (itemlvl) {
        case 249:
          this.honorcost = this.honorcost + 8725;
          this.upgradeCostArray[index] = 8725;
          break;
        case 252:
          this.honorcost = this.honorcost + 7950;
          this.upgradeCostArray[index] = 7950;
          break;
        case 255:
          this.honorcost = this.honorcost + 7025;
          this.upgradeCostArray[index] = 7025;
          break;
        case 259:
          this.honorcost = this.honorcost + 5950;
          this.upgradeCostArray[index] = 5950;
          break;
        case 262:
          this.honorcost = this.honorcost + 4725;
          this.upgradeCostArray[index] = 4725;
          break;
        case 265:
          this.honorcost = this.honorcost + 3350;
          this.upgradeCostArray[index] = 3350;
          break;
        case 268:
          this.honorcost = this.honorcost + 1825;
          this.upgradeCostArray[index] = 1825;
          break;
        case 272:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
        case 275:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateSmallPieces(itemlvl, index) {
      //neck, back, wrist, finger
      switch (itemlvl) {
        case 249:
          this.honorcost = this.honorcost + 5225;
          this.upgradeCostArray[index] = 5225;
          break;
        case 252:
          this.honorcost = this.honorcost + 5225 - 450;
          this.upgradeCostArray[index] = 5225 - 450;
          break;
        case 255:
          this.honorcost = this.honorcost + 5225 - 1000;
          this.upgradeCostArray[index] = 5225 - 1000;
          break;
        case 259:
          this.honorcost = this.honorcost + 5225 - 1650;
          this.upgradeCostArray[index] = 5225 - 1650;
          break;
        case 262:
          this.honorcost = this.honorcost + 5225 - 2375;
          this.upgradeCostArray[index] = 5225 - 2375;
          break;
        case 265:
          this.honorcost = this.honorcost + 5225 - 3200;
          this.upgradeCostArray[index] = 5225 - 3200;
          break;
        case 268:
          this.honorcost = this.honorcost + 5225 - 4125;
          this.upgradeCostArray[index] = 5225 - 4125;
          break;
        case 272:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
        case 275:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateMiddlePieces(itemlvl, index) {
      //shoulder, waist, feet, trinket(not insigne), hands
      switch (itemlvl) {
        case 249:
          this.honorcost = this.honorcost + 6950;
          this.upgradeCostArray[index] = 6950;
          break;
        case 252:
          this.honorcost = this.honorcost + 6950 - 600;
          this.upgradeCostArray[index] = 6950 - 600;
          break;
        case 255:
          this.honorcost = this.honorcost + 6950 - 1325;
          this.upgradeCostArray[index] = 6950 - 1325;
          break;
        case 259:
          this.honorcost = this.honorcost + 6950 - 2175;
          this.upgradeCostArray[index] = 6950 - 2175;
          break;
        case 262:
          this.honorcost = this.honorcost + 6950 - 3150;
          this.upgradeCostArray[index] = 6950 - 3150;
          break;
        case 265:
          this.honorcost = this.honorcost + 6950 - 4250;
          this.upgradeCostArray[index] = 6950 - 4250;
          break;
        case 268:
          this.honorcost = this.honorcost + 6950 - 5475;
          this.upgradeCostArray[index] = 6950 - 5475;
          break;
        case 272:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
        case 275:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculate2HandWeapon(itemlvl, index) {
      //shoulder, waist, feet, trinket(not insigne), hands
      switch (itemlvl) {
        case 249:
          this.honorcost = this.honorcost + 17450;
          this.upgradeCostArray[index] = 17450;
          break;
        case 252:
          this.honorcost = this.honorcost + 17450 - 1550;
          this.upgradeCostArray[index] = 17450 - 1550;
          break;
        case 255:
          this.honorcost = this.honorcost + 17450 - 3400;
          this.upgradeCostArray[index] = 17450 - 3400;
          break;
        case 259:
          this.honorcost = this.honorcost + 17450 - 5500;
          this.upgradeCostArray[index] = 17450 - 5500;
          break;
        case 262:
          this.honorcost = this.honorcost + 17450 - 8000;
          this.upgradeCostArray[index] = 17450 - 8000;
          break;
        case 265:
          this.honorcost = this.honorcost + 17450 - 10750;
          this.upgradeCostArray[index] = 17450 - 10750;
          break;
        case 268:
          this.honorcost = this.honorcost + 17450 - 13800;
          this.upgradeCostArray[index] = 17450 - 13800;
          break;
        case 272:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
        case 275:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateShield(itemlvl, index) {
      //shield and offhand
      switch (itemlvl) {
        case 249:
          this.honorcost = this.honorcost + 4300;
          this.upgradeCostArray[index] = 4300;
          break;
        case 252:
          this.honorcost = this.honorcost + 4300 - 375;
          this.upgradeCostArray[index] = 4300 - 375;
          break;
        case 255:
          this.honorcost = this.honorcost + 4300 - 825;
          this.upgradeCostArray[index] = 4300 - 825;
          break;
        case 259:
          this.honorcost = this.honorcost + 4300 - 1350;
          this.upgradeCostArray[index] = 4300 - 1350;
          break;
        case 262:
          this.honorcost = this.honorcost + 4300 - 1950;
          this.upgradeCostArray[index] = 4300 - 1950;
          break;
        case 265:
          this.honorcost = this.honorcost + 4300 - 2625;
          this.upgradeCostArray[index] = 4300 - 2625;
          break;
        case 268:
          this.honorcost = this.honorcost + 4300 - 3375;
          this.upgradeCostArray[index] = 4300 - 3375;
          break;
        case 272:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
        case 275:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
      }
      console.log(this.honorcost);
    },
    calculateMainHand(itemlvl, index) {
      //caster Mainhand
      switch (itemlvl) {
        case 249:
          this.honorcost = this.honorcost + 13150;
          this.upgradeCostArray[index] = 13150;
          break;
        case 252:
          this.honorcost = this.honorcost + 13150 - 1175;
          this.upgradeCostArray[index] = 13150 - 1175;
          break;
        case 255:
          this.honorcost = this.honorcost + 13150 - 2575;
          this.upgradeCostArray[index] = 13150 - 2575;
          break;
        case 259:
          this.honorcost = this.honorcost + 13150 - 4200;
          this.upgradeCostArray[index] = 13150 - 4200;
          break;
        case 262:
          this.honorcost = this.honorcost + 13150 - 6050;
          this.upgradeCostArray[index] = 13150 - 6050;
          break;
        case 265:
          this.honorcost = this.honorcost + 13150 - 8125;
          this.upgradeCostArray[index] = 13150 - 8125;
          break;
        case 268:
          this.honorcost = this.honorcost + 13150 - 10425;
          this.upgradeCostArray[index] = 13150 - 10425;
          break;
        case 272:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
        case 275:
          this.honorcost = this.honorcost + 0;
          this.upgradeCostArray[index] = 0;
          break;
      }
      console.log(this.honorcost);
    },
    getItemlevel() {
      console.log(this.region);
      if (this.region === null) {
        this.errorMessage = "ERROR: Please select a region";
        return;
      }
      if (this.name === "") {
        this.errorMessage = "ERROR: Please enter a valid name and realm!";
        return;
      }

      let nameArray = this.name.split("-");

      this.errorMessage = "";
      this.ilvlArray = null;
      this.honorcost = 0;
      this.upgradeCostArray.fill(0); //clear the arraycostArray
      let getName = nameArray[0].toLowerCase();
      let getRealm = nameArray[1].toLowerCase();
      let getRegion = this.region;
      console.log(getName);
      axios
        .request({
          method: "POST",

          url: "https://honorcostcalculator.herokuapp.com/getItemlevel",
          // url: "http://localhost:8080/getItemlevel",

          headers: {},
          data: {
            charName: getName,
            charRealm: getRealm,
            charRegion: getRegion,
          },
        })
        .then((resp) => {
          this.showConvert = true;
          if (resp.data === "error") {
            this.errorMessage = "Cant load this character!";
          }
          this.ilvlArray = resp.data;
          console.log(this.ilvlArray);
          for (var i = 0; i < this.ilvlArray.length; i++) {
            //-1 because tabard is last slot we dont need that
            console.log("");
            console.log(this.ilvlArray[i].level.value.toString());
            console.log(this.ilvlArray[i].name);
            if (
              this.ilvlArray[i].name_description != undefined &&
              !this.ilvlArray[i].name.includes("Unchained")
            ) {
              const checkPvPRank =
                this.ilvlArray[i].name_description.display_string.includes(
                  "Unranked"
                ) ||
                this.ilvlArray[i].name_description.display_string.includes(
                  "Combatant I"
                ) ||
                this.ilvlArray[i].name_description.display_string.includes(
                  "Combatant II"
                ) ||
                this.ilvlArray[i].name_description.display_string.includes(
                  "Challenger I"
                ) ||
                this.ilvlArray[i].name_description.display_string.includes(
                  "Challenger II"
                ) ||
                this.ilvlArray[i].name_description.display_string.includes(
                  "Rival I"
                ) ||
                this.ilvlArray[i].name_description.display_string.includes(
                  "Rival II"
                );

              if (
                checkPvPRank === true ||
                this.ilvlArray[i].inventory_type.type === "BODY" ||
                this.ilvlArray[i].inventory_type.type == "TABARD"
              ) {
                switch (this.ilvlArray[i].inventory_type.type) {
                  case "HEAD":
                    this.calculateBigPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "NECK":
                    this.calculateSmallPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "SHOULDER":
                    this.calculateMiddlePieces(
                      this.ilvlArray[i].level.value,
                      i
                    );
                    break;
                  case "BODY":
                    this.ilvlArray.splice(i, 1);
                    i = i - 1;
                    console.log(this.ilvlArray);
                    console.log("BODY ANGEKOMMEN!");
                    break;
                  case "TABARD":
                    this.ilvlArray.splice(i, 1);
                    i = i - 1;
                    break;
                  case "ROBE":
                    this.calculateBigPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "CHEST":
                    this.calculateBigPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "LEGS":
                    this.calculateBigPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "WAIST":
                    this.calculateMiddlePieces(
                      this.ilvlArray[i].level.value,
                      i
                    );
                    break;
                  case "WRIST":
                    this.calculateSmallPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "FEET":
                    this.calculateMiddlePieces(
                      this.ilvlArray[i].level.value,
                      i
                    );
                    break;
                  case "HAND":
                    this.calculateMiddlePieces(
                      this.ilvlArray[i].level.value,
                      i
                    );
                    break;
                  case "FINGER":
                    this.calculateSmallPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "TRINKET":
                    if (
                      this.ilvlArray[i].name.includes("Emblem") === true ||
                      this.ilvlArray[i].name.includes("Alacrity") === true ||
                      this.ilvlArray[i].name.includes("Shackles") === true ||
                      this.ilvlArray[i].name.includes("Ferocity") === true ||
                      this.ilvlArray[i].name.includes("Eternal") === true ||
                      this.ilvlArray[i].name.includes("Resonator") === true
                    ) {
                      this.calculateMiddlePieces(
                        this.ilvlArray[i].level.value,
                        i
                      );
                      break;
                    } else {
                      this.calculateSmallPieces(
                        this.ilvlArray[i].level.value,
                        i
                      );
                    }

                    break;
                  case "CLOAK":
                    this.calculateSmallPieces(this.ilvlArray[i].level.value, i);
                    break;
                  case "TWOHWEAPON":
                    this.calculate2HandWeapon(this.ilvlArray[i].level.value, i);
                    break;
                  case "WEAPON":
                    if (
                      this.ilvlArray[i].name.includes("Ritual Dagger") ===
                        true ||
                      this.ilvlArray[i].name.includes("Ceromonial Sword") ===
                        true ||
                      this.ilvlArray[i].name.includes("Gavel") === true
                    ) {
                      this.calculateMainHand(this.ilvlArray[i].level.value, i);
                    } else {
                      this.calculateBigPieces(this.ilvlArray[i].level.value, i);
                    }

                    break;
                  case "SHIELD":
                    this.calculateShield(this.ilvlArray[i].level.value, i);
                    break;
                  case "HOLDABLE":
                    this.calculateShield(this.ilvlArray[i].level.value, i);
                    break;
                }
              } else {
                this.honorcost = this.honorcost + 0;
                this.upgradeCostArray[i] = 0;
              }
            }
          }
          this.itemIcon = this.itemIcon + 2;
          console.log(this.upgradeCostArray);
          console.log(this.itemIcon);
        })
        .catch((err) => {});
    },
  },
};
</script>

<style>
body {
  background-image: url("../assets/backgroundHCC.jpg");
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

#hccimage {
  width: 250px;
  height: 190px;
}

.hcc-container {
  margin: auto;
}

.hcc-form {
  padding: 0.5rem;
  margin: 0.5rem;
}

.input-label {
  display: block;
  color: white;
  text-align: left;
  font-size: 27px;
  margin-bottom: 6px;
}

.region-label {
  width: 70px;
  height: 60px;
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
}

.region-input {
  width: 20px;
  height: 20px;
}

.region-image {
  width: 70px;
  height: 60px;
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
}

#input {
  border-top: 2px solid rgb(0, 98, 128);
  border-bottom: 2px solid rgb(0, 98, 128);
  border-left: 2px solid rgb(0, 98, 128);
  border-right: 0;
  border-radius: 4px;
  font-size: 4ch;
  padding: 0.5rem;
  background-color: #8bc2eb;
  color: white;
  margin: 4px;
  margin-right: 0;
}



::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(224, 255, 255, 0.5);
  opacity: 1; /* Firefox */
}

.output-card {
  height: 20rem;
}

.upgrade-text {
  color: white;
}

.calculateHonorButton {
  background: #8bc2eb;
  color: white;
  font-size: 4ch;
  text-decoration: none;
  border: 2px solid rgb(0, 98, 128);
  padding: 8px;
}
.calculateHonorButton:hover {
  background-color: rgb(0, 98, 128);
}
.calculateHonorButton:active {
  position: relative;
  top: 1px;
}

input {
  text-align: left;
}

#errorHeader {
  color: red;
}


@media (max-width: 375px) {

#input {
  font-size: 2ch;
}

.calculateHonorButton {
  font-size: 2ch;

}




}
</style>
