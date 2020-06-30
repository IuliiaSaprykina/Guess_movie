

const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionsUrl = "http://localhost:3000/questions/";
const usersUrl = "http://localhost:3000/users/";
const imgContainer = document.querySelector(".movie-img");
const choiceA = document.querySelector(".btn-a");
const choiceB = document.querySelector(".btn-b");
const choiceC = document.querySelector(".btn-c");
const choiceD = document.querySelector(".btn-d");
const progress = document.querySelector("#progress");
const qImg = document.createElement("img");
const answerButtons = document.getElementById("answer-buttons");
const championList = document.querySelector('.score-container ul');
// const timer = document.getElementById("timer");
let counterTimer = document.getElementById("counter")
let runningQuestionT = 0;
let score = 0;
let q = "";
let questionsT = [];
let lastQuestionT = "";
let counter = 0;
let timeleft = 120;
// console.log(championList)

function convertSeconds(s) {
    let min = Math.round(s / 60);
    let sec = s % 60;
    return min + ":" + sec;
}

function timer() {
    counterTimer.textContent = (convertSeconds(timeleft - counter));

    function timeIt() {
        counter ++;
        counterTimer.innerText = (convertSeconds(timeleft - counter))
    }

    setInterval(timeIt, 1000)
}

startButton.addEventListener('click', handleClick)


function handleClick(){
    getQuestions();
    startGame();
    timer();
}

getScoreInfo()

function getScoreInfo () {
    return fetch(usersUrl)
    .then(parseJSON)
    .then(users => displayUsersInfo(users["user"]))
}

function displayUsersInfo(users){
    
    // console.log(users)
    users.sort((a, b) => {
        return b.score - a.score
    })
    users.map(user => {
        const usersScore = document.createElement('li')
        usersScore.textContent = user.username + ": " + user.score
        
        championList.appendChild(usersScore)
    })

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
    questionsT =questions
    
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i); // no +1 here!
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
    
    const lastQuestion = questions.length - 1;
    renderQuestion(questions, lastQuestionT, runningQuestionT);
}

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}

function renderQuestion(questions, lastQuestion, runningQuestion){
    lastQuestionT = lastQuestion;
    runningQuestionT = runningQuestion;
    questionsT = questions;
    q = questions[runningQuestion];
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

    
    // choiceA.addEventListener("click", (event) => checkAnswer(event, q, questions,lastQuestion, runningQuestion))
    
    imgContainer.append(qImg)
}
    answerButtons.addEventListener("click", (event) => {
        checkAnswer(event, q, questionsT,lastQuestionT, runningQuestionT)
    })

function checkAnswer(event, q, questions,lastQuestion, runningQuestion){
    console.log(event.target.textContent === q.correct)
    if (event.target.textContent === q.correct) {
        console.log("This event is firing:", event)
        renderProgress()
        runningQuestion++;
        renderQuestion(questions, lastQuestion, runningQuestion);
    } else {
        answerIsWrong()
    }
}

function answerIsWrong() {
    startButton.classList.remove('hide');
        // questionContainerElement
        questionContainerElement.classList.add('hide');
        // startButton.classList.remove('hide');
        location.reload();
        console.log("Wrong")
}

function renderProgress(questions, lastQuestion, runningQuestion){
    score ++
    progress.textContent = "Your score is " + score

    const id = localStorage.user_id
    // console.log(id)
    const newScore = {
        score: score
    }
    fetch(usersUrl + id, {
        method: "PATCH",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(newScore)
    })
    .then(response => response.json())
    // .then(result => {
    //     console.log(result)
    // })
    // fetch(usersUrl + localStorage.user_id, {
    //     method: "PATCH",
    //     headers: {
    //         "Contrnt-type": "application/json"
    //     },
    //     body: JSON.stringify({ newScore })
    // })
    //  .then(response => response.json())
    //  .then(result => console.log(result))


//     getScoreInfo().then(data => {
//             // console.log(data)
//             progress.textContent = "Your score is " + data
//             data ++;
//         })
}





