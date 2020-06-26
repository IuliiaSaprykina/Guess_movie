const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionsUrl = "http://localhost:3000/questions/";
const imgContainer = document.querySelector(".movie-img");
const choiceA = document.querySelector(".btn-a");
const choiceB = document.querySelector(".btn-b");
const choiceC = document.querySelector(".btn-c");
const choiceD = document.querySelector(".btn-d");
const progress = document.querySelector(".progress");
let runningQuestion = 0;

startButton.addEventListener('click', handleClick)


function handleClick(){
    getQuestions();
    startGame();
}

function getQuestions() {
    return fetch(questionsUrl, {
        headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
        }
    })
        .then(parseJSON)
        .then(questions => displayQuestion(questions["questions"]))
}

function parseJSON(response) {
    return response.json();
}

function displayQuestion(questions) {
    let j, x, i;
    for (i = questions.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = questions[i];
        questions[i] = questions[j];
        questions[j] = x;
    }
    const lastQuestion = questions.length - 1;
    renderQuestion(questions, lastQuestion, runningQuestion);
    renderProgress(questions, lastQuestion, runningQuestion);
    // return questions
    // console.log(lastQuestion)
}

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    renderProgress();
}

function renderQuestion(questions, lastQuestion, runningQuestion){
    let q = questions[runningQuestion];
    const qImg = document.createElement("img");

    qImg.src = q.shot_src;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;

    choiceA.addEventListener("click", (event, q) => checkAnswer(event, q))

    choiceB.addEventListener("click", (event, q) => checkAnswer(event, q))

    choiceC.addEventListener("click", (event, q) => checkAnswer(event, q))

    choiceD.addEventListener("click", (event, q) => checkAnswer(event, q))

    imgContainer.append(qImg)
}

function checkAnswer(event, q, runningQuestion){
    console.log(event)
    console.log(q)
    console.log(runningQuestion)
    // if (event.target.textContent === q.correct) {
    //     runningQuestion++;
    //     renderQuestion(runningQuestion)
    //     // console.log(runningQuestion)
    // } else {
    //     console.log("Ku-ku")
    // }
}

function renderProgress(questions, lastQuestion, runningQuestion){
    // fetch()
    for(qIndex = 0; qIndex <= lastQuestion; qIndex++){
        // progress.innerHTML += 1;
    }
}

// function checkAnswer(event){
//     console.log("ku-ku")
// }

function selectAnswer(){

}

