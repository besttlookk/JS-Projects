const resultElement = document.getElementById('result')

class Bookmark {
    constructor(name, url){
        this.name = name;
        this.url = url;
    }
}

class UI{

    static displayBookmarks(){
        console.log('DOM Loaded')
        document.getElementById('name').value = ''
        document.getElementById('url').value = ''
        while(resultElement.lastElementChild){
            resultElement.lastElementChild.remove()
        }
        let bookmarks = Storage.getBookmarks()
        console.log(bookmarks)
        if(bookmarks.length > 0){
            console.log('inside if')
            bookmarks.forEach(bookmark => {
              
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card card-div mb-2';
               
                const anchor = document.createElement('a');
                anchor.className = 'p-2';
                anchor.innerText = bookmark.name;
                anchor.setAttribute('href', bookmark.url);
                anchor.setAttribute('target', '_blank');
                cardDiv.appendChild(anchor)

                const button = document.createElement('button');
                button.className = 'btn btn-danger mr-3 my-2 delete'
                button.innerText = 'Delete'
                cardDiv.appendChild(button)

                resultElement.appendChild(cardDiv)

            })
        }
        else{
            console.log('inside else')
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card card-div mb-2';
            console.log(cardDiv)

            const h5 = document.createElement('h5');
            h5.className= 'card-header text-danger'
            h5.innerText = "You havn't added anything thing yet!"

            cardDiv.appendChild(h5)
            resultElement.appendChild(cardDiv)

        }
    }

    static removeBookmark(e){
        
        if(e.target.classList.contains('delete')){
            e.target.parentNode.remove()
            Storage.deleteBookmark(e.target.parentNode.firstElementChild.innerText)
            UI.displayBookmarks()
        }
    }
}

class Storage{
    
    static addBookmark(bookmark){
        let bookmarks = Storage.getBookmarks();
        const check = bookmarks.some(item => item.url === bookmark.url)
        if(!check){
            bookmarks.push(bookmark);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        }
        else{
            alert('This url has already been bookmarked')
        }
    
        
       

    }

    static getBookmarks(){
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if(bookmarks){
            return bookmarks;
        }
        else{
            return [];
        }
    }

    static deleteBookmark(name){
        const bookmarks = Storage.getBookmarks()
        const filterBookmarks = bookmarks.filter(bookmark => bookmark.name !== name)
        localStorage.setItem('bookmarks',JSON.stringify(filterBookmarks))
    }

 
    
}


//event
document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    name = document.getElementById('name').value 
    url = document.getElementById('url').value
    bookmark = new Bookmark(name, url)
    Storage.addBookmark(bookmark)
    UI.displayBookmarks()

})

document.addEventListener('DOMContentLoaded',UI.displayBookmarks)

// delete event
document.getElementById('result').addEventListener('click', UI.removeBookmark)
