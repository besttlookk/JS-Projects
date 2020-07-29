// // using AJAX
// document.getElementById('form').addEventListener('submit', fetchFacts, true)

// function fetchFacts(e){
//     e.preventDefault()
//     number = e.target.firstElementChild.firstElementChild.value
//     console.log(number)

//     if(number){
//           // create xhr object
//     const xhr = new XMLHttpRequest;

//     xhr.open('GET',`http://numbersapi.com/${number}/math`, true);

//     xhr.onload = () => {
//         if(xhr.status === 200){
//             const target = document.getElementById('number-box')
//             target.style.display = 'block';
//             target.firstElementChild.innerHTML = xhr.response;

//         }
//         else{
//             console.log('Something went wrong')
//         }
//     }

//     xhr.send()
//     }
//     else{
//         const target = document.getElementById('number-box')
        
//         const div = document.createElement('div');
//         div.className = 'alert alert-danger col-md-7 mx-auto mt-2'
//         div.innerHTML = 'Please Enter a number!'
//         const container = document.querySelector('.container')
//         const numberBox = document.getElementById('number-box')
//         container.insertBefore(div, numberBox)
//         target.style.display = 'none';
//         setTimeout(()=> document.querySelector('.alert').style.display = 'none', 2000)
//     }

// }



// ===========================fetch API================================
// response is in text
document.getElementById('form').addEventListener('submit', fetchFacts, true)

function fetchFacts(e){
    e.preventDefault()
    var number = e.target.firstElementChild.firstElementChild.value

    if(number){
        fetch(`http://numbersapi.com/${number}/math`)
        .then((res)=>res.text())
        .then(data => {
            const target = document.getElementById('number-box')
            target.style.display = 'block';
            target.firstElementChild.nextElementSibling.innerHTML = data;
        })
        .catch(err => console.log(err))
    }
    else{
        const target = document.getElementById('number-box')
        
        const div = document.createElement('div');
        div.className = 'alert alert-danger col-md-7 mx-auto mt-2'
        div.innerHTML = 'Please Enter a number!'
        const container = document.querySelector('.container')
        const numberBox = document.getElementById('number-box')
        container.insertBefore(div, numberBox)
        target.style.display = 'none';
        setTimeout(()=> document.querySelector('.alert').style.display = 'none', 2000)
    }
}