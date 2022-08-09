import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  colorGreen: string = "#59CE8F";
  colorRed: string = "#FF1E00";
  colorGrey: string = "#E8F9FD"
  quiz = new FormGroup({
    answer: new FormControl("", [Validators.required]),
  });
  text: string = "In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?";


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    var element = document.getElementById("card")
    if (element != null) element.style.backgroundColor = this.colorGreen
    console.log(this.quiz.get('answer')?.value)
    this.quiz.reset()
    setTimeout(function () {
      console.log("waited")
    }, 2000)
  }

}
