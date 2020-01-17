import QuestionsService from "../Services/QuestionsService.js";
import store from "../store.js";


//Private
function _draw() {
  let question = store.State.activeQuestion;
  document.getElementById("question").innerHTML = question.Template
}

function _drawAnswer() {
  let answer = store.State.activeQuestion
  document.getElementById("question").innerHTML = answer.AnswerTemplate
}

function _drawScore() {
  let score = store.State.score
  document.getElementById("score").innerHTML = score.toString()
}

//Public
export default class QuestionsController {
  constructor() {
    store.subscribe("activeQuestion", _draw);
    store.subscribe("score", _drawScore)
    QuestionsService.getQuestions()
  }

  showAnswer() {
    _drawAnswer()
  }

  correct() {
    QuestionsService.correct()
    _drawScore()
    QuestionsService.getActiveQuestion()
  }

  wrong() {
    QuestionsService.wrong()
    _drawScore()
    QuestionsService.getActiveQuestion()
  }

  skipQuestion() {
    QuestionsService.getQuestions()
  }
}
