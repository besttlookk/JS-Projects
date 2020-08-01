// Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.4,
    panasonic: 3.6,
    phillips: 4.1
  }


// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);
// window.onload = getRatings()

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product
let product;

  // Product select change
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

    // Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;
  
    // Make sure 5 or under
    if (rating > 5) {
        alert('Please rate 1 - 5');
        return;
    }
  
    // Change rating
    ratings[product] = rating;
  
    getRatings();
});


function getRatings(){
    // looping object: for-in
    for(let rating in ratings){
        // console.log(rating) // this gives the keys ..but we want value..so we will pass key as th index of the objects
        // console.log(ratings[rating])

        //get percentage value
        const starPercentage = ratings[rating]  / starsTotal * 100;
        console.log(starPercentage)
        
        // round to the nearest ten
        starPercentageRounded = `${Math.round(starPercentage /10) * 10}%`
        console.log(starPercentageRounded)

        //set widhth of start-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded

         // Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];

    }
}