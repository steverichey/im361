import "./style.css";
import Vue from 'vue/dist/vue.js';

var app = new Vue({
  el: '#app',
  data: {
    studentName: "",
    categories: [
      {
        name: "Design",
        elements: [
          {
            label: "D1",
            question: "Does the finished project match the intended design as shown by the student at the beginning of the semester?",
            options: [
              "Original design is actively mocked by the poor quality of the finished product.",
              "Design has some significant shortcomings but is generally acceptable.",
              "Design is mostly matched with some exceptions that are not a detriment to the design.",
              "Design is represented well and has some minor improvements.",
              "Original design is well-represented and in several ways improved."
            ],
            picked: 2
          },
          {
            label: "D2",
            question: "Is the web application responsive to a variety of screen sizes?",
            options: [
              "Application has substantial visual issues at all screen sizes and resolutions",
              "Application has noticable design errors at several screen sizes and resolutions",
              "Design functions well across some common and targeted screen sizes",
              "Application looks okay at most tested screen sizes and resolutions",
              "Application looks great at all tested screen sizes and resolutions"
            ],
            picked: 2
          },
          {
            label: "D3",
            question: "Is the design intuitive, easy to use, and comparable to what a user would expect for an application of this type?",
            options: [
              "Design actively works to thwart the user at all times, a labyrinth of dark design",
              "Significant issues in the design detract from the user experience",
              "Design is largely intuitive but may have a few points of confusion",
              "Navigation and use are clear and intuitive with few exceptions",
              "Intended and available state and actions are immediately recognizable at all levels"
            ],
            picked: 2
          },
          {
            label: "D4",
            question: "Does the design reflect modern design principles, trends, and best practices?",
            options: [
              "Design is antithetical to the concept of improvements to design and usability",
              "There is some influence from modern design principles, but with major issues",
              "Modern principles are evident despite some shortcomings in a few notable places",
              "The design generally leverages modern principles with few exceptions",
              "Project leverages the state of the art in the design of applications"
            ],
            picked: 2
          },
          {
            label: "D5",
            question: "Is the design subjectively pleasing to a user familiar with the standards for this platform?",
            options: [
              "Subjectively, the design is unpleasing, confusing, and bad to look at, with the eyes",
              "Subjectively, the design is unpleasing but in some cases very pleasant",
              "Subjectively, the design is pleasing but may have some inconsistencies",
              "Subjectively, the design is pleasing with very few issues",
              "Subjectively, the design is pleasing to look at and represents a student's best work"
            ],
            picked: 2
          }
        ]
      },
      {
        name: "Effort",
        elements: [
          {
            label: "E1",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "E2",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "E3",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "E4",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "E5",
            question: "",
            options: [
            ],
            picked: 2
          }
        ]
      },
      {
        name: "General technical",
        elements: [
          {
            label: "GT1",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "GT2",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "GT3",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "GT4",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "GT5",
            question: "",
            options: [
            ],
            picked: 2
          }
        ]
      },
      {
        name: "Specific technical",
        elements: [
          {
            label: "ST1",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "ST2",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "ST3",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "ST4",
            question: "",
            options: [
            ],
            picked: 2
          },
          {
            label: "ST5",
            question: "",
            options: [
            ],
            picked: 2
          }
        ]
      }
    ]
  },
  computed: {
    overallTotal: function() {
      var total = 0;

      for (var i = 0; i < this.categories.length; i++) {
        var category = this.categories[i];
        total += this.categoryTotal(category);
      }

      return total;
    },
    overallMax: function() {
      var max = 0;

      for (var i = 0; i < this.categories.length; i++) {
        var category = this.categories[i];
        max += this.categoryMax(category);
      }

      return max;
    },
    overallScore: function() {
      return this.computeScore(this.overallTotal, this.overallMax);
    },
    weightedScore: function() {
      return Math.round(this.overallScore * 0.75 + 25);
    },
    weightedGrade: function() {
      var score = this.weightedScore;

      if (score >= 90) {
        return "A";
      } else if (score >= 80) {
        return "B";
      } else if (score >= 70) {
        return "C";
      } else if (score >= 60) {
        return "D";
      } else {
        return "F";
      }
    },
    downloadLink: function() {
      var text = this.studentName + "\n";

      for (var i = 0; i < this.categories.length; i++) {
        var category = this.categories[i];

        if (category.elements) {
          for (var j = 0; j < category.elements.length; j++) {
            var element = category.elements[j];
            text += element.label + ":" + element.picked + "\n";
          }
        }
      }

      text += "raw:" + this.overallTotal + "/" + this.overallMax + "\n";
      text += "weighted:" + this.weightedScore + "%\n";

      return 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
    }
  },
  methods: {
    categoryTotal: function(category) {
      var total = 0;

      if (category.elements) {
        for (var i = 0; i < category.elements.length; i++) {
          var element = category.elements[i];

          if ((typeof element.picked !== 'undefined') && element.options && element.options.length) {
            total += element.picked + 1;
          }
        }
      }

      return total;
    },
    categoryMax: function(category) {
      var max = 0;

      if (category.elements) {
        for (var i = 0; i < category.elements.length; i++) {
          var element = category.elements[i];

          if (element.options && (typeof element.picked !== 'undefined')) {
            max += element.options.length;
          }
        }
      }

      return max;
    },
    categoryScore: function(category) {
      return this.computeScore(this.categoryTotal(category), this.categoryMax(category));
    },
    canShowSelected: function(element) {
      return element.options && (typeof element.picked !== 'undefined') && element.options.length > 0;
    },
    canShowOptions: function(element) {
      return element.options && element.options.length > 0;
    },
    computeScore: function(total, max) {
      if (max == 0) {
        return 0;
      }

      return Math.round(100 * total / max);
    }
  }
});

window.app = app;
