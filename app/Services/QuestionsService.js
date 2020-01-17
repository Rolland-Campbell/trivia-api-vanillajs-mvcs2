import store from "../store.js";
import Question from "../Models/Question.js"


// @ts-ignore
let _triviaApi = axios.create({
  baseURL: "//jservice.io/api/clues"
})


class QuestionsService {
  getQuestions() {
    _triviaApi.get()
      .then(res => {
        let questions = res.data.map(q => new Question(q))
        store.commit("questions", questions)
        this.getActiveQuestion()
      })
  }

  getActiveQuestion() {
    let activeQuestion = store.State.questions[Math.floor(Math.random() * store.State.questions.length)]
    if (activeQuestion.value == null) {
      this.getActiveQuestion()
    } else {
      store.commit("activeQuestion", activeQuestion)
      store.State.questions.splice(activeQuestion, 1)
    }
  }

  correct() {
    let points = store.State.activeQuestion.value
    store.State.score += points
  }

  wrong() {
    let points = store.State.activeQuestion.value
    store.State.score -= points
  }
}





const service = new QuestionsService();
export default service;
