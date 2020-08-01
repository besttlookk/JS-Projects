const imgsElement = document.querySelector('.imgs');
const currentElement = document.querySelector('.current');
currentElement.classList.remove('fade')

const imgs = imgsElement.children
// console.log(imgs)

imgsElement.addEventListener('click', (e)=>{
    [...imgs].forEach(img=> img.classList.remove('active'))
    e.target.classList.add('active')

    console.log(e.target)

    const src = e.target.attributes['src'].value;
    currentElement.setAttribute('src', src)
    currentElement.classList.add('fade');

    // after  1 sec remove fade class
    setTimeout(()=>{
        currentElement.classList.remove('fade')
    }, 1000)
})