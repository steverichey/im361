import "./style.css";
import Vue from 'vue/dist/vue.js';

var app = new Vue({
  el: '#app',
  data: {
    studentName: "",
    uploadedFile: null,
    comments: "",
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
            question: "Has the student applied lessons learned during the course to improve their application?",
            options: [
              "Student has seemingly ignored nearly all lessons taught during this course",
              "Several key concepts have been ignored, but a few lessons are applied",
              "The concepts taught in several, but not all, lessons are clearly visible in the work",
              "Most lessons of this portion of the course were likely applied to the project",
              "All lessons of this portion of the course were clearly applied to improve the project"
            ],
            picked: 2
          },
          {
            label: "E2",
            question: "Has the student leveraged outside materials to solve technical challenges or add features to their application?",
            options: [
              "Student clearly spent no time using freely available resources for their project",
              "Very little effort was spent on leveraging outside resources",
              "Some effort has been made to solve problems independently with publicly available resources",
              "Significant effort was spent leveraging some outside materials",
              "Student has spent a substantial amount of time and effort leveraging outside materials"
            ],
            picked: 2
          },
          {
            label: "E3",
            question: "Has the student demonstrated attentiveness and engagement during lessons?",
            options: [
              "Did not pay attention in class or frequently accessed irrelevant resources on their computer",
              "Paid attention in class but repeatedly failed to inform the instructor of abscences",
              "Student informed instructor of abscences and generally paid attention during class",
              "Student was generally attentive and engaged but may have missed a class unexcused",
              "Student informed instructor of abscences and was attentive and engaged when present"
            ],
            picked: 2
          },
          {
            label: "E4",
            question: "Has the student expanded their capabilities since the beginning of the project?",
            options: [
              "Student shows no growth over the duration of the project, and maybe forgot a few things",
              "A minor amount of growth is evident, well below the intended growth",
              "Student has grown in the topic at hand, but no more than could be expected",
              "Some expansion of ability that is beyond the average student",
              "Clear and significant progress and learning in this capacity since the start of the course"
            ],
            picked: 2
          },
          {
            label: "E5",
            question: "Has the student made an effort to achieve beyond what they believed they were capable of?",
            options: [
              "Student showed no interest in even a modicum of effort for the entire project",
              "Student's effort was below expectations in several regards",
              "The effort put forth is evident, but is no more than the average college student",
              "Above average effort was put forth to complete the challenges of this project",
              "Student's effort is commendable and displays a capability and willingness to challenge oneself"
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
            question: "Does the application represent best practices for the platform and technologies which it leverages?",
            options: [
              "Project is an outright mockery of the very concept of best practices",
              "",
              "Some attempt has been made to match best practices, but may differ in some key places",
              "",
              "Project strictly matches best practices and published standards"
            ],
            picked: 2
          },
          {
            label: "GT2",
            question: "Does the text formatting throughout the application source code reflect standards for the language it is written in?",
            options: [
              "Formatting or lack thereof confounds any attempt to parse code or markup",
              "",
              "Much of the formatting nearly matches industry standard with some exceptions",
              "",
              "Source formatting is nearly indistinguishable from expert work"
            ],
            picked: 2
          },
          {
            label: "GT3",
            question: "Does the source code include comments to clarify the intention behind implementation to other readers?",
            options: [
              "Comments are missing or riddled with typos, outright lies, and insults to the reader",
              "",
              "Comments are used but may be poorly written or duplicate concepts evident in code",
              "",
              "Comments provide insight into the project that would not be viable in code alone"
            ],
            picked: 2
          },
          {
            label: "GT4",
            question: "Do the variable, class, and file names in the source code clarify their purpose or match expected structure?",
            options: [
              "Naming is applied to actively prevent comprehension by the human mind",
              "",
              "Many names are well-chosen but in some cases may be confusing or unclear",
              "",
              "Naming makes it immediately apparent what the function of any particular object is"
            ],
            picked: 2
          },
          {
            label: "GT5",
            question: "Does the build process of the application match the expected format and work as intended?",
            options: [
              "Build process is incomprehensible and/or unknowable; some dark magicks",
              "",
              "In some cases, build process is not in the expected format, but is generally correct",
              "",
              "Build process strictly conforms to format for platform and/or frameworks"
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
            question: "Does the HTML for the application leverage semantic markup with proper attributes?",
            options: [
              "HTML validation absolutely fails, leading to rendering errors in the browser",
              "",
              "HTML validation may have some minor issues, but semantic tags are mostly correct",
              "",
              "HTML is valid, well-formed, and easily readable with appropriate use of semantic tags"
            ],
            picked: 2
          },
          {
            label: "ST2",
            question: "Is the JavaScript clear to the reader while leveraging features available in Vue?",
            options: [
              "JavaScript is not valid, semantically unclear, and the syntax is incorrect",
              "",
              "JavaScript may have incorrect formatting or function in some places, but is mostly correct",
              "",
              "JavaScript format aids comprehension in significant ways"
            ],
            picked: 2
          },
          {
            label: "ST3",
            question: "Does the CSS properly style the content, with clear style rules, that apply evenly throughout the content?",
            options: [
              "CSS rules are extremely narrow, use overrides, or use incorrect syntax",
              "",
              "CSS rules are logical and the proper syntax is used throughout with few exceptions",
              "",
              "All CSS is well-written, well-formatted, and easy to understand"
            ],
            picked: 2
          },
          {
            label: "ST4",
            question: "Does the application produce errors or warnings when running in the browser?",
            options: [
              "Numerous errors and warnings are produced at runtime, at all levels of the application",
              "",
              "No errors are produced in the browser console, but some warnings may appear",
              "",
              "When the web application is running, no errors or warnings are displayed in the console"
            ],
            picked: 2
          },
          {
            label: "ST5",
            question: "Does the application's build process produce errors or warnings?",
            options: [
              "Numerous errors and warnings are produced at buildtime when using the standard build process",
              "",
              "No errors are produced at build time, but some warnings may appear",
              "",
              "When the web application is built, no errors or warnings are produced by the build tools"
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
    weightMultiplier: function() {
      return 0.75;
    },
    weightAdd: function() {
      return 25;
    },
    weightedScore: function() {
      return (this.overallScore * this.weightMultiplier + this.weightAdd).toFixed(2);
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

      text += "comments:" + this.comments + "\n";
      text += "raw:" + this.overallTotal + "/" + this.overallMax + "\n";
      text += "weighted:" + this.weightedScore + "%\n";

      return "data:text/plain;charset=utf-8," + encodeURIComponent(text);
    },
    downloadFilename: function() {
      var nameParts = this.studentName.split(" ");
      var result = "";

      if (nameParts.length < 2) {
        result = nameParts[0].toLowerCase();
      } else {
        result = nameParts[0].toLowerCase() + "_" + nameParts[1].toLowerCase();
      }

      return result + "_grade_export.txt";
    },
    isInvalidComments: function() {
      return this.comments.includes(":");
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

      return (100 * total / max).toFixed(2);
    },
    uploadFile: function() {
      this.uploadedFile = this.$refs.file.files[0];
      var self = this;

      var fileReader = new FileReader();
      fileReader.onload = function(event) {
          var fileText = event.target.result;
          var lines = fileText.split("\n");

          self.studentName = lines[0];

          for (var i = 0; i < lines.length; i++) {
            if (i == 0) {
              continue;
            }

            var keyValue = lines[i].split(":");

            if (keyValue[0] == "comments") {
              self.comments = keyValue[1];
              continue;
            }

            for (var j = 0; j < self.categories.length; j++) {
              var category = self.categories[j];

              for (var k = 0; k < category.elements.length; k++) {
                var element = category.elements[k];

                if (keyValue[0] == element.label) {
                  element.picked = parseInt(keyValue[1]);
                }
              }
            }
          }
      };

      fileReader.readAsText(this.uploadedFile, "UTF-8");
    }
  }
});

window.app = app;
