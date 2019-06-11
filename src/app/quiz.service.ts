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

  addScores(newScore) {
    return this.http.post("/api/scores", newScore, { responseType: "json" });
  }

  calculateScore(form, questions) {
    let userAnswers = Object.values(form.value);
    for (let i = 1; i < userAnswers.length; i++) {
      if (userAnswers[i] === questions[i - 1].answer) {
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

