/*let Book = function(title, author, pages , read){ 
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read= read
}
Book.prototype.info =function(){ 
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, Is Read ${this.read}`);
} 

let Hoob = Book('The Hobbit ',"J.J.R Tolkien",295,false)
Hoob.info()
*/
let myLibrary = [];
function Book(title,author,pages,read){ 
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read  = read
}
function addBookToLibrary(){ 

}
myLibrary = [
    {title:'first book for you ' , author:'ahmed maher' , pages:200 , read:true },
    {title:'Book rrrrrrrrrro ' , author:'maher' , pages:100 , read: false }
]
let table = document.querySelector('table')
for (let index in myLibrary){ 
    let row  = document.createElement('tr')
    let book = myLibrary[index]
    for(let atr in book){ 
        console.log(book[atr])
        let cell = document.createElement('td')
        cell.textContent = book[atr];
        row.appendChild(cell)
    }
    table.appendChild(row)
}



