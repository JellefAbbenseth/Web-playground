import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})
export class ToDoItemsComponent implements OnInit {
  toDoText: string = "Essen";
  toDoItemsForm = new FormGroup({
    done: new FormControl(false),

  });

  constructor() { }

  ngOnInit(): void {
  }

  onX() {
    console.log("Delete toDo")
  }

}
