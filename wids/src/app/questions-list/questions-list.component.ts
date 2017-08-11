import { Component, OnInit } from '@angular/core';
import { Question } from './question-model'
import { Answer } from './answer-model'

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {


  questions: Question[] = [
    new Question("1","Why I created WIDS?", 
    [ new Answer("1", "I wanted to learn Website Development"),
      new Answer("2", "I was prepraring for interview")
        ]),
    new Question("2","Why I deployed in AWS?",
    [ new Answer("3", "I wanted to learn AWS "),
      new Answer("4", "AWS is Awesome!!!")
        ]
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
