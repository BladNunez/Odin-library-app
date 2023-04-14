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

//global variable for delete button inside book entry container
const d = document.createElement('button');
d.innerText = 'Delete';
d.type = 'button';


//function to loop through array and display on web page
function displayBooks(){
        const topContainer = document.querySelector('#newBook');

        let htmlElement = "";
       


        for(let book of myLibrary){
                htmlElement += `<div>Title: ${book.title} <br>
                                     Author: ${book.author} <br>
                                     Pages: ${book.pages} <br>
                                     Read: ${book.read} <br>
                                     ${d.outerHTML}
                                     </div>`   
        }

        topContainer.innerHTML = htmlElement;     
}


const button = document.querySelector('button');
const container = document.getElementById('#content-container');
const deleteButton = document.querySelector('#delete');

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


d.addEventListener('click',function(){
        console.log("Hello");
});



window.onload = function() {
        document.getElementById("bookForm").style.display = "none";
      };
