(function(e){function t(t){for(var c,s,a=t[0],l=t[1],i=t[2],u=0,b=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);h&&h(t);while(b.length)b.shift()();return n.push.apply(n,i||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],c=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(c=!1)}c&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var c={},r={app:0},n=[];function s(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=c,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(o,c,function(t){return e[t]}.bind(null,c));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var h=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var c=o("7a23");function r(e,t,o,r,n,s){var a=Object(c["y"])("base-header"),l=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(a),Object(c["i"])(l)],64)}var n=Object(c["h"])("Honor Cost Calculator"),s=Object(c["h"])("Info"),a=Object(c["h"])("Contact");function l(e,t){var o=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["f"])("header",null,[Object(c["g"])("nav",null,[Object(c["g"])("h1",null,[Object(c["i"])(o,{to:"/"},{default:Object(c["F"])((function(){return[n]})),_:1})]),Object(c["g"])("ul",null,[Object(c["g"])("h1",null,[Object(c["g"])("li",null,[Object(c["i"])(o,{to:"/info"},{default:Object(c["F"])((function(){return[s]})),_:1})])]),Object(c["g"])("h1",null,[Object(c["g"])("li",null,[Object(c["i"])(o,{to:"/contact"},{default:Object(c["F"])((function(){return[a]})),_:1})])])])])])}o("8305");var i=o("6b0d"),h=o.n(i);const u={},b=h()(u,[["render",l],["__scopeId","data-v-097e4d90"]]);var d=b,v={BaseHeader:d};const g=h()(v,[["render",r]]);var O=g,f=o("6c02"),p=(o("b0c0"),o("99e4")),j=o.n(p),k={class:"hcc-container"},y=Object(c["g"])("img",{src:j.a,id:"hccimage"},null,-1),m={class:"hcc-form"},A=Object(c["g"])("p",null,null,-1),w=Object(c["g"])("p",null,null,-1),_=Object(c["g"])("label",{for:"checkbox"},"EU",-1),S=Object(c["g"])("label",{for:"checkbox"},"US",-1),C=Object(c["g"])("p",null,null,-1),E={key:0},P=Object(c["g"])("p",null,null,-1),T={key:0},I=Object(c["g"])("h2",null,"This means you need to either win:",-1),M=Object(c["g"])("p",null,null,-1),H={id:"errorHeader"};function R(e,t,o,r,n,s){var a=Object(c["y"])("base-card");return Object(c["r"])(),Object(c["d"])(a,null,{default:Object(c["F"])((function(){return[Object(c["g"])("div",k,[y,Object(c["g"])("form",m,[Object(c["G"])(Object(c["g"])("input",{type:"text",id:"input",name:"name",placeholder:"CHARACTER NAME","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.name=e})},null,512),[[c["D"],n.name]]),A,Object(c["G"])(Object(c["g"])("input",{type:"text",id:"input",name:"realm",placeholder:"REALM","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.realm=e})},null,512),[[c["D"],n.realm]]),w,_,Object(c["G"])(Object(c["g"])("input",{type:"checkbox",id:"eu","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.checkedEu=e}),onChange:t[3]||(t[3]=function(){return s.changeToEu&&s.changeToEu.apply(s,arguments)})},null,544),[[c["C"],n.checkedEu]]),S,Object(c["G"])(Object(c["g"])("input",{type:"checkbox",id:"us","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.checkedUs=e}),onChange:t[5]||(t[5]=function(){return s.changeToUs&&s.changeToUs.apply(s,arguments)})},null,544),[[c["C"],n.checkedUs]]),C,Object(c["g"])("a",{href:"#",class:"calculateHonorButton",onClick:t[6]||(t[6]=function(){return s.getItemlevel&&s.getItemlevel.apply(s,arguments)})},"Calculate Honor")])]),Object(c["g"])("div",null,[n.showConvert?(Object(c["r"])(),Object(c["f"])("div",E,[Object(c["g"])("h2",null," In order to upgrade all your conquest pvp gear to Duelist level you need to farm additional "+Object(c["A"])(n.honorcost)+" honor! ",1),P,e.showConvertWins?(Object(c["r"])(),Object(c["f"])("ul",T,[I,Object(c["g"])("h2",null,[Object(c["g"])("li",null,Object(c["A"])(s.bgwins)+" Battlegrounds",1),Object(c["g"])("li",null,Object(c["A"])(s.arena2vs2wins)+" 2vs2 Arena Games",1),Object(c["g"])("li",null,Object(c["A"])(s.arena3vs3wins)+" 3vs3 Arena Games",1),Object(c["g"])("li",null,Object(c["A"])(s.skirmishwins)+" Skirmishes",1)])])):Object(c["e"])("",!0)])):Object(c["e"])("",!0),M,Object(c["g"])("div",null,[Object(c["g"])("h2",H,Object(c["A"])(n.errorMessage),1)])])]})),_:1})}o("d3b7"),o("25f0"),o("caad"),o("2532");var U=o("bc3a"),x=o.n(U),B={class:"card"};function N(e,t){return Object(c["r"])(),Object(c["f"])("div",B,[Object(c["x"])(e.$slots,"default",{},void 0,!0)])}o("aab0");const G={},D=h()(G,[["render",N],["__scopeId","data-v-5e48fc08"]]);var F=D,L={components:{BaseCard:F},data:function(){return{name:"",realm:"",ilvlArray:[],honorcost:0,showConvert:!1,region:null,checkedEu:!1,checkedUs:!1,errorMessage:""}},computed:{skirmishwins:function(){return"~"+Math.round(this.honorcost/110)},arena2vs2wins:function(){return"~"+Math.round(this.honorcost/170)},arena3vs3wins:function(){return"~"+Math.round(this.honorcost/200)},bgwins:function(){return"~"+Math.round(this.honorcost/350)}},created:function(){x.a.request({method:"GET",url:"http://honorcolstcalculator.herokuapp.com/createToken"})},methods:{changeToEu:function(){this.region="eu",this.checkedEu=!0,this.checkedUs=!1},changeToUs:function(){this.region="us",this.checkedEu=!1,this.checkedUs=!0},calculateBigPieces:function(e){switch(e){case 249:this.honorcost=this.honorcost+8725;break;case 252:this.honorcost=this.honorcost+7950;break;case 255:this.honorcost=this.honorcost+7025;break;case 259:this.honorcost=this.honorcost+5950;break;case 262:this.honorcost=this.honorcost+4725;break;case 265:this.honorcost=this.honorcost+3350;break;case 268:this.honorcost=this.honorcost+1825;break;case 272:this.honorcost=this.honorcost+0;break;case 275:this.honorcost=this.honorcost+0;break}console.log(this.honorcost)},calculateSmallPieces:function(e){switch(e){case 249:this.honorcost=this.honorcost+5225;break;case 252:this.honorcost=this.honorcost+5225-450;break;case 255:this.honorcost=this.honorcost+5225-1e3;break;case 259:this.honorcost=this.honorcost+5225-1650;break;case 262:this.honorcost=this.honorcost+5225-2375;break;case 265:this.honorcost=this.honorcost+5225-3200;break;case 268:this.honorcost=this.honorcost+5225-4125;break;case 272:this.honorcost=this.honorcost+0;break;case 275:this.honorcost=this.honorcost+0;break}console.log(this.honorcost)},calculateMiddlePieces:function(e){switch(e){case 249:this.honorcost=this.honorcost+6950;break;case 252:this.honorcost=this.honorcost+6950-600;break;case 255:this.honorcost=this.honorcost+6950-1325;break;case 259:this.honorcost=this.honorcost+6950-2175;break;case 262:this.honorcost=this.honorcost+6950-3150;break;case 265:this.honorcost=this.honorcost+6950-4250;break;case 268:this.honorcost=this.honorcost+6950-5475;break;case 272:this.honorcost=this.honorcost+0;break;case 275:this.honorcost=this.honorcost+0;break}console.log(this.honorcost)},calculate2HandWeapon:function(e){switch(e){case 249:this.honorcost=this.honorcost+17450;break;case 252:this.honorcost=this.honorcost+17450-1550;break;case 255:this.honorcost=this.honorcost+17450-3400;break;case 259:this.honorcost=this.honorcost+17450-5500;break;case 262:this.honorcost=this.honorcost+17450-8e3;break;case 265:this.honorcost=this.honorcost+17450-10750;break;case 268:this.honorcost=this.honorcost+17450-13800;break;case 272:this.honorcost=this.honorcost+0;break;case 275:this.honorcost=this.honorcost+0;break}console.log(this.honorcost)},calculateShield:function(e){switch(e){case 249:this.honorcost=this.honorcost+4300;break;case 252:this.honorcost=this.honorcost+4300-375;break;case 255:this.honorcost=this.honorcost+4300-825;break;case 259:this.honorcost=this.honorcost+4300-1350;break;case 262:this.honorcost=this.honorcost+4300-1950;break;case 265:this.honorcost=this.honorcost+4300-2625;break;case 268:this.honorcost=this.honorcost+4300-3375;break;case 272:this.honorcost=this.honorcost+0;break;case 275:this.honorcost=this.honorcost+0;break}console.log(this.honorcost)},calculateMainHand:function(e){switch(e){case 249:this.honorcost=this.honorcost+13150;break;case 252:this.honorcost=this.honorcost+13150-1175;break;case 255:this.honorcost=this.honorcost+13150-2575;break;case 259:this.honorcost=this.honorcost+13150-4200;break;case 262:this.honorcost=this.honorcost+13150-6050;break;case 265:this.honorcost=this.honorcost+13150-8125;break;case 268:this.honorcost=this.honorcost+13150-10425;break;case 272:this.honorcost=this.honorcost+0;break;case 275:this.honorcost=this.honorcost+0;break}console.log(this.honorcost)},getItemlevel:function(){var e=this;if(null!==this.region){this.errorMessage="",this.ilvlArray=null,this.honorcost=0;var t=this.name.toLowerCase(),o=this.realm.toLowerCase(),c=this.region;console.log(t),x.a.request({method:"POST",url:"http://honorcolstcalculator.herokuapp.com/getItemlevel",headers:{},data:{charName:t,charRealm:o,charRegion:c}}).then((function(t){e.showConvert=!0,e.ilvlArray=t.data,console.log(e.ilvlArray);for(var o=0;o<e.ilvlArray.length;o++)if(console.log(""),console.log(e.ilvlArray[o].level.value.toString()),console.log(e.ilvlArray[o].name),void 0!=e.ilvlArray[o].name_description&&!e.ilvlArray[o].name.includes("Unchained")){var c=e.ilvlArray[o].name_description.display_string.includes("Unranked")||e.ilvlArray[o].name_description.display_string.includes("Combatant I")||e.ilvlArray[o].name_description.display_string.includes("Combatant II")||e.ilvlArray[o].name_description.display_string.includes("Challenger I")||e.ilvlArray[o].name_description.display_string.includes("Challenger II")||e.ilvlArray[o].name_description.display_string.includes("Rival I")||e.ilvlArray[o].name_description.display_string.includes("Rival II");if(!0===c)switch(e.ilvlArray[o].inventory_type.type){case"HEAD":e.calculateBigPieces(e.ilvlArray[o].level.value);break;case"NECK":e.calculateSmallPieces(e.ilvlArray[o].level.value);break;case"SHOULDER":e.calculateMiddlePieces(e.ilvlArray[o].level.value);break;case"CHEST":e.calculateBigPieces(e.ilvlArray[o].level.value);break;case"LEGS":e.calculateBigPieces(e.ilvlArray[o].level.value);break;case"WAIST":e.calculateMiddlePieces(e.ilvlArray[o].level.value);break;case"WRIST":e.calculateSmallPieces(e.ilvlArray[o].level.value);break;case"HAND":e.calculateMiddlePieces(e.ilvlArray[o].level.value);break;case"FINGER":e.calculateSmallPieces(e.ilvlArray[o].level.value);break;case"TRINKET":if(!0===e.ilvlArray[o].name.includes("Emblem")||!0===e.ilvlArray[o].name.includes("Alacrity")||!0===e.ilvlArray[o].name.includes("Shackles")||!0===e.ilvlArray[o].name.includes("Ferocity")||!0===e.ilvlArray[o].name.includes("Eternal")||!0===e.ilvlArray[o].name.includes("Resonator")){e.calculateMiddlePieces(e.ilvlArray[o].level.value);break}e.calculateSmallPieces(e.ilvlArray[o].level.value);break;case"CLOAK":e.calculateSmallPieces(e.ilvlArray[o].level.value);break;case"TWOHWEAPON":e.calculate2HandWeapon(e.ilvlArray[o].level.value);break;case"WEAPON":!0===e.ilvlArray[o].name.includes("Ritual Dagger")||!0===e.ilvlArray[o].name.includes("Ceromonial Sword")||!0===e.ilvlArray[o].name.includes("Gavel")?e.calculateMainHand(e.ilvlArray[o].level.value):e.calculateBigPieces(e.ilvlArray[o].level.value);break;case"SHIELD":e.calculateShield(e.ilvlArray[o].level.value);break;case"HOLDABLE":e.calculateShield(e.ilvlArray[o].level.value);break}else e.honorcost=e.honorcost+0}})).catch((function(e){}))}else this.errorMessage="ERROR: Please select a region"}}};o("bd1b");const W=h()(L,[["render",R]]);var V=W,q=Object(c["g"])("h1",null,[Object(c["g"])("u",null,"INFORMATION:")],-1),J=Object(c["g"])("h2",null,"This site was made to show how ridiculous the honor grind in Shadowlands is.",-1),K=Object(c["g"])("p",null,null,-1),z=Object(c["g"])("h2",null,"Please use the official forums or Twitter and tell Blizzard how awful the gearing process is!",-1),$=Object(c["g"])("p",null,null,-1),Q=Object(c["g"])("h2",null,"Thanks for visiting! See you in the arena :)",-1);function X(e,t){var o=Object(c["y"])("base-card");return Object(c["r"])(),Object(c["d"])(o,null,{default:Object(c["F"])((function(){return[q,J,K,z,$,Q]})),_:1})}const Y={},Z=h()(Y,[["render",X]]);var ee=Z,te=Object(c["g"])("h1",null,[Object(c["g"])("u",null,"CONTACT:")],-1),oe=Object(c["g"])("h2",null,"If you have any suggestions or found any bugs please reach out to me!",-1),ce=Object(c["g"])("p",null,null,-1),re=Object(c["g"])("h2",null,"Just send me an e-mail at honorcostcalculator@gmail.com",-1),ne=Object(c["g"])("h2",null,"Alternatively you can add me in Battle.net my Battletag is Eli#2994",-1),se=Object(c["g"])("p",null,null,-1),ae=Object(c["g"])("h2",null,"Thanks for visiting! See you in the arena :)",-1);function le(e,t){var o=Object(c["y"])("base-card");return Object(c["r"])(),Object(c["d"])(o,null,{default:Object(c["F"])((function(){return[te,oe,ce,re,ne,se,ae]})),_:1})}const ie={},he=h()(ie,[["render",le]]);var ue=he,be=Object(f["a"])({history:Object(f["b"])(),routes:[{path:"/",redirect:"/hcc"},{path:"/hcc",component:V},{path:"/info",component:ee},{path:"/contact",component:ue}]}),de=be,ve=Object(c["c"])(O);ve.use(de),ve.component("base-card",F),ve.component("base-header",d),ve.mount("#app")},"5f7d":function(e,t,o){},8305:function(e,t,o){"use strict";o("fa32")},"99e4":function(e,t,o){e.exports=o.p+"img/hccbild.6b352945.png"},aab0:function(e,t,o){"use strict";o("5f7d")},b94c:function(e,t,o){},bd1b:function(e,t,o){"use strict";o("b94c")},fa32:function(e,t,o){}});
//# sourceMappingURL=app.970eb196.js.map