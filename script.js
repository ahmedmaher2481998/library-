// varibles i will need
// let myLibrary = [];
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
Book.prototype.isread{ 
    
}
// add book to the array
function addBookToLibrary(book){ 
    myLibrary.push(book)
}
// when add button is clicked
addbook.addEventListener('click',function(){ 
    let book =new Book(title.value,author.value,parseInt(pages.value),isread.checked);
    addBookToLibrary(book)
    title.value =  author.value = pages.value = '';
    isread.checked = false;
})
// temp library for testing the functions
let myLibrary = [
    {title: 'aaaa',
        author: 'aaaaaaaaaaaaaaaaa',
        pages:200,
        isread: false },
    {title: 'bbb',
        author: 'bbbbbbbbbbbb',
        pages:100,
        isread: true}
]


let showbord = document.querySelector('.showbord')
// display the librar each book in a card 
function display(library){ 
    for(let index in library){
        let card = document.createElement("div");
        card.className = 'card';
        showbord.appendChild(card)
        let book = library[index]
        for(let info in book){
            let row = document.createElement('div')
            row.className='row'
            row.textContent= book[info]
            card.appendChild(row)
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
// ivoking the display function
display(myLibrary);
let deletebook = Array.from(document.querySelectorAll('.delete-book'))
deletebook.map(delbtn=>{ 
    delbtn.addEventListener('click',function(e){
        let theindex = e.target.dataset.index
        myLibrary = myLibrary.filter((book,indexofbook)=> {
            return indexofbook != theindex;
        })
        display(myLibrary)
    })
})


/*    let book = Object.create(Book);
    book.title = title.value;
    book.author = author.value;
    book.pages = parseInt(pages.value);
    book.isread = isread.checked*/