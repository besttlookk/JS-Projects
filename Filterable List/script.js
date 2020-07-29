const inputElement = document.getElementById('input');
const liElements = document.querySelectorAll('li');


inputElement.addEventListener('input', ()=>{
    const inputValue = inputElement.value.toUpperCase()
    console.log(inputValue)
    liElements.forEach(li => {
        const a = li.firstChild
        // if search is found
        if(a.innerText.toUpperCase().indexOf(inputValue)> -1){
            li.style.display = 'block'
        }
        else{
            li.style.display = 'none'
        }
    })
})