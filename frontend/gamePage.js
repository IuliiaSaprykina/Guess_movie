const questionsUrl = "http://localhost:3000/questions/";
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("movie-img");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");

fetch(questionsUrl, {
    method: "GET", 
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})
    .then(response => response.json())
    .then(result => shuffleQuestions(result.questions))
    // .then(console.log)

    

function shuffleQuestions(questions) {
    let j, x, i;
    for (i = questions.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = questions[i];
        questions[i] = questions[j];
        questions[j] = x;
    }
    return questions
}

// console.log(shuffleQuestions())

// let questions = shuffleQuestions();

// function startGame(questions) {
//     let lastQuestionIndex = questions.length - 1;
//     let runningQuestionIndex = 0;
//     renderQuestion(lastQuestionIndex, runningQuestionIndex, questions)
//     progressRender(lastQuestionIndex, runningQuestionIndex, questions)
// } 

// function renderQuestion(lastQuestionIndex, runningQuestionIndex, questions){
//     let q = questions[runningQuestionIndex];
//     qImg.src = q.shot_src;
//     choiceA.textContent = q.choiceA;
//     choiceB.textContent = q.choiceB;
//     choiceC.textContent = q.choiceC;
//     choiceD.textContent = q.choiceD;
 
// }

// startGame(questions)

// function startGame(questions) {
//     let lastQuestionIndex = questions.length - 1;
//     let runningQuestionIndex = 0;
//     renderQuestion(lastQuestionIndex, runningQuestionIndex, questions)
//     progressRender(lastQuestionIndex, runningQuestionIndex, questions)
// }

// function renderQuestion(lastQuestionIndex, runningQuestionIndex, questions){
//     let q = questions[runningQuestionIndex];
//     qImg.src = q.shot_src;
//     choiceA.textContent = q.choiceA;
//     choiceB.textContent = q.choiceB;
//     choiceC.textContent = q.choiceC;
//     choiceD.textContent = q.choiceD;
         
// }



