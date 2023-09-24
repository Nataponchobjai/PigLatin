
function pigLatin(word) {
    word = word.trim().toLowerCase();
    const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char);
  
    if (isVowel(word[0])) {
        return word + "yay";
    }
  
    for (let i = 0; i < word.length; i++) {
        if (isVowel(word[i])) {
            return word.slice(i) + word.slice(0, i) + "ay";
        }
    }
    return word + "ay";
  }


let input = '';

const textInput = document.getElementById('textInput');
const button = document.getElementById('button');
const reset = document.getElementById('reset');
const textOutput = document.getElementById('textOutput');
const pigButton = document.getElementById('pigButton');

console.log()

textInput.addEventListener('keyup', (event) => {
    input = event.target.value
    console.log(input)
});

button.addEventListener('click', (e) => {
    let words = input.split(' ');
    let pigWords = words.map(word => pigLatin(word)).join('*oink*');
    textOutput.innerText = pigWords;
});

reset.addEventListener('click', resetFunction);
pigButton.addEventListener('mousedown', pigButtonMouseDown);
pigButton.addEventListener('mouseup', pigButtonMouseUp);

function resetFunction() {
         textInput.value = '';
         textOutput.innerText = '';
     }
    
     function pigButtonMouseDown() {
         pigButton.classList.remove('pig-button');
         pigButton.classList.add('pig-button2');
         translateToPigLatin();
     }
    
     function pigButtonMouseUp() {
        pigButton.classList.remove('pig-button2');
        pigButton.classList.add('pig-button');
     }

     function translateToPigLatin() {
        let words = input.split(' ');
        let pigWords = words.map(word => pigLatin(word)).join(' *oink*');
        textOutput.innerText = pigWords;
    }

