
document.addEventListener("DOMContentLoaded", () =>{

const questionsUrl = "http://localhost:3000/questions";

fetch(questionsUrl, {
    headers: 'Access-Control-Allow-Origin'
})
    // .then(parseJSON)
    .then(console.log)

function parseJSON(response){
    return response.json();
}
})