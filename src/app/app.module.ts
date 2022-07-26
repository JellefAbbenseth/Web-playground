import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderConstructionComponent } from './websites/under-construction/under-construction.component';
import { ToDoComponent } from './websites/to-do/to-do.component';
import { ToDoItemsComponent } from './websites/to-do/to-do-items/to-do-items.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    ToDoComponent,
    ToDoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
