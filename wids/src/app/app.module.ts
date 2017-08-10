import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionComponent } from './questions-list/question/question.component';
import { AnswersListComponent } from './questions-list/question/answers-list/answers-list.component';
import { AnswerComponent } from './questions-list/question/answers-list/answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    QuestionComponent,
    AnswersListComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
