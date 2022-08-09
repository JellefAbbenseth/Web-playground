import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderConstructionComponent } from './websites/under-construction/under-construction.component';
import { ToDoComponent } from './websites/to-do/to-do.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './websites/quiz/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    ToDoComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
