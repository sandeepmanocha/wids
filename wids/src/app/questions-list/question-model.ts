import { Answer } from './answer-model'

export class Question{
    public qid: string;
    public question: string;
    public askedby: string;
    public askedondatetime: string;
    public answers: Answer[];

    constructor(qid: string, question: string, answers: Answer[]){
        this.qid = qid;
        this.question = question;
        this.answers = answers;
    }
}