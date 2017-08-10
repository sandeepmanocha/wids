import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionlistComponent } from './questionlist/src/app/questionlist/questionlist/questionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
