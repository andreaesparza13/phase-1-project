// Global Variables
const catUrl = 'https://api.thecatapi.com/v1/images/search'
const answerChoice = document.querySelectorAll('.answer-choice')
const question = document.getElementsByClassName("question")
let urlObject = {}

function displayCat() {
    fetch(catUrl)
    .then(res => res.json())
    .then(cat => urlObject = cat[0].url)
}

const handleMouse = () => {
    answerChoice.forEach(choice => {
        choice.addEventListener('mouseenter', (e) => {
            e.target.style.fontWeight = 'bolder'
        })
        choice.addEventListener('mouseleave', (e) => {
            e.target.style.fontWeight = '500'
        })
    }) 
}

function handleClick() {
    answerChoice.forEach(choice => {
        choice.addEventListener('click', e => {
            if (e.target.style.backgroundColor != 'lime') {
                e.target.style.backgroundColor = 'lime'
            } else  {
                e.target.style.backgroundColor = 'white'
            }
        })
    })
}

const btn = document.querySelector('#submit-form')
btn.innerHTML = 'Submit'

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildAnswer(e.target.name.value)
    form.reset()
})

function buildAnswer(answer) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    let catPic = document.querySelector('img')
    catPic.src = urlObject
    btn.addEventListener('click', handleDelete)
    p.textContent = "Congratulations,  " + `${answer}` + ", you are a cat person!"
    btn.textContent = 'Start Over'
    document.querySelector('#answer').append(p)
    document.querySelector('#answer').append(btn)
    
}

function handleDelete() {
    location.reload()
}

// Function Invocations
handleMouse()
handleClick()
displayCat()