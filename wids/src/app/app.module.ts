import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionComponent } from './questions-list/question/question.component';
import { AnswerComponent } from './questions-list/question/answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsListComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
