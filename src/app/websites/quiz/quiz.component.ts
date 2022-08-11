import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';

const colorGreen: string = "#59CE8F";
const  colorRed: string = "#FF1E00";
const  colorGrey: string = "#E8F9FD";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  unanswered = true
  quiz = new FormGroup({
    answer: new FormControl("", [Validators.required]),
  });
  text: string = "In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?";
  right_answer = "Pineapple";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.unanswered = false
    var user_answer = this.quiz.get('answer')?.value
    if (user_answer == null || user_answer == undefined) user_answer = ""
    else user_answer.toLowerCase()
    var element = document.getElementById("card")
    if (element != null) {
      if (user_answer  == this.right_answer.toLowerCase()) {
        element.style.backgroundColor = colorGreen
      } else {
        element.style.backgroundColor = colorRed
      }
    } 
      

    this.quiz.reset()
  }

  onNext() {
    this.unanswered = true
    var element = document.getElementById("card")
    if (element != null) element.style.backgroundColor = colorGrey
  }

}

