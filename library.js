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
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').value;

        const bookOne = new Book(title,author,pages,read);

        myLibrary.push(bookOne);
        
}

//function to loop through array and display on web page
function displayBooks(){
        const topContainer = document.querySelector('.content-container');

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

button.addEventListener('click' , function(e) {
        document.getElementById("bookForm").style.display = "block";
});

const submit = document.getElementById('submitButton');

submit.addEventListener('click',function(e){
        
        addBookToLibrary();

        

        myLibrary.forEach(element => {
                
               console.log(element.display());
                

        });
        

        e.preventDefault(); 
});


window.onload = function() {
        document.getElementById("bookForm").style.display = "none";
      };

