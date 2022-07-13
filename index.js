// Global Variables
const catUrl = 'https://api.thecatapi.com/v1/images/search'
const answerChoice = document.querySelectorAll('.answer-choice')
const question = document.getElementsByClassName("question")

function displayCat() {
    fetch(catUrl)
    .then(res => res.json())
    .then(cat => console.log(cat))
}



const handleMouse = () => {
    answerChoice.forEach(choice => {
        choice.addEventListener('mouseenter', (e) => {
            e.target.style.fontSize = '30px'
        })
        choice.addEventListener('mouseleave', (e) => {
            e.target.style.fontSize = '20px'
        })
    }) 
}


function handleClick() {
    let i = 0
    answerChoice.forEach(choice => {
        choice.addEventListener('click', e => {
            if (i % 2 == 0) {
                e.target.style.backgroundColor = "lime"
            } else {
                e.target.style.backgroundColor = "white"
            }
            i++

        })
    });
}


function handleSubmit(){
    const form = document.querySelector("#name-box")
    const btn = document.querySelector('#submit-form')
    btn.textContent = 'Submit'
    form.addEventListener('submit', e => {
        // e.preventDefault()
        const userInput = e.target.name.value
        alert (`Congratulations, ${userInput}, you are a cat person!`)
        form.reset()
    })
}

// Function Invocations
handleMouse()
handleClick()
handleSubmit()
