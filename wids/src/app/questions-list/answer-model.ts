export class Answer{
    ansid: string;
    answer: string;
    givenby: string
    givenondatetime: string;

    
    constructor(ansid: string, answer: string){
        this.ansid = ansid;
        this.answer = answer;
    }
}