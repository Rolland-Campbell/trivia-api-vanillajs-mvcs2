export default class Question {
    constructor(data) {
        this.question = data.question
        this.answer = data.answer
        this.category = data.category.title
        this.value = data.value
    }

    get Template() {
        return `
        <div class="col-10 offset-1 card">
            <div class="row worthText">
                $${this.value}
            </div>
            <div class="row categoryText">
                Category: ${this.category}
            </div>
            <div class="row questionText">
            Question: ${this.question}
            </div>
            <div class="row">
            <button class="btn btn-warning nextButton" onclick="app.questionsController.showAnswer()"><i class="fas fa-angle-double-right"></i></button>
            <button class="btn btn-danger" onclick="app.questionsController.skipQuestion()">Skip</button>
            </div>
        </div>
        `
    }

    get AnswerTemplate() {
        return `
        <div class="col-10 offset-1 card">
            <div class="row spacingTop"></div>
            <div class="row answerText">
                ${this.answer}
            </div>
            <div class="row spacing2"></div>
            <div class="row choiceText">
                 Did you guess correct?
            </div>
            <div class="row">
               <button class="btn btn-success ml-4 answerButton" onclick="app.questionsController.correct()">Yes</button><button class="btn btn-danger ml-4 answerButton" onclick="app.questionsController.wrong()">No</button>
             </div>
        </div>
        `
    }
}