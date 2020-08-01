const modalOpenButtons = document.querySelectorAll('[data-modal-target]')
const overlayElement = document.getElementById('overlay')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
// console.log(modalOpenButton[0])
// console.log(modalOpenButton[0].dataset)
// console.log(modalOpenButton[0].dataset.modalTarget)
// const id = modalOpenButton[0].dataset.modalTarget;
// console.log(document.querySelector(id))

// console.log(closeModalButton)

modalOpenButtons.forEach(button=>{

    button.addEventListener('click', () =>{
        // find what modal this button represent
        const modal = document.querySelector(button.dataset.modalTarget)
        // console.log(modal)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',() =>{
        console.log('clicked')
        // cant use dataset here bcoz we dont have acess to button
        const modal = button.closest('.modal')
        // console.log(modal)
        closeModal(modal)

    })
})


overlayElement.addEventListener('click', ()=>{
    // console.log('clicked')
    const modal = document.querySelector('.modal.active');
    closeModal(modal)
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active');
    overlayElement.classList.add('active')

}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active');
    overlayElement.classList.remove('active')

}