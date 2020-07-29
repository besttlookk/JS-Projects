//Book Class: Represents a class
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    //display book
    static displayBooks(){
      
        const books = Store.getBook()
        // loop through the books and add each book to UI one by one
        books.forEach(book => UI.addBookToList(book));
    }

    // add a book to UI
    static addBookToList(book){
        const row = document.createElement('tr');
        
        row.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><i class='fas fa-times-circle text-danger delete'></i></td>`

        const tbody = document.getElementById('book-list')
        tbody.appendChild(row)
    }

    // delete book from UI
    static deleteBook(node){
        if(node.classList.contains('delete')){
            node.parentElement.parentElement.remove()
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.innerText = message;

        const container = document.querySelectorAll('.container')[0]
        const form = document.getElementById('book-form')
        container.insertBefore(div, form)
        // vanish after few seconds
        setTimeout(()=> document.querySelector('.alert').remove(), 3000)

    }

    // clear form field
    static clearFormField(){
    
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    }
        
}


//=========================== store class: handle Storage =======================================
class Store {

    static getBook(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;

    }

    static addBook(book){
        const books = Store.getBook()
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books))

    }

    static removeBook(isbn){
        const books = Store.getBook()
        const updatedBookList = books.filter(book => book.isbn !== isbn);
        localStorage.setItem('books',JSON.stringify(updatedBookList))
    }
}


//=================Events: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)


// ===============Event: Add a Book
document.getElementById('book-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Fill all the fields!', 'danger')
    }
    else{
        const book = new Book(title, author, isbn)
        UI.addBookToList(book)
        Store.addBook(book);
        UI.showAlert('Book added Successfully', 'success');
        UI.clearFormField()
    }
})


// ===================Event: Remove a book
document.getElementById('book-list').addEventListener('click', e => {
        
    UI.deleteBook(e.target)
    
    Store.removeBook(e.target.parentElement.previousElementSibling.innerText)
    UI.showAlert('Book has been deleted', 'danger')
})
    
