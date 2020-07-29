const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');

quoteInputElement.addEventListener('input', () => {
    // console.log('chnaged')
    const arrayQuote = quoteDisplayElement.querySelectorAll('span'); // array of span
    // console.log(arrayQuote)
    const arrayValue = quoteInputElement.value.split('');

    let correct = true;  // when we write everything correct..we want to go to next quote
    // console.log(arrayValue);
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]; // getting input characrter of same index
        if(character == null) {
            characterSpan.classList.remove('incorrect');
            characterSpan.classList.remove('correct');
            correct = false 
        }
        else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }
        else{
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
            correct = false;
        }
    })

    if (correct) renderNextQuote()
})

//  fetch API
function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
    .then(res => res.json())
    .then(data => data.content)

}

// console.log(getRandomQuote())

async function renderNextQuote(){
    const quote = await getRandomQuote();
    quoteDisplayElement.innerText = '';
    // console.log(quote.split('')) // by default it split each character
    quote.split('').forEach(character => {
        const spanElement = document.createElement('span');
        spanElement.innerText = character;
        // console.log(spanElement)
        quoteDisplayElement.appendChild(spanElement);
    })
    quoteInputElement.value = null;
    startTimer()
}

let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}


function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
  }
renderNextQuote()
