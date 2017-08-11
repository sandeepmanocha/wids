import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question-model'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // for getting data from outside
  @Input("compQuestion") question: Question;

  constructor() { }

  ngOnInit() {
  }

}
