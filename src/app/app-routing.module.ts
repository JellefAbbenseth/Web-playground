import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './websites/quiz/quiz/quiz.component';
import { ToDoComponent } from './websites/to-do/to-do.component';
import { UnderConstructionComponent } from './websites/under-construction/under-construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/construction', pathMatch:  'full' },
  { path: 'construction', component: UnderConstructionComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '/construction', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
