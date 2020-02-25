import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    userName: "Steve",
    currentPage: "home",
    sandwichName: null,
    sandwichOrder: [],
    sandwichTypes: [
      "Pizza",
      "Calzone",
      "Ravioli",
      "Ice Cream",
      "Hot Pocket"
    ],
    complaints: [],
    complaintCounter: 0
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
  },
  methods: {
    addComplaint: function(obj) {
      this.complaints.push({ message: obj.message, id: this.complaintCounter });
      this.complaintCounter += 1;
    },
    removeComplaint: function(id) {
      for (var i = 0; i < this.complaints.length; i++) {
        if (this.complaints[i].id == id) {
          this.complaints.splice(i, 1);
          return;
        }
      }
    }
  }
});

window.app = app;
