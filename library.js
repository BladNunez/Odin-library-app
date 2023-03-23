// create book constructor
function Book(title,author,pages,read){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.display = function(){
                return "Title: " + this.title + "\n" + "Author: " + this.author + "\n" +
                       "Pages: " + this.pages + "\n" + "Read?: " + this.read
        }
}

//array to contain new book objects
let myLibrary = [];

function addBookToLibrary(){
        const title = prompt("Title of book?:");
        const author = prompt("Author of book?:");
        const pages = Number(prompt("Amount of pages?:"));
        const read = prompt("Have you read book?:");

        const bookOne = new Book(title,author,pages,read);
        const bookTwo = new Book('Alexander The Great','Kevin BlackWell',300,'Yes');
        const bookThree = new Book('The Fort','Ray Charles',220,'No');

        myLibrary.push(bookOne);
        myLibrary.push(bookTwo);
        myLibrary.push(bookThree);
}

//function to loop through array and display on web page
function displayBooks(){
        const topContainer = document.querySelector('.top-container');

        myLibrary.forEach(element => {
                const child = document.createElement('div');
                //add element in array to div created
                const myObj = JSON.stringify(element);
                child.innerHTML = myObj;
                topContainer.appendChild(child);

        });
}

function createForm(){
        const createDiv = document.createElement('div');
        const createForm = document.createElement('form');

        const authorLabel = document.createElement('label');
        const titleLabel = document.createElement('label');
        const pagesLabel = document.createElement('label');
        const readLabel = document.createElement('label');

        const authorInput = document.createElement('input');
        const titleInput = document.createElement('input');
        const pagesInput = document.createElement('input');
        const readInput = document.createElement('input');

        createForm.appendChild(authorLabel);
        createForm.appendChild(authorInput);
        createForm.appendChild(titleLabel);
        createForm.appendChild(titleInput);
        createForm.appendChild(pagesLabel);
        createForm.appendChild(pagesInput);
        createForm.appendChild(readLabel);
        createForm.appendChild(readInput);

        createDiv.appendChild(createForm);
}





