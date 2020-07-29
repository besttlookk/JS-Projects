const searchElement = document.getElementById('search');
const resultContainer = document.querySelector('.result')
searchElement.addEventListener('input', searchStates, true);

function fetchData(){
    return fetch('data.json')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log('Something went wrong'))
}

async function searchStates(e){
    
    statesArray = await fetchData()
    var nameArray = []
    searchValue = e.target.value.toUpperCase();
    if(searchValue){
        filterArray = statesArray.filter(state =>{
            return state.name.toUpperCase().includes(searchValue) || state.abbr.toUpperCase().includes(searchValue)
        })
        while(resultContainer.firstElementChild){
            resultContainer.firstElementChild.remove()
        }
        console.log(filterArray)
        filterArray.forEach(item=>{
            
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card mt-2';
    
            const H5 = document.createElement('h5')
            H5.className = "card-header bg-warning";
            H5.innerText = `${item.name}(${item.abbr})`
            cardDiv.appendChild(H5)

            const H6 = document.createElement('h6')
            H6.className = "text-danger p-2";
            H6.innerText = `${item.capital}`
            cardDiv.appendChild(H6)

            
    
            resultContainer.appendChild(cardDiv)
    
    
     })
    }
    else {
        while(resultContainer.firstElementChild){
            resultContainer.firstElementChild.remove()
        }
    }
    
}

