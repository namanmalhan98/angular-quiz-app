import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionsArray: any = [];
  userpassword = '';
  email = '';
  //user: any = [];
  
 
  constructor(private route: Router) {
    this.questionsArray = [{
      id:"1.",
      question: "Which is not valid data type in Javascript",
      option1: "Undefinded",
      option2: "Boolean",
      option3: "float",
      option4: "Number",
      correct: "float"
    }, {
      id:"2.",
      question: "Which type of language is Javascript",
      option1: "Programming",
      option2: "Markup",
      option3: "Scripting",
      option4: "None of the above",
      correct: "Scripting"
    }, {
      id:"3.",
      question: "By which javascript code is used",
      option1: "Classes",
      option2: "Methods/Functions",
      option3: "RMI",
      option4: "Events",
      correct: "Methods/Functions"
    }, {
      id:"4.",
      question: "Original Name of Javascript is",
      option1: "Mocha",
      option2: "LiveScript",
      option3: "EScript",
      option4: "JavaScript",
      correct: "Mocha"
    }, {
      id:"5.",
      question: "Types of errors in Javascript",
      option1: "Run time errors",
      option2: "Compile Time Error",
      option3: "Interface errors",
      option4: "Aritmetic errors",
      correct: "Run time errors"
    },{
      id:"6.",
      question: "Types of errors in Describe an advantage of a binary search algorithm",
      option1: "Data does not need to be in order.",
      option2: "Performs well over large ordered lists.",
      option3: "Can only work on an ordered list. If unordered must use a linear search.",
      option4: "Slow with large data sets.",
      correct: "Can only work on an ordered list. If unordered must use a linear search."
    },{
      id:"7.",
      question: "Describe a disadvantage of a binary search algorithm",
      option1: "Data does not need to be in order.",
      option2: "Performs well over large ordered lists.",
      option3: "Can only work on an ordered list. If unordered must use a linear search.",
      option4: "Slow with large data sets.",
      correct: "Slow with large data sets."
    },{
      id:"8.",
      question: "How many binary searches will it take to find the value 7 in the list [1,4,7,8,10,28]?",
      option1: "0",
      option2: "1",
      option3: "2",
      option4: "3",
      correct: "2"
    },{
      id:"9.",
      question: "An algorithm is...",
      option1: "A set of steps to solve a problem",
      option2: "When you sort data into the correct order",
      option3: "When you search data for a specific value",
      option4: "Any written code",
      correct: "A set of steps to solve a problem"
    },{
      id:"10.",
      question: "What is the maximum number of comparisons required to find a value in a list of 20 items using a binary search?",
      option1: "20",
      option2: "5",
      option3: "6",
      option4: "21",
      correct: "21"
    }];

  }
  user : any =[];
  ngOnInit(): void {
  //   debugger;
  //  this.user = localStorage.getItem('users');
  //  if(!this.user.password && !this.user.email){
  //   this.route.navigateByUrl('/login');
  //  }
  }

  submit() {
    debugger;
    var count = 0;
    for (var j = 0; j < this.questionsArray.length; j++) {
      var radios: any = document.getElementsByName("group" + j);
      for (var k = 0, length = radios.length; k < length; k++) {
        if (radios[k].checked) {
          var checkedButton = radios[k].value;
          if (checkedButton == this.questionsArray[j].correct) {
            count = count + 1;
          }
        }
      }
    }
    if (count >= 7) {
      debugger;
      alert("Passed the test...");
      alert("To check result press Ok");
      localStorage.setItem('result', count.toString());
      this.route.navigateByUrl("/result");
    } else {
      alert("You are failed");
      localStorage.setItem('result', count.toString());
      this.route.navigateByUrl("/result");
    }
    // window.location.hash = "#!quiz";
  }
}