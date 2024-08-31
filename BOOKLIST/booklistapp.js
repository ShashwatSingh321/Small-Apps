class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    static function1(){

    

}
static getBookList() {
    const books = localStorage.getItem('books'); // Retrieve the JSON string
    return books ? JSON.parse(books) : []; // Parse the string into an array or return an empty array
}
static addbooklist(bookt){
    const list = document.querySelector('.list');
    const row = document.createElement('tr');

    row.innerHTML =`
    <td>${bookt.title}</td>
    <td>${bookt.author}</td>
    <td>${bookt.isbn}</td>
    <td><button class="delete">X</button></td>

    `

    list.appendChild(row);
    
}
static deletebutton(el){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.  remove();
    }
}
static clearfield(){
    document.querySelector('.type').value = '';
    document.querySelector('.typee').value = '';
    document.querySelector('.typeee').value = '';
}

static savelocalstorage(booke){
    localStorage.setItem('booke', JSON.stringify(booke));
}
}

document.addEventListener('DOMContentLoaded',UI.function1);
document.querySelector('.container').addEventListener('submit',(e)=>{
    e.preventDefault();

    const book = document.querySelector('.type').value;
    const author = document.querySelector('.typee').value;
    const isbn = document.querySelector('.typeee').value;

    const books = new Book(book,author,isbn);

    
    UI.addbooklist(books)
    UI.clearfield();
    UI.savelocalstorage(books);

    



})

document.querySelector('.list').addEventListener('click',(e)=>{
    UI.deletebutton(e.target);
    
})