// DOM elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const upperCaseEl = document.getElementById('uppercase')
const lowerCaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// object of function
//is object ke keys ko jaan ker generatePassword function ke parameter ke equal rakah gaya hai
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//event
generateEl.addEventListener('click',() => {
    // const length = parseInt(lengthEl.value, 10)  // converted from string to number
    const length = +lengthEl.value // easier method to conver in number from string
    const hasLower =lowerCaseEl.checked  // true /false
    const hasUpper = upperCaseEl.checked 
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

// clipboard event
/*process:
    1. Create a <textarea> element to be appended to the document. set its value that we want to copy to the clipboard. 
    2. Append said <textarea> element to the current HTML document. 
    3. use 'HTMLInputelement.select()'  to select the content of the <textarea> element. 
    4. Use 'Document.execCommand('copy')' to copy the content of the <textarea> to the clipboard
    5. Remove the <textarea> element from the document. 
*/

clipboardEl.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText;

    if(!password){
        return;
    }
    textarea.value = password;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy')
    textarea.remove();
    alert('Password Copied to clipboard')
})

// generate password function
function generatePassword(lower, upper, number, symbol, length){
    // 1. init pw var
    // 2. Filter out unchecked types
    // 3. loop over length call generator function for each type
    // 4. add final pw to the pw var and return

    let generatedPassword = ''

    const typesCount = lower + upper +  number + symbol // true = 1, false = 0
    // console.log(typesCount) 

    // -----just to check--------
    // // const typesArr = [lower , upper, number, symbol] 
    // const typesArr = [{lower} , {upper}, {number}, {symbol}] // array se object ban gaya....with key as index value
    // console.log(typesArr)
    // console.log(Object.keys(typesArr))  // keys are index value
    // console.log(Object.values(typesArr))  // values are: lower: true/false
    // ----checking ends here---

    const typesArr = [{lower} , {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);  //Object.values return array of values
    // console.log(typesArr)

    if(typesCount === 0){
        return '';
    }else{
        for(let i = 0; i < length; i += typesCount){  // typesCount se is liye increment ker rahe kyuki ek loop me utna random char generate ho ja raha
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];  // ye dega single item array...value access kerne ke liye index ka use ker rahe hai
                // console.log(funcName)

                generatedPassword += randomFunc[funcName]();
            })
        }
    }

    console.log(generatedPassword)
    console.log(generatedPassword.slice(0, length))

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword


}





//Generator functions
//ASCII for lower case : 97 to 122
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
