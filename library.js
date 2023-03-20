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

        myLibrary.push(bookOne);
        
}
