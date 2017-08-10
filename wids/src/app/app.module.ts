import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionlistComponent } from './questionlist/src/app/questionlist/questionlist/questionlist.component';
import { QuestionsListComponent } from './src/app/questions-list/questions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
