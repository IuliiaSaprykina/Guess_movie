const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionsUrl = "http://localhost:3000/questions/"

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    console.log(questions())
    // setNextQuestion()
}

function nextQuestion(){

}

function selectAnswer(){

}

function questions () {
    fetch(questionsUrl, {
        headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
        }
    })
    .then(response => response.json())
    .then(result => {
        const allQuestions = result.questions
        console.log(allQuestions)
        let j, x, i;
        for (i = allQuestions.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = allQuestions[i];
            allQuestions[i] = allQuestions[j];
            allQuestions[j] = x;
        }
    return allQuestions
    })
    
}

