const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionsUrl = "http://localhost:3000/questions/";
const usersUrl = "http://localhost:3000/users/";
const imgContainer = document.querySelector(".movie-img");
const choiceA = document.querySelector(".btn-a");
const choiceB = document.querySelector(".btn-b");
const choiceC = document.querySelector(".btn-c");
const choiceD = document.querySelector(".btn-d");
const progress = document.querySelector(".progress");
const qImg = document.createElement("img");
let runningQuestion = 0;

startButton.addEventListener('click', handleClick)


function handleClick(){
    getQuestions();
    startGame();
}

fetch(usersUrl)
    .then(parseJSON)
    .then(users => displayUsersInfo(users["user"]))

function displayUsersInfo(users){
    const userScore = document.createElement('p')

    const currentUser = users.filter(user => {
        console.log(user["id"])
        console.log(localStorage.user_id)
        user["id"] === localStorage.user_id
    })
    console.log(currentUser)
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
    
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i); // no +1 here!
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
    console.log(questions)
    // let j, x, i;
    // for (i = questions.length - 1; i > 0; i--) {
    //     j = Math.floor(Math.random() * (i + 1));
    //     x = questions[i];
    //     questions[i] = questions[j];
    //     questions[j] = x;
    // }
    // console.log(questions)
    const lastQuestion = questions.length - 1;
    renderQuestion(questions, lastQuestion, runningQuestion);
    renderProgress(questions, lastQuestion, runningQuestion);
}

function startGame() {
    startButton.classList.add('hide');
    renderProgress();
    questionContainerElement.classList.remove('hide');
}

function renderQuestion(questions, lastQuestion, runningQuestion){
    let q = questions[runningQuestion];
    // const qImg = document.createElement("img");
    console.log(runningQuestion)
    qImg.removeAttribute('src');
    choiceA.textContent = "";
    choiceB.textContent = "";
    choiceC.textContent = "";
    choiceD.textContent = "";


    qImg.src = q.shot_src;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;

    choiceA.addEventListener("click", (event) => checkAnswer(event, q, questions,lastQuestion, runningQuestion))

    choiceB.addEventListener("click", (event) => checkAnswer(event, q, questions,lastQuestion, runningQuestion))

    choiceC.addEventListener("click", (event) => checkAnswer(event, q, questions,lastQuestion, runningQuestion))

    choiceD.addEventListener("click", (event) => checkAnswer(event, q, questions,lastQuestion, runningQuestion))

    imgContainer.append(qImg)
}

function checkAnswer(event, q, questions,lastQuestion, runningQuestion){
    if (event.target.textContent === q.correct) {
        console.log(event.target.textContent )
    // } else {
        // document.querySelector('.movie-img').removeAttribute('src')
        // console.log(document.querySelector('.movie-img'))
        runningQuestion++;
        renderQuestion(questions, lastQuestion, runningQuestion)
    }
}

function renderProgress(questions, lastQuestion, runningQuestion){
    for(qIndex = 0; qIndex <= lastQuestion; qIndex++){
        // progress.innerHTML += 1;
    }
}




