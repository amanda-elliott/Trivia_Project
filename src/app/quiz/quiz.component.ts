import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any;
  questionsOpen: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
    });
  }

  submitAnswers(form) {
    this.quizService.calculateScore(form, this.questions);
  }

  toggleQuestions() {
    this.questionsOpen = !this.questionsOpen;
  }


}