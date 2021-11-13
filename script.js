// declaring the library
/*
issues to fix 
--local storage working //done
--extera words with the info the user provides
--delete button working 
--read button working 
-- wraped titles and text 
 */

let myLibrary = get();
if(!myLibrary || myLibrary=='null'){ 
    myLibrary= [];
    set();
}
 
// varibles i will need
let displayed;
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.pages');
let isread = document.querySelector('.isread')
let addbook = document.querySelector('.add')
let showbord = document.querySelector('.showbord')
// ivoking the display function
display(myLibrary);
// when add button is clicked
addbook.addEventListener('click',function(){
    
    if(!title.value || !author.value || pages.value < 0 ||!pages.value){
        alert('Fill the Form With valid data!')
    }
    else { 
            let book =new Book(title.value,author.value,parseInt(pages.value),isread.checked);
            addBookToLibrary(book)
            set();
            title.value =  author.value = pages.value = '';
            isread.checked = false;
    }
    resetdisplay();
    display(myLibrary);
})

// display the librar each book in a card 
function display(library){ 
    if(displayed){ 
        resetdisplay
    }
    else{ 
        displayed = true
    }
    for(let index in library){
        let card = document.createElement("div");
        card.className = 'card';
        let databook = document.createElement('div');
        databook.className='data-book'
        card.appendChild(databook)
        showbord.appendChild(card)
        let book = library[index]
        for(let info in book){
            if(book.hasOwnProperty(info)){
                let row = document.createElement('div')
                row.className='row'
                row.textContent= book[info]
                databook.appendChild(row)
            }
        }
        // adding the remove from library button and associating it with the book
        let remover = document.createElement('button');
        remover.setAttribute('data-index',`${index}`);
        remover.className='delete-book'
        remover.textContent = 'Delete';
        card.appendChild(remover);
        // adding a button to change the read status for the book
        let readingStatus = document.createElement('button');
        readingStatus.setAttribute('data-index',`${index}`);
        readingStatus.className='reading-book';
        readingStatus.textContent='Read It'
        card.appendChild(readingStatus)
    }
}
// reset display 
function resetdisplay(){ 
    showbord.innerHTML='';
    displayed=false;
}
// deleteing a book from the library
let deletebook = Array.from(document.querySelectorAll('.delete-book'))
deletebook.map(delbtn=>{ 
    delbtn.addEventListener('click',function(e){
        let theindex = e.target.dataset.index
        myLibrary = myLibrary.filter((book,indexofbook)=> {
            return indexofbook != theindex;
        })
        resetdisplay();
        display(myLibrary)
        set();
    })
})
// read / unread button
let readbook = Array.from(document.querySelectorAll('.reading-book'))
readbook.map(readbookbtn=>{ 
    readbookbtn.addEventListener('click',function(e){ 
        myLibrary.map((book,index)=>{ 
            if(index == e.target.dataset.index){
                book.read = !(book.read)
                set();
                resetdisplay();
                display(get())

            }
        })
    })
})


// Book constructor
let Book = function(title,author,pages,read){ 
    this.title = title ;
    this.author = author ;
    this.pages = pages ;
    this.read  = read;
}
/*
Book.prototype.readit = function(){ 
        let now = this.read
        this.read = !now
    }
/*
Book.prototype.changeread= function(){
    let current = this.read ;
    this.read = !current;
}
*/
// add book to the array
function addBookToLibrary(book){ 
    myLibrary.push(book)
}
// get the myLibrary array from the localStorage
function get(){ 
    return JSON.parse(localStorage.getItem("library"));
} 
// modify the myLibrary array atthe localStorage

function set(){ 
    localStorage.setItem("library", JSON.stringify(myLibrary))
}
