import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface toDo {
  id: number,
  text: string,
  done: boolean,
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  addToDo = new FormGroup({
    task: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });
  nextId = 0

  done_list: toDo[] = []

  list: toDo[] = []

  ngOnInit(): void {
    if (this.list.length > 0){
      this.nextId = this.list[this.list.length - 1].id + 1
    }
  }

  onSubmit() {
    if (this.addToDo.value.task != null) {
      this.list.push({id: this.nextId, text: this.addToDo.value.task, done: false})
      this.nextId += 1
    }
    this.addToDo.reset()
  }

  set_done(id: number) {
    for (var index = 0; index < this.list.length; index++){
      if (this.list[index].id == id) {
        this.list[index].done = true
        this.done_list.push(this.list[index])
        this.list.splice(index, 1)
        break
      }
    }
  }

  set_undone(id: number) {
    for (var index = 0; index < this.done_list.length; index++){
      if (this.done_list[index].id == id) {
        this.done_list[index].done = false
        this.list.push(this.done_list[index])
        this.done_list.splice(index, 1)
        break
      }
    }
  }

  onX(id: number) {
    var deleted = false
    for (var index = 0; index < this.list.length; index++){
      if (this.list[index].id == id) {
        this.list.splice(index, 1)
        deleted = true
        break
      }
    }

    if (!deleted) {
      for (var index = 0; index < this.done_list.length; index++){
        if (this.done_list[index].id == id) {
          this.done_list.splice(index, 1)
          deleted = true
          break
        }
      }
    }
  }
}
