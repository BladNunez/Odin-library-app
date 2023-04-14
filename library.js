// create book constructor
function Book(title,author,pages,read){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
}

//array to contain new book objects
let myLibrary = [];

function addBookToLibrary(){
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read').value;

        const bookOne = new Book(title,author,pages,read);

        myLibrary.push(bookOne);
        
}

//function to loop through array and display on web page
function displayBooks(){
        const topContainer = document.querySelector('#newBook');

        let htmlElement = "";

        for(let book of myLibrary){
                htmlElement += `<div>Title: ${book.title} <br>
                                     Author: ${book.author} <br>
                                     Pages: ${book.pages} <br>
                                     Read: ${book.read}</div>`
                
        }

        topContainer.innerHTML = htmlElement;    
}


const button = document.querySelector('button');
const container = document.getElementById('#content-container');

button.addEventListener('click' , function(e) {
        document.getElementById("bookForm").reset();
        document.getElementById("bookForm").style.display = "block";
});

const submit = document.getElementById('submitButton');

submit.addEventListener('click',function(e){
        e.preventDefault();
        addBookToLibrary();
        document.getElementById("bookForm").style.display = "none";
        displayBooks();
});



window.onload = function() {
        document.getElementById("bookForm").style.display = "none";
      };

