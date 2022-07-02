<template>
  <base-card
    v-if="!isLoading"
    v-bind:style="{
      'background-image': 'url(' + charMediaLink + ')',
      'background-repeat': 'no repeat',
      'background-size': '100% 100%',
      'max-width' : '60rem',
      'padding-top' : '0px'
    }"
  >
    <div class="container">
      <div class="honorcost-div">
       <!-- <span class="span-charname"> {{fullCharname}} </span> -->
        <span class="honor-need-text">
         Total:
          <span style="color: #ff0000">{{ honorcost }} </span>
        </span>
        <img
          class="honor-image"
          src="../../assets/achievement_legionpvptier4.gif"
        />
      </div>
      <div class="left-item-div">
        <div class="item-div">
          <a :href="wowHead(0)"><img class="gear-img" :src="iconArray[0]" /></a>
          <span class="span-rank">{{ Rank(0) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(0) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(1)"><img class="gear-img" :src="iconArray[1]" /></a>
          <span class="span-rank">{{ Rank(1) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(1) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(2)"><img class="gear-img" :src="iconArray[2]" /></a>
          <span class="span-rank">{{ Rank(2) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(2) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(13)"><img class="gear-img" :src="iconArray[13]" /></a>
          <span class="span-rank">{{ Rank(13) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(13) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(3)"><img class="gear-img" :src="iconArray[3]" /></a>
          <span class="span-rank">{{ Rank(3) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(3) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(4)"><img class="gear-img" :src="iconArray[4]" /></a>
          <span class="span-rank">{{ Rank(4) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(4) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(5)"><img class="gear-img" :src="iconArray[5]" /></a>
          <span class="span-rank">{{ Rank(5) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(5) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
      </div>
      <div class="right-item-div">
        <div class="item-div">
          <a :href="wowHead(6)"><img class="gear-img" :src="iconArray[6]" /></a>
          <span class="span-rank">{{ Rank(6) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(6) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>

        <div class="item-div">
          <a :href="wowHead(7)"><img class="gear-img" :src="iconArray[7]" /></a>
          <span class="span-rank">{{ Rank(7) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(7) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(8)"><img class="gear-img" :src="iconArray[8]" /></a>
          <span class="span-rank">{{ Rank(8) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(8) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(9)"><img class="gear-img" :src="iconArray[9]" /></a>
          <span class="span-rank">{{ Rank(9) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(9) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(10)"><img class="gear-img" :src="iconArray[10]" /></a>
          <span class="span-rank">{{ Rank(10) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(10) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(11)"><img class="gear-img" :src="iconArray[11]" /></a>
          <span class="span-rank">{{ Rank(11) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(11) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="item-div">
          <a :href="wowHead(12)"><img class="gear-img" :src="iconArray[12]" /></a>
          <span class="span-rank">{{ Rank(12) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(12) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
      </div>
      <div class="weapon-div">
        <div class="weapon-item-div">
          <a :href="wowHead(14)"><img class="gear-img" :src="iconArray[14]" /></a>
          <span class="span-rank">{{ Rank(14) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(14) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
        <div class="weapon-item-div">
          <a :href="wowHead(15)"><img class="gear-img" :src="iconArray[15]" /></a>
          <span class="span-rank">{{ Rank(15) }}</span>
          <br />
          <span class="span-cost">{{ upgradeCosts(15) }}</span>
          <img src="../../assets/achievement_legionpvptier4.gif" />
          <br />
        </div>
      </div>
    </div>
  </base-card>

  <h1 v-if="isLoading">loading...</h1>
</template>

<script>
import axios from "axios";
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
  props: [
    "name",
    "realm",
    "region",
    "honorcost",
    "ilvlArray",
    "upgradeCostArray",
    "itemIcon",
  ],
  data() {
    return {
      iconArray: [],
      charMediaLink: "",
      itemIconEndpoint: "https://honorcostcalculator.herokuapp.com/getItemIcon",
      //"http://localhost:8080/getItemIcon",
      characterMediaEndpoint:
        "https://honorcostcalculator.herokuapp.com/getCharacterImage",
      //"http://localhost:8080/getCharacterImage",
      isLoading: false,
    };
  },
  computed: {

    fullCharname() {
      return this.name.toUpperCase();
    }

  },
  watch: {
    itemIcon: {
      deep: true,
      immediate: true,
      handler: function () {
        this.getIcons();
      },
    },
  },
  methods: {
    wowHead(index) {

      try {
        let returnValue = "https://www.wowhead.com/item=" + this.ilvlArray[index].media.id + "?bonus="
      for (let y = 0; y < this.ilvlArray[index].bonus_list.length; y++ ) {
        returnValue = returnValue + this.ilvlArray[index].bonus_list[y] + ":"
       }
        return returnValue;
      } catch {
        return "https://www.wowhead.com/item=";
      }
    },
    

    Rank(index) {
      //darf erst ausgeführt werden nachdem ilvlArray befüllt wurde (props geschickt wurden) -> lifecycle hook
      try {
        if (
          this.ilvlArray[index].name_description != undefined &&
          !this.ilvlArray[index].name.includes("Unchained")
        ) {
          return this.ilvlArray[index].name_description.display_string;
        } else {
          return "No PvP Item!";
        }
      } catch (error) {
        console.log("no rank possible");
      }
    },
    upgradeCosts(index) {
      // console.log(this.upgradeCostArray);
      if (this.upgradeCostArray[index] != null) {
        return "Costs: " + this.upgradeCostArray[index];
      } else {
        return "Costs: 0";
      }
    },

    async getWeaponIcon() {
      try {
        await axios
          .request({
            method: "POST",
            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[15].media.id,
            },
          })
          .then((resp) => {
            try {
              this.iconArray[15] = resp.data.assets[0].value;
            } catch (error) {
              this.iconArray[15] = "";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch {
        this.iconArray[15] = "../../assets/eu.png";
      }
    },
  

    async getIcons() {
      this.isLoading = true;
      let nameArray = this.name.split("-");
      let getName = nameArray[0].toLowerCase();
      let getRealm = nameArray[1].toLowerCase();
      let getRegion = this.region;
      console.log(getName);
      console.log(getRealm);
      console.log(getRegion);

      await axios
        .all([
          axios.request({
            method: "POST",
            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[0].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[1].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[2].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[3].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[4].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[5].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[6].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[7].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[8].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[9].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[10].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[11].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[12].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[13].media.id,
            },
          }),
          axios.request({
            method: "POST",

            url: this.itemIconEndpoint,

            headers: {},
            data: {
              iconID: this.ilvlArray[14].media.id,
            },
          }),
          axios.request({
            method: "POST",
            url: this.characterMediaEndpoint,

            headers: {},
            data: {
              name: getName,
              realm: getRealm,
              region: getRegion,
            },
          }),
        ])
        .then(
          axios.spread(
            (
              data0,
              data1,
              data2,
              data3,
              data4,
              data5,
              data6,
              data7,
              data8,
              data9,
              data10,
              data11,
              data12,
              data13,
              data14,
              charImageData
            ) => {
              try {
                this.iconArray[0] = data0.data.assets[0].value;
              } catch (error) {
                this.iconArray[0] = "../../assets/nopicture.png";
              }
              try {
                this.iconArray[1] = data1.data.assets[0].value;
              } catch (error) {
                this.iconArray[1] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[2] = data2.data.assets[0].value;
              } catch (error) {
                this.iconArray[2] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[3] = data3.data.assets[0].value;
              } catch (error) {
                this.iconArray[3] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[4] = data4.data.assets[0].value;
              } catch (error) {
                this.iconArray[4] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[5] = data5.data.assets[0].value;
              } catch (error) {
                this.iconArray[5] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[6] = data6.data.assets[0].value;
              } catch (error) {
                this.iconArray[6] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[7] = data7.data.assets[0].value;
              } catch (error) {
                this.iconArray[7] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[8] = data8.data.assets[0].value;
              } catch (error) {
                this.iconArray[8] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[9] = data9.data.assets[0].value;
              } catch (error) {
                this.iconArray[9] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[10] = data10.data.assets[0].value;
              } catch (error) {
                this.iconArray[10] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[11] = data11.data.assets[0].value;
              } catch (error) {
                this.iconArray[11] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[12] = data12.data.assets[0].value;
              } catch (error) {
                this.iconArray[12] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[13] = data13.data.assets[0].value;
              } catch (error) {
                this.iconArray[13] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.iconArray[14] = data14.data.assets[0].value;
              } catch (error) {
                this.iconArray[14] = "../../assets/nopicture.png";
                console.log(error);
              }
              try {
                this.charMediaLink = charImageData.data.assets[2].value;
                console.log(this.charMediaLink);
              } catch (error) {
                console.log("cant load charImageData");
              }
              this.isLoading = false;
            }
          )
        );
      this.getWeaponIcon();
    },
  },
};
</script>

<style scoped>
.container {
  display: block;
}
.honorcost-div {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid lightgray;
  margin-bottom: 25px;
  padding: 15px;
}

.honor-need-text {
  font-size: 25px;
  margin: 15px;
  margin-right: 3px;
}

.left-item-div {
  float: left;
}

.right-item-div {
  float: right;
}

.weapon-div {
  display: inline-block;
}

.equip-list-div {
  position: relative;
}

.weapon-item-div {
  background-color: transparent;
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.item-div {
  position: relative;
  background-color: transparent;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}




.span-rank {
  margin: 8px;
  color: green;
}

.span-cost {
  margin: 8px;
  margin-right: 3px;
  color: red;
}



.span-charname {
  font-size: 20px;
  margin: 15px;
  float: left;
}

.honor-image {
  height: 22px;
  width: 22px;
  margin-left: 4px;
}
</style>
