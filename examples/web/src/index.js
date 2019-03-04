import "./style.css";
import Vue from 'vue/dist/vue.js';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    isButtonDisabled: true,
    options: [
      { name: "Doge", type: "cute" },
      { name: "Doggo", type: "large" },
      { name: "Woofer", type: "huge" },
      { name: "Pup", type: "tiny" }
    ],
    quizQuestions: [
      {
        question: "Which of the following is a good Pokèmon?",
        answers: [
          "Pikachu",
          "Garbador",
          "Trubbish",
          "Scorbunny"
        ],
        rightAnswer: "Scorbunny",
        number: 1
      },
      {
        question: "Why should I like myself?",
        answers: [
          "I try my best",
          "Dogs are good",
          "Sobbles is weird",
          "Green dolphin"
        ],
        rightAnswer: "I try my best",
        number: 2
      }
    ],
    answeredQuestions: [],
    quizScore: 0,
    firstName: "Steve",
    lastName: "Richey",
    pageName: "home",
    isError: false,
    colorList: ["red", "blue", "green"],
    emojiList: ["cowboy", "horse", "dolphin"],
    currentColor: "red",
    currentEmoji: "cowboy",
    kittenUrl: 'http://placekitten.com/300/300',
    schedules: [],
    selectedSchedule: "",
    currentName: "",
    currentTodo: "",
    cart: [],
    randomTitles: ["henlo", "fren", "mac & me"],
    randomTitleIndex: 0
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    optionCount: function () {
      return this.options.length;
    },
    fileName: function () {
      return './images/' + this.currentColor + '_' + this.currentEmoji + '.png';
    },
    numberOfQuizQuestions: function () {
      return this.quizQuestions.length;
    },
    quizPercent: function () {
      return Math.round((this.quizScore / this.numberOfQuizQuestions) * 100);
    },
    numberOfSchedules: function() {
      return this.schedules.length;
    },
    hasSchedules: function() {
      return this.schedules.length > 0;
    },
    cartTotal: function() {
      var total = 0;

      for (var i = 0; i < this.cart.length; i++) {
        total += this.cart[i].cost;
      }

      return total;
    },
    randomlyGeneratedTitle: function() {
      return this.randomTitles[this.randomTitleIndex];
    }
  },
  methods: {
    removeOption: function () {
      this.options.pop();
    },
    addOption: function(name) {
      this.options.push(name);
    },
    reverseOptions: function() {
      this.options.reverse();
    },
    submitAnswer: function(question, selectedAnswer) {
      if (question.rightAnswer == selectedAnswer) {
        this.quizScore += 1;
      }

      this.answeredQuestions.push(question.number);
    },
    createSchedule: function(selectedReminji, scheduleName) {
      this.schedules.push({
        reminji: selectedReminji,
        name: scheduleName,
        todos: []
      });
    },
    addTodo: function(schedule, todo) {
      schedule.todos.push(todo);
    },
    removeTodo: function(schedule, todo) {
      var index = schedule.todos.indexOf(todo);

      if (index >= 0) {
        schedule.todos.splice(index, 1);
      }
    },
    makeNewTitle: function() {
      this.randomTitleIndex = Math.floor(Math.random() * this.randomTitles.length);
    },
    addToCart: function(name, cost) {
      this.cart.push({
        name: name,
        cost: cost
      })
    }
  }
});

window.app = app;
