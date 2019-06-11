import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  questions: any;
  score: number;
  isShowing: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
    });

    this.score = this.quizService.score;

    // this.questions = this.quizService.questions;
  }

  toggleShow() {
    this.isShowing = !this.isShowing;
  }
 
}
