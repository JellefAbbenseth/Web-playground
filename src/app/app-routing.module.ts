import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './websites/to-do/to-do.component';
import { UnderConstructionComponent } from './websites/under-construction/under-construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/construction', pathMatch:  'full' },
  { path: 'construction', component: UnderConstructionComponent },
  { path: 'todo', component: ToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
