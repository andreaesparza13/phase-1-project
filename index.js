// Global Variables
const catUrl = 'https://api.thecatapi.com/v1/images/search'
const answerChoice = document.getElementsByClassName("answer-choice")
const question = document.getElementsByClassName("question")

fetch(catUrl)
.then(res => res.json())
.then(cat => console.log(cat))



const handleMouse = () => {
    
}


function handleClick(e) {
    Array.prototype.forEach.call(answerChoice, function(el) {
        console.log(el.tagName);
    });
}
handleClick()



let form = document.querySelector('form')

