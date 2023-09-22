import convertToPiglatin from './main'

let input = '';
const textInput = document.getElementById('textInput')
const button =  document.getElementById('button')
const reset = document.getElementById('reset')
const textOutput = document.getElementById('textOutput')
const pigButton = document.getElementById('pigButton')

console.log()




textInput.addEventListener('click', (event) => {
   input =  event.target.value
   console.log(input) 
})

button.addEventListener('click', (e) => {
    let word = input.split(' ')
    let pigword = word.map(word => convertToPiglatin(word)).join(' *oink*')
    textOutput.innerText = pigword
})

reset.addEventListener('click', (e) => {
    textInput.value = '';
    textOutput.innerText= '';
    input = '';
    console.log('click')
})

pigButton.addEventListener('mosedown')