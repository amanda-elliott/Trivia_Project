import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores: any;
  username: any;
  score: number;
  isShowing: boolean = false;


  constructor(private quizService: QuizService) { 
    this.quizService.getScores().subscribe(response => {
      this.scores = response;
    });
  }

  ngOnInit() {
    this.score = this.quizService.score;
    this.username = this.quizService.username;
  }

  toggleShow() {
    this.isShowing = !this.isShowing;
  }


}
