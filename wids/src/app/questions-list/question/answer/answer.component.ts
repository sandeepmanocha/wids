import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../../models/answer-model'

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  

  // For getting the data from outside
  @Input("compAnswer") answer: Answer;

  constructor() { }

  ngOnInit() {
  }

}
