import { Injectable, Input, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  score: number = 0;
  username: string;
  questions: any;
 
  constructor(private http: HttpClient, private router: Router) { }

  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json" });
  }

  getScores() {
    return this.http.get("/api/scores", { responseType: "json" });
  }

  setQuestions(questionList) {
    this.questions = questionList;
    console.log(this.questions);
  }

  addScores(newScore) {
    return this.http.post("/api/scores", newScore, { responseType: "json" });
  }

  calculateScore(form, questions) {
    let userAnswers = Object.values(form.value);
    userAnswers.splice(0, 1);
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === questions[i].answer) {
        this.score++;
      } 
    }
    this.router.navigate(['/results']);
    this.addScores({ username: form.value.username, scores: this.score }).subscribe(response => {
      questions = response;
    }); 
    console.log(this.score);
  }

}

