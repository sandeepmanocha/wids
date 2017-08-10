import { Component, OnInit } from '@angular/core';
import { Question } from './question-model'

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  questions: Question[] = [
    new Question("1","Why I created WIDS?"),
    new Question("2","Why I deployed in AWS?"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
