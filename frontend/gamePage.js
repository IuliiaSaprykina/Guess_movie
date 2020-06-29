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
const answerButtons = document.getElementById("answer-buttons")
const championList = document.querySelector('.score-container ul')
let runningQuestion = 0;
let score = 0;
// console.log(championList)

startButton.addEventListener('click', handleClick)


function handleClick(){
    getQuestions();
    startGame();
}

getScoreInfo()

function getScoreInfo () {
    return fetch(usersUrl)
    .then(parseJSON)
    .then(users => displayUsersInfo(users["user"]))
}

function displayUsersInfo(users){
    
    console.log(users)
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
    
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i); // no +1 here!
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
    
    const lastQuestion = questions.length - 1;
    renderQuestion(questions, lastQuestion, runningQuestion);
}

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}

function renderQuestion(questions, lastQuestion, runningQuestion){
    let q = questions[runningQuestion];
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

    answerButtons.addEventListener("click", (event) => checkAnswer(event, q, questions,lastQuestion, runningQuestion))


    imgContainer.append(qImg)
}

function checkAnswer(event, q, questions,lastQuestion, runningQuestion){
    if (event.target.textContent === q.correct) {
        renderProgress()
        runningQuestion++;
        renderQuestion(questions, lastQuestion, runningQuestion);
    } else {
        // startButton.classList.remove('hide');
        // questionContainerElement
        // questionContainerElement.classList.add('hide');
        // startButton.classList.remove('hide');
        console.log("Wrong")
    }
}

function renderProgress(questions, lastQuestion, runningQuestion){
    score ++
    progress.textContent = "Your score is " + score

    const id = localStorage.user_id
    console.log(id)
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
    .then(result => {
        console.log(result)
    })
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





