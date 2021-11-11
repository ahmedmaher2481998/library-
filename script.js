// declaring the library
let myLibrary = [] ;



 // ivoking the display function
display(myLibrary);
// varibles i will need
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.pages');
let isread = document.querySelector('.isread')
let addbook = document.querySelector('.add')
// Book constructor
function Book(title,author,pages,read){ 
    this.title = title ;
    this.author = author ;
    this.pages = pages ;
    this.read  = read;
}
Book.prototype.changeread= function(){
    let current = this.read ;
    this.read = !current;
}
// add book to the array
function addBookToLibrary(book){ 
    myLibrary.push(book)
}
// when add button is clicked
addbook.addEventListener('click',function(){
    
    if(!title.value || !author.value || !pages.value){
        alert('Fill the Form !')
    }
    else { 
            let book =new Book(title.value,author.value,parseInt(pages.value),isread.checked);
            addBookToLibrary(book)
            title.value =  author.value = pages.value = '';
        isread.checked = false;
    }
    resetdisplay();
    display(myLibrary);
})
let showbord = document.querySelector('.showbord')
// display the librar each book in a card 
function display(library){ 
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
    // let cards = Array.from(document.querySelectorAll('.card'));
    // cards.map(card =>{ 
    //     card.parentElement.removeChild()
    // })
    showbord.innerHTML='';

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
    })
})
// changing read status 
let readitbuttons = Array.from(document.querySelectorAll('.reading-book'));
readitbuttons.map(readitbutton=>{ 
    addEventListener('clikc',function(e){ 
        console.log(e.target.dataset.index)
    })
})