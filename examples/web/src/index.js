import Vue from 'vue/dist/vue.js'
import "./style.css";
import html from './index.html';
// import kitten from "./kitten.jpg";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    userName: "Steve",
    sandwichName: null,
    sandwichOrder: [],
    sandwichTypes: [
      "Pizza",
      "Calzone",
      "Ravioli",
      "Ice Cream",
      "Hot Pocket"
    ]
  },
  computed: {
    pluralSandwich: function() {
      if (this.sandwichName == "Ice Cream") {
        return "Ice Cream Sandwiches";
      } else if (this.sandwichName == "Ravioli") {
        return this.sandwichName;
      } else {
        return this.sandwichName + "s";
      }
    },
    cannotPlaceOrder: function() {
      return this.sandwichCount < 1;
    },
    isDangerous: function() {
      return this.sandwichCount >= 10;
    },
    sandwichCount: function() {
      return this.sandwichOrder.length;
    }
  }
});

window.app = app;
// const element = document.createElement('div');
//
//     // Lodash, now imported by this script
// element.innerHTML = "henlo";
// element.classList.add('hello');
//
// // Add the image to our existing div.
// const myIcon = new Image();
// myIcon.src = kitten;
// element.appendChild(myIcon);
//
// document.body.appendChild(element);
