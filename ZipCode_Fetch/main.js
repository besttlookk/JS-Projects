const form = document.getElementById('form')
form.addEventListener('submit', getInfo, true)

function getInfo(e){
    e.preventDefault()
    const zipInput = e.target.firstElementChild.value
        if(zipInput.length !== 6){
            const div = document.createElement('div');
                            div.className = 'alert alert-danger  mx-auto mt-3 text-dark';
                            div.innerText = 'Enter a Valid Zipcode';
                            const container = document.querySelector('.container');
                            container.insertAdjacentElement('afterbegin', div)
                            setInterval(()=> document.querySelector('.alert').style.display = 'none',2000)
        }
        else{
            fetch(`http://api.zippopotam.us/IN/${zipInput}`)
            .then(res => {
                        if(res.status !== 200){
                            const div = document.createElement('div');
                            div.className = 'alert alert-danger  mx-auto mt-3 text-dark';
                            div.innerText = 'Zipcode Not Found! Please try again';
                            const container = document.querySelector('.container');
                            container.insertAdjacentElement('afterbegin', div)
                            setInterval(()=> document.querySelector('.alert').style.display = 'none',2000)
                            throw Error(res.statusText)
                        }
                        else{
                            return res.json()
                        }
            })
               
            .then(data => {
                place = data.places[0]
               
                document.querySelector('.card').style.display = 'block';
                document.getElementById('city').innerText = place['place name'].split(' ')[0];
                document.getElementById('state').innerText = place.state
                document.getElementById('long').innerText = place.longitude;
                document.getElementById('lat').innerText = place.latitude
            })
            .catch(err => console.log(err))
        }



}

