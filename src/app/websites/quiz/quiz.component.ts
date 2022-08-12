import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const colorGreen: string = "#59CE8F";
const  colorRed: string = "#FF1E00";
const  colorGrey: string = "#E8F9FD";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quiz = new FormGroup({
    answer: new FormControl("", [Validators.required]),
  });
  
  unanswered = true
  quiz_ends = false;
  number_of_questions = 2;

  question_text: string = "";
  right_answer: string = "";
  question_index: number = 0;
  answeredCorrect: number = 0; 

  questions_data: any = [];
  questions_list: string[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("../../../assets/quiz/questions.json").subscribe(data => {
      this.questions_data = data;
      this.startQuiz()
    })
  }

  startQuiz() {
    this.questions_list = []
    this.answeredCorrect = 0
    this.question_index = 0
    this.unanswered = true
    this.quiz_ends = false
    this.chooseQuestions()
    this.setNextQuestion()
    this.quiz.reset()
  }

  chooseQuestions() {
    var index_list: number[] = []
    var num = 0
    while (true) {
      num = Math.floor(Math.random() * this.questions_data.length)
      if (index_list.includes(num)) continue
      else index_list.push(num)
      
      if (index_list.length >= this.number_of_questions) break
    }

    for (var i = 0; i < index_list.length; i++) {
      this.questions_list.push(this.questions_data[index_list[i]])
    }
  }

  setNextQuestion() {
    this.question_text = this.questions_list[this.question_index][0]
    this.right_answer = this.questions_list[this.question_index][1]
  }

  onSubmit() {
    this.unanswered = false
    var user_answer = this.quiz.get('answer')?.value
    if (user_answer == null || user_answer == undefined) user_answer = ""
    else user_answer.toLowerCase()
    var element = document.getElementById("card")
    if (element != null) {
      if (user_answer  == this.right_answer.toLowerCase()) {
        this.answeredCorrect++
        element.style.backgroundColor = colorGreen
      } else {
        element.style.backgroundColor = colorRed
      }
    } 
      
    this.quiz.reset()
  }

  onNext() {
    var element = document.getElementById("card")
    if (element != null) element.style.backgroundColor = colorGrey
    
    this.question_index++
    if (this.question_index < this.questions_list.length) {
      this.unanswered = true
      this.setNextQuestion()
    } else {
      this.quiz_ends = true
      this.endQuiz()
    }
  }

  endQuiz() {
    this.question_text = "Well done! You have " + this.answeredCorrect + " from " + this.number_of_questions +" correct! Following is a list of the right answers: "
    for (var i = 0; i < this.questions_list.length; i++) {
      this.question_text += (i + 1) +". " +this.questions_list[i][1] +", "
    }
  }
}

