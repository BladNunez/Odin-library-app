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


const button = document.querySelector('button');
const container = document.getElementById('#content-container');
const form = document.getElementById("#bookForm");

button.addEventListener('click' , function() {
        document.getElementById("bookForm").style.display = "block";

});

window.onload = function() {
        document.getElementById("bookForm").style.display = "none";
      };