let i = 0;
let images = [];
let time =  3000;
//img list
images[0] = './img/img1.jpg' ;
images[1] = './img/img2.jpg' ;
images[2] = './img/img3.jpg' ;
images[3] = './img/img4.jpg' ;


function changeImage(){
    
    //since we have named our img we can get that with the value of name attribute
    document.slide.src = images[i];

    if(i < images.length -1){
        i++
    }
    else{
        i = 0;
    }

    setTimeout(changeImage, time)
}

window.onload = changeImage;