(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\nimg {\r\n    height: 150px;\r\n    margin-left: 50px;\r\n}\r\n\r\nnav {\r\n    margin-right: 300px;\r\n}\r\n\r\na {\r\n    font-family: 'Fira Sans', sans-serif;\r\n    color: #48b238;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    padding: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNDhiMjM4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <img src=\"../assets/logo.png\">\n  <nav>\n    <a routerLink=\"/quiz\" routerLinkActive=\"active\">Quiz</a>\n    <a routerLink=\"/scores\" routerLinkActive=\"active\">Scores</a>\n  </nav>\n</section>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'trivia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scores/scores.component */ "./src/app/scores/scores.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz.service */ "./src/app/quiz.service.ts");











var appRoutes = [
    { path: "", redirectTo: "/quiz", pathMatch: "full" },
    { path: "quiz", component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"] },
    { path: "results", component: _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"] },
    { path: "scores", component: _scores_scores_component__WEBPACK_IMPORTED_MODULE_8__["ScoresComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"],
                _scores_scores_component__WEBPACK_IMPORTED_MODULE_8__["ScoresComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_quiz_service__WEBPACK_IMPORTED_MODULE_10__["QuizService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quiz.service.ts":
/*!*********************************!*\
  !*** ./src/app/quiz.service.ts ***!
  \*********************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuizService = /** @class */ (function () {
    function QuizService(http, router) {
        this.http = http;
        this.router = router;
        this.score = 0;
    }
    QuizService.prototype.getQuestions = function () {
        return this.http.get("/api/questions", { responseType: "json" });
    };
    QuizService.prototype.getScores = function () {
        return this.http.get("/api/scores", { responseType: "json" });
    };
    QuizService.prototype.addScores = function (newScore) {
        return this.http.post("/api/scores", newScore, { responseType: "json" });
    };
    QuizService.prototype.calculateScore = function (form, questions) {
        var userAnswers = Object.values(form.value);
        for (var i = 1; i < userAnswers.length; i++) {
            if (userAnswers[i] === questions[i - 1].answer) {
                this.score++;
            }
        }
        this.router.navigate(['/results']);
        this.addScores({ username: form.value.username, scores: this.score }).subscribe(function (response) {
            questions = response;
        });
        console.log(this.score);
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nsection {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 50%;\r\n    width: 50%;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\nbutton {\r\n    background-color: #f8d004;\r\n    box-shadow: 4px gray;\r\n    font-family: 'Fira Sans', sans-serif;\r\n    color: #48b238;\r\n    font-weight: bold;\r\n}\r\n\r\n.playBtn {\r\n    height: 150px;\r\n    width: 250px;\r\n    font-size: 35px;\r\n    color: #48b238;\r\n    -webkit-animation: pulsate 1.5s;\r\n    -webkit-animation-iteration-count: infinite; \r\n    opacity: 0.0;\r\n}\r\n\r\n@-webkit-keyframes pulsate {\r\n    0% {-webkit-transform: scale(1); opacity: 1;}\r\n    100% {-webkit-transform: scale(1.1); opacity: 1;}\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(255, 255, 255, .5);\r\n    width: 70%;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    margin-top: 50px;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    padding: 20px;\r\n    font-family: 'Fira Sans', sans-serif;\r\n}\r\n\r\nform, .questions, .playBtn {\r\n    border-radius: 15px;\r\n}\r\n\r\n.questionBox {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.questions {\r\n    width: 48%;\r\n    margin: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    background-color: #48b238;\r\n    color: white;\r\n    font-weight: bold;\r\n    height: 55px;\r\n    width: 385px;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\n.choices {\r\n    width: 380px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.submitBtn, .inputBox {\r\n    width: 300px;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    border-radius: 10px;\r\n}\r\n\r\naudio {\r\n    position: fixed;\r\n    bottom: 10px;\r\n    left: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsMkNBQTJDO0lBQzNDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxJQUFJLDJCQUEyQixFQUFFLFVBQVUsQ0FBQztJQUM1QyxNQUFNLDZCQUE2QixFQUFFLFVBQVUsQ0FBQztBQUNwRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQwMDQ7XHJcbiAgICBib3gtc2hhZG93OiA0cHggZ3JheTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNDhiMjM4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wbGF5QnRuIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogIzQ4YjIzODtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIDEuNXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcclxuICAgIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNhdGUge1xyXG4gICAgMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTt9XHJcbiAgICAxMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTsgb3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmZvcm0sIC5xdWVzdGlvbnMsIC5wbGF5QnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbkJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnF1ZXN0aW9ucyB7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhiMjM4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogMzg1cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hvaWNlcyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5zdWJtaXRCdG4sIC5pbnB1dEJveCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5hdWRpbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"!questionsOpen\">\n  <button class=\"playBtn\" (click)=\"toggleQuestions()\">PLAY</button>\n</section>\n\n<form *ngIf=\"questionsOpen\" #quizForm=\"ngForm\" (ngSubmit)=\"submitAnswers(quizForm)\">\n  <div>\n    <input class=\"inputBox\" type=\"text\" name=\"username\" placeholder=\"Enter a Username\" ngModel>\n  </div>\n\n  <div class=\"questionBox\">\n    <div class=\"questions\" *ngFor=\"let question of questions; index as i\">\n      <p>Q{{ i+1 }}: {{ question.question_name }}</p>\n\n      <div class=\"choices\">\n        <div class=\"choice\">\n          <input type=\"radio\" name=\"q{{ i+1 }}\" value=\"{{ question.choice_1 }}\" ngModel>\n          <label for=\"\">{{ question.choice_1 }}</label>\n        </div>\n        <div class=\"choice\">\n          <input type=\"radio\" name=\"q{{ i+1 }}\" value=\"{{ question.choice_2 }}\" ngModel>\n          <label for=\"\">{{ question.choice_2 }}</label>\n        </div>\n        <div class=\"choice\">\n          <input type=\"radio\" name=\"q{{ i+1 }}\" value=\"{{ question.choice_3 }}\" ngModel>\n          <label for=\"\">{{ question.choice_3 }}</label>\n        </div>\n        <div class=\"choice\">\n          <input type=\"radio\" name=\"q{{ i+1 }}\" value=\"{{ question.choice_4 }}\" ngModel>\n          <label for=\"\">{{ question.choice_4 }}</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button class=\"submitBtn\">Submit</button>\n</form>\n\n<audio src=\"../../assets/Parks and Recreation (1).mp3\" controls></audio>\n"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService) {
        this.quizService = quizService;
        this.questionsOpen = false;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuestions().subscribe(function (response) {
            _this.questions = response;
        });
    };
    QuizComponent.prototype.submitAnswers = function (form) {
        this.quizService.calculateScore(form, this.questions);
    };
    QuizComponent.prototype.toggleQuestions = function () {
        this.questionsOpen = !this.questionsOpen;
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div, p, h1 {\r\n    font-family: 'Fira Sans', sans-serif;\r\n}\r\n\r\nsection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    border-radius: 15px;\r\n    margin-top: 50px;\r\n    padding: 20px;\r\n}\r\n\r\n.userScore {\r\n    z-index: 3;\r\n    width: 35%;\r\n    height: 45%;\r\n    background-color: rgba(0, 0, 0, .9);\r\n}\r\n\r\n.userScore p {\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    margin: 10px;\r\n}\r\n\r\n.correctAnswers {\r\n    width: 70%;\r\n    background-color: rgba(255, 255, 255, .5);\r\n    z-index: 1;\r\n}\r\n\r\n.answerBox {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.answer {\r\n    width: 48%;\r\n    margin: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    background-color: #48b238;\r\n    color: white;\r\n    font-weight: bold;\r\n    height: 55px;\r\n    width: 385px;\r\n}\r\n\r\n.answerBox, .answer {\r\n    border-radius: 15px;\r\n}\r\n\r\nh1 {\r\n    font-size: 26px;\r\n    font-weight: bolder;\r\n    color: #48b238;\r\n}\r\n\r\np, h1 {\r\n    margin: 0;\r\n}\r\n\r\n.userScore {\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton {\r\n    background-color: #f8d004;\r\n    box-shadow: 4px gray;\r\n    font-family: 'Fira Sans', sans-serif;\r\n    color: #48b238;\r\n    font-weight: bold;\r\n    width: 300px;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.star {\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    top:50%;\r\n    left:50%;\r\n    -webkit-transform: translate3d(-50%,-50%,0);\r\n            transform: translate3d(-50%,-50%,0);\r\n    -webkit-animation: move1 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n            animation: move1 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 13'%3E%3Cpath fill='%23D7282C' fill-rule='evenodd' d='M9.46403162,16.8826984 C6.22529644,12.8065873 5.01660079,12.4894444 0.206324111,14.4540476 C0.0513833992,14.5172222 -0.0687747036,14.310873 0.0616600791,14.2062698 C4.12173913,10.9550794 4.43715415,9.74119048 2.48063241,4.9115873 C2.4173913,4.75611111 2.6229249,4.6352381 2.72727273,4.76642857 C5.96600791,8.84261905 7.17470356,9.1597619 11.9849802,7.19515873 C12.1399209,7.13190476 12.2608696,7.33825397 12.1296443,7.44285714 C8.06956522,10.694127 7.7541502,11.9080159 9.71067194,16.737619 C9.77391304,16.8930159 9.56837945,17.0138889 9.46403162,16.8826984' transform='translate%28.498 -4.429%29'/%3E%3C/svg%3E\");\r\n    background-size: 25px 25px !important;\r\n}\r\n\r\n.star:nth-child(2) {\r\n      -webkit-animation: move2 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n              animation: move2 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n    }\r\n\r\n.star:nth-child(3) {\r\n      -webkit-animation: move3 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) .1s infinite;\r\n              animation: move3 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) .1s infinite;\r\n    }\r\n\r\n.star:nth-child(4) {\r\n      -webkit-animation: move4 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n              animation: move4 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n    }\r\n\r\n.star:nth-child(5) {\r\n      -webkit-animation: move5 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n              animation: move5 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n    }\r\n\r\n.star:nth-child(6) {\r\n      -webkit-animation: move6 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n              animation: move6 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 0s infinite;\r\n    }\r\n\r\n.star:nth-child(7) {\r\n      -webkit-animation: move7 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n              animation: move7 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n    }\r\n\r\n.star:nth-child(8) {\r\n      -webkit-animation: move8 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n              animation: move8 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n    }\r\n\r\n.star:nth-child(9) {\r\n      -webkit-animation: move9 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n              animation: move9 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n    }\r\n\r\n.star:nth-child(10) {\r\n      -webkit-animation: move10 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n              animation: move10 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 1s infinite;\r\n    }\r\n\r\n.star:nth-child(11) {\r\n      -webkit-animation: move11 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 2s infinite;\r\n              animation: move11 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 2s infinite;\r\n    }\r\n\r\n.star:nth-child(12) {\r\n      -webkit-animation: move12 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 2s infinite;\r\n              animation: move12 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 2s infinite;\r\n    }\r\n\r\n.star:nth-child(13) {\r\n      -webkit-animation: move13 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 2s infinite;\r\n              animation: move13 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 2s infinite;\r\n    }\r\n\r\n.star:nth-child(14) {\r\n      -webkit-animation: move14 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n              animation: move14 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n    }\r\n\r\n.star:nth-child(15) {\r\n      -webkit-animation: move15 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n              animation: move15 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n    }\r\n\r\n.star:nth-child(16) {\r\n      -webkit-animation: move16 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n              animation: move16 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n    }\r\n\r\n.star:nth-child(17) {\r\n      -webkit-animation: move17 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n              animation: move17 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n    }\r\n\r\n.star:nth-child(18) {\r\n      -webkit-animation: move18 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n              animation: move18 4s cubic-bezier(0.12, 0.71, 0.24, 0.96) 3s infinite;\r\n    }\r\n\r\n@-webkit-keyframes move1 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    50% {\r\n      -webkit-filter: hue-rotate(-50deg);\r\n              filter: hue-rotate(-50deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(100px,-80px,0) rotate(180deg);\r\n              transform: translate3d(100px,-80px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move1 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    50% {\r\n      -webkit-filter: hue-rotate(-50deg);\r\n              filter: hue-rotate(-50deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(100px,-80px,0) rotate(180deg);\r\n              transform: translate3d(100px,-80px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move2 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(-30deg);\r\n              filter: hue-rotate(-30deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(20px,-100px,0) rotate(180deg);\r\n              transform: translate3d(20px,-100px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move2 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(-30deg);\r\n              filter: hue-rotate(-30deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(20px,-100px,0) rotate(180deg);\r\n              transform: translate3d(20px,-100px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move3 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(20deg);\r\n              filter: hue-rotate(20deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-20px,-120px,0) rotate(180deg) scale(.25);\r\n              transform: translate3d(-20px,-120px,0) rotate(180deg) scale(.25);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes move3 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(20deg);\r\n              filter: hue-rotate(20deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-20px,-120px,0) rotate(180deg) scale(.25);\r\n              transform: translate3d(-20px,-120px,0) rotate(180deg) scale(.25);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move4 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(30deg);\r\n              filter: hue-rotate(30deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-80px,-60px,0) rotate(180deg);\r\n              transform: translate3d(-80px,-60px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move4 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(30deg);\r\n              filter: hue-rotate(30deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-80px,-60px,0) rotate(180deg);\r\n              transform: translate3d(-80px,-60px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move5 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(2px,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(2px,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(80deg);\r\n              filter: hue-rotate(80deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-100px,-20px,0) rotate(180deg) scale(1.5);\r\n              transform: translate3d(-100px,-20px,0) rotate(180deg) scale(1.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes move5 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(2px,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(2px,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(80deg);\r\n              filter: hue-rotate(80deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-100px,-20px,0) rotate(180deg) scale(1.5);\r\n              transform: translate3d(-100px,-20px,0) rotate(180deg) scale(1.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move6 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(10deg);\r\n              filter: hue-rotate(10deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(60px,60px,0) rotate(180deg);\r\n              transform: translate3d(60px,60px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move6 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(10deg);\r\n              filter: hue-rotate(10deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(60px,60px,0) rotate(180deg);\r\n              transform: translate3d(60px,60px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move7 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(-20deg);\r\n              filter: hue-rotate(-20deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-10px,60px,0) rotate(180deg) scale(.5);\r\n              transform: translate3d(-10px,60px,0) rotate(180deg) scale(.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes move7 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      -webkit-filter: hue-rotate(-20deg);\r\n              filter: hue-rotate(-20deg);\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-10px,60px,0) rotate(180deg) scale(.5);\r\n              transform: translate3d(-10px,60px,0) rotate(180deg) scale(.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move8 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-80px,50px,0) rotate(180deg);\r\n              transform: translate3d(-80px,50px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move8 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-80px,50px,0) rotate(180deg);\r\n              transform: translate3d(-80px,50px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move9 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(120px,-30px,0) rotate(180deg) scale(.5);\r\n              transform: translate3d(120px,-30px,0) rotate(180deg) scale(.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes move9 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(120px,-30px,0) rotate(180deg) scale(.5);\r\n              transform: translate3d(120px,-30px,0) rotate(180deg) scale(.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move10 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(110px,-50px,0) rotate(180deg) scale(.5);\r\n              transform: translate3d(110px,-50px,0) rotate(180deg) scale(.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes move10 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(110px,-50px,0) rotate(180deg) scale(.5);\r\n              transform: translate3d(110px,-50px,0) rotate(180deg) scale(.5);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n              transform: translate3d(0,0,0) rotate(0deg) scale(1);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move11 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(110px,-80px,0) rotate(180deg);\r\n              transform: translate3d(110px,-80px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move11 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(110px,-80px,0) rotate(180deg);\r\n              transform: translate3d(110px,-80px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move12 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(180px,-90px,0) rotate(180deg);\r\n              transform: translate3d(180px,-90px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move12 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(180px,-90px,0) rotate(180deg);\r\n              transform: translate3d(180px,-90px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move13 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(60px,90px,0) rotate(180deg);\r\n              transform: translate3d(60px,90px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move13 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(60px,90px,0) rotate(180deg);\r\n              transform: translate3d(60px,90px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move14 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(120px,100px,0) rotate(180deg);\r\n              transform: translate3d(120px,100px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move14 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(120px,100px,0) rotate(180deg);\r\n              transform: translate3d(120px,100px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move15 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-120px,110px,0) rotate(180deg);\r\n              transform: translate3d(-120px,110px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move15 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-120px,110px,0) rotate(180deg);\r\n              transform: translate3d(-120px,110px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move16 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-20px,20px,0) rotate(180deg);\r\n              transform: translate3d(-20px,20px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move16 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(-20px,20px,0) rotate(180deg);\r\n              transform: translate3d(-20px,20px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move17 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(50px,60px,0) rotate(180deg);\r\n              transform: translate3d(50px,60px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move17 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(50px,60px,0) rotate(180deg);\r\n              transform: translate3d(50px,60px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes move18 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(90px,90px,0) rotate(180deg);\r\n              transform: translate3d(90px,90px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n@keyframes move18 {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n    60% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(90px,90px,0) rotate(180deg);\r\n              transform: translate3d(90px,90px,0) rotate(180deg);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0,0,0) rotate(0deg);\r\n              transform: translate3d(0,0,0) rotate(0deg);\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1Isd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZ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Q0E7TUFDRSxVQUFVO01BQ1YsMERBQWtEO2NBQWxELGtEQUFrRDtJQUNwRDtJQUNBO01BQ0UsVUFBVTtNQUNWLGtEQUEwQztjQUExQywwQ0FBMEM7SUFDNUM7RUFDRjs7QUFiQTtJQUNFO01BQ0UsVUFBVTtNQUNWLGtEQUEwQztjQUExQywwQ0FBMEM7SUFDNUM7SUFDQTtNQUNFLFVBQVU7TUFDViwwREFBa0Q7Y0FBbEQsa0RBQWtEO0lBQ3BEO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysa0RBQTBDO2NBQTFDLDBDQUEwQztJQUM1QztFQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsIHAsIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi51c2VyU2NvcmUge1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xyXG59XHJcblxyXG4udXNlclNjb3JlIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jb3JyZWN0QW5zd2VycyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYW5zd2VyQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFuc3dlciB7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhiMjM4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogMzg1cHg7XHJcbn1cclxuXHJcbi5hbnN3ZXJCb3gsIC5hbnN3ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjNDhiMjM4O1xyXG59XHJcblxyXG5wLCBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi51c2VyU2NvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkMDA0O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IGdyYXk7XHJcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzQ4YjIzODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zdGFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7XHJcbiAgICBhbmltYXRpb246IG1vdmUxIDRzIGN1YmljLWJlemllcigwLjEyLCAwLjcxLCAwLjI0LCAwLjk2KSAwcyBpbmZpbml0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTMgMTMnJTNFJTNDcGF0aCBmaWxsPSclMjNENzI4MkMnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTkuNDY0MDMxNjIsMTYuODgyNjk4NCBDNi4yMjUyOTY0NCwxMi44MDY1ODczIDUuMDE2NjAwNzksMTIuNDg5NDQ0NCAwLjIwNjMyNDExMSwxNC40NTQwNDc2IEMwLjA1MTM4MzM5OTIsMTQuNTE3MjIyMiAtMC4wNjg3NzQ3MDM2LDE0LjMxMDg3MyAwLjA2MTY2MDA3OTEsMTQuMjA2MjY5OCBDNC4xMjE3MzkxMywxMC45NTUwNzk0IDQuNDM3MTU0MTUsOS43NDExOTA0OCAyLjQ4MDYzMjQxLDQuOTExNTg3MyBDMi40MTczOTEzLDQuNzU2MTExMTEgMi42MjI5MjQ5LDQuNjM1MjM4MSAyLjcyNzI3MjczLDQuNzY2NDI4NTcgQzUuOTY2MDA3OTEsOC44NDI2MTkwNSA3LjE3NDcwMzU2LDkuMTU5NzYxOSAxMS45ODQ5ODAyLDcuMTk1MTU4NzMgQzEyLjEzOTkyMDksNy4xMzE5MDQ3NiAxMi4yNjA4Njk2LDcuMzM4MjUzOTcgMTIuMTI5NjQ0Myw3LjQ0Mjg1NzE0IEM4LjA2OTU2NTIyLDEwLjY5NDEyNyA3Ljc1NDE1MDIsMTEuOTA4MDE1OSA5LjcxMDY3MTk0LDE2LjczNzYxOSBDOS43NzM5MTMwNCwxNi44OTMwMTU5IDkuNTY4Mzc5NDUsMTcuMDEzODg4OSA5LjQ2NDAzMTYyLDE2Ljg4MjY5ODQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlJTI4LjQ5OCAtNC40MjklMjknLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHggMjVweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgICAuc3RhcjpudGgtY2hpbGQoMikge1xyXG4gICAgICBhbmltYXRpb246IG1vdmUyIDRzIGN1YmljLWJlemllcigwLjEyLCAwLjcxLCAwLjI0LCAwLjk2KSAwcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5zdGFyOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZTMgNHMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzEsIDAuMjQsIDAuOTYpIC4xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5zdGFyOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZTQgNHMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzEsIDAuMjQsIDAuOTYpIDBzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLnN0YXI6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgYW5pbWF0aW9uOiBtb3ZlNSA0cyBjdWJpYy1iZXppZXIoMC4xMiwgMC43MSwgMC4yNCwgMC45NikgMHMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAuc3RhcjpudGgtY2hpbGQoNikge1xyXG4gICAgICBhbmltYXRpb246IG1vdmU2IDRzIGN1YmljLWJlemllcigwLjEyLCAwLjcxLCAwLjI0LCAwLjk2KSAwcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5zdGFyOm50aC1jaGlsZCg3KSB7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZTcgNHMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzEsIDAuMjQsIDAuOTYpIDFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLnN0YXI6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgYW5pbWF0aW9uOiBtb3ZlOCA0cyBjdWJpYy1iZXppZXIoMC4xMiwgMC43MSwgMC4yNCwgMC45NikgMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAuc3RhcjpudGgtY2hpbGQoOSkge1xyXG4gICAgICBhbmltYXRpb246IG1vdmU5IDRzIGN1YmljLWJlemllcigwLjEyLCAwLjcxLCAwLjI0LCAwLjk2KSAxcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5zdGFyOm50aC1jaGlsZCgxMCkge1xyXG4gICAgICBhbmltYXRpb246IG1vdmUxMCA0cyBjdWJpYy1iZXppZXIoMC4xMiwgMC43MSwgMC4yNCwgMC45NikgMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAuc3RhcjpudGgtY2hpbGQoMTEpIHtcclxuICAgICAgYW5pbWF0aW9uOiBtb3ZlMTEgNHMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzEsIDAuMjQsIDAuOTYpIDJzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLnN0YXI6bnRoLWNoaWxkKDEyKSB7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZTEyIDRzIGN1YmljLWJlemllcigwLjEyLCAwLjcxLCAwLjI0LCAwLjk2KSAycyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5zdGFyOm50aC1jaGlsZCgxMykge1xyXG4gICAgICBhbmltYXRpb246IG1vdmUxMyA0cyBjdWJpYy1iZXppZXIoMC4xMiwgMC43MSwgMC4yNCwgMC45NikgMnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAuc3RhcjpudGgtY2hpbGQoMTQpIHtcclxuICAgICAgYW5pbWF0aW9uOiBtb3ZlMTQgNHMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzEsIDAuMjQsIDAuOTYpIDNzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLnN0YXI6bnRoLWNoaWxkKDE1KSB7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZTE1IDRzIGN1YmljLWJlemllcigwLjEyLCAwLjcxLCAwLjI0LCAwLjk2KSAzcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5zdGFyOm50aC1jaGlsZCgxNikge1xyXG4gICAgICBhbmltYXRpb246IG1vdmUxNiA0cyBjdWJpYy1iZXppZXIoMC4xMiwgMC43MSwgMC4yNCwgMC45NikgM3MgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAuc3RhcjpudGgtY2hpbGQoMTcpIHtcclxuICAgICAgYW5pbWF0aW9uOiBtb3ZlMTcgNHMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzEsIDAuMjQsIDAuOTYpIDNzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLnN0YXI6bnRoLWNoaWxkKDE4KSB7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZTE4IDRzIGN1YmljLWJlemllcigwLjEyLCAwLjcxLCAwLjI0LCAwLjk2KSAzcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICBcclxuXHJcbiAgQGtleWZyYW1lcyBtb3ZlMSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgtNTBkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LC04MHB4LDApIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBtb3ZlMiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgtMzBkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsLTEwMHB4LDApIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBtb3ZlMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgyMGRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsLTEyMHB4LDApIHJvdGF0ZSgxODBkZWcpIHNjYWxlKC4yNSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmU0IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDMwZGVnKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwtNjBweCwwKSByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbW92ZTUge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwwLDApIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSg4MGRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LC0yMHB4LDApIHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEuNSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmU2IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDEwZGVnKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MHB4LDYwcHgsMCkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmU3IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgZmlsdGVyOiBodWUtcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsNjBweCwwKSByb3RhdGUoMTgwZGVnKSBzY2FsZSguNSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmU4IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCw1MHB4LDApIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBtb3ZlOSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTIwcHgsLTMwcHgsMCkgcm90YXRlKDE4MGRlZykgc2NhbGUoLjUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBtb3ZlMTAge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZykgc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDExMHB4LC01MHB4LDApIHJvdGF0ZSgxODBkZWcpIHNjYWxlKC41KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZykgc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbW92ZTExIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMTBweCwtODBweCwwKSByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbW92ZTEyIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxODBweCwtOTBweCwwKSByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbW92ZTEzIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2MHB4LDkwcHgsMCkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmUxNCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTIwcHgsMTAwcHgsMCkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmUxNSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEyMHB4LDExMHB4LDApIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBtb3ZlMTYge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LDIwcHgsMCkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmUxNyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTBweCw2MHB4LDApIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBtb3ZlMTgge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDkwcHgsOTBweCwwKSByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"!isShowing\" class=\"userScore\">\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n    <div class=\"star\"></div>\n  <h1>CONGRATULATIONS!</h1>\n  <p>You got {{ score }} out of 10 correct!</p>\n  <button (click)=\"toggleShow()\">See Correct Answers</button>\n</section>\n\n <section class=\"correctAnswers\"> \n  <h1>CORRECT ANSWERS</h1>\n  <div class=\"answerBox\">\n    <div *ngFor=\"let question of questions; index as i\">\n      <div class=\"answer\">\n        <p>Q{{ i+1 }}: {{ question.question_name }}</p>\n        <p>Answer: {{ question.answer }}</p>\n      </div>\n    </div>\n  </div>\n  <button [routerLink]=\"['/scores']\">See Top Scores</button>\n</section> \n\n<!-- not showing same questions as ones asked -->"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(quizService) {
        this.quizService = quizService;
        this.isShowing = false;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuestions().subscribe(function (response) {
            _this.questions = response;
        });
        this.score = this.quizService.score;
        // this.questions = this.quizService.questions;
    };
    ResultsComponent.prototype.toggleShow = function () {
        this.isShowing = !this.isShowing;
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/scores/scores.component.css":
/*!*********************************************!*\
  !*** ./src/app/scores/scores.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div, p, h1 {\r\n    font-family: 'Fira Sans', sans-serif;\r\n}\r\n\r\nsection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    border-radius: 15px;\r\n    margin-top: 50px;\r\n    padding: 20px;\r\n    z-index: 3;\r\n}\r\n\r\n.topScores {\r\n    z-index: 1;\r\n    width: 70%;\r\n    background-color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.userScore p {\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    margin: 10px;\r\n}\r\n\r\n.userScore {\r\n    z-index: 3;\r\n    width: 35%;\r\n    height: 45%;\r\n    background-color: rgba(0, 0, 0, .9);\r\n}\r\n\r\n.scoreBox {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.score {\r\n    width: 48%;\r\n    margin: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    align-content: center;\r\n    text-align: center;\r\n    background-color: #48b238;\r\n    color: white;\r\n    font-weight: bold;\r\n    height: 55px;\r\n    width: 385px;\r\n}\r\n\r\n.scoreBox, .score {\r\n    border-radius: 15px;\r\n}\r\n\r\nh1 {\r\n    font-size: 26px;\r\n    font-weight: bolder;\r\n    color: #48b238;\r\n}\r\n\r\np, h1 {\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    background-color: #f8d004;\r\n    box-shadow: 4px gray;\r\n    font-family: 'Fira Sans', sans-serif;\r\n    color: #48b238;\r\n    font-weight: bold;\r\n    width: 300px;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n    border-radius: 10px;\r\n}\r\n\r\nspan {\r\n    font-size: 20px;\r\n    font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmVzL3Njb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Njb3Jlcy9zY29yZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiwgcCwgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi50b3BTY29yZXMge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxufVxyXG5cclxuLnVzZXJTY29yZSBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4udXNlclNjb3JlIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcclxufVxyXG5cclxuLnNjb3JlQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNjb3JlIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OGIyMzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHdpZHRoOiAzODVweDtcclxufVxyXG5cclxuLnNjb3JlQm94LCAuc2NvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjNDhiMjM4O1xyXG59XHJcblxyXG5wLCBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkMDA0O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IGdyYXk7XHJcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzQ4YjIzODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/scores/scores.component.html":
/*!**********************************************!*\
  !*** ./src/app/scores/scores.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"!isShowing\" class=\"userScore\">\n    <h1>YOUR SCORE</h1>\n    <p>{{score}} / 10</p>\n    <button (click)=\"toggleShow()\">OK</button>\n  </section>\n  \n<section class=\"topScores\">\n  <h1>\"You are literally the best\" <span> - Chris Traeger</span></h1>\n  <div class=\"scoreBox\">\n    <div *ngFor=\"let score of scores; index as i\">\n      <div class=\"score\">\n        <p>Username: {{ score.username }}</p>\n        <p>Score: {{ score.scores }} / 10</p>\n      </div>\n    </div>\n  </div>\n  <button [routerLink]=\"['/quiz']\">Play Again</button>\n</section>"

/***/ }),

/***/ "./src/app/scores/scores.component.ts":
/*!********************************************!*\
  !*** ./src/app/scores/scores.component.ts ***!
  \********************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var ScoresComponent = /** @class */ (function () {
    function ScoresComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.isShowing = false;
        this.quizService.getScores().subscribe(function (response) {
            _this.scores = response;
        });
    }
    ScoresComponent.prototype.ngOnInit = function () {
        this.score = this.quizService.score;
        this.username = this.quizService.username;
    };
    ScoresComponent.prototype.toggleShow = function () {
        this.isShowing = !this.isShowing;
    };
    ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scores',
            template: __webpack_require__(/*! ./scores.component.html */ "./src/app/scores/scores.component.html"),
            styles: [__webpack_require__(/*! ./scores.component.css */ "./src/app/scores/scores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], ScoresComponent);
    return ScoresComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Amanda\documents\grand_circus\projects\trivia\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map