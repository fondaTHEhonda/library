//Basic Set Up -> main array and Book constructor and function that adds it to array



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToMainLibrary() {
    //if each form field is filled out
    //create new Object where each field is .title, .author, etc.
    //Push new Object into Array
}

// Example Objects
const book1 = new Book("Heat", "Mike Lupica", 100, true);
const book2 = new Book("The Partner", "John Grisham", 250, false);

let mainLibrary = [book1, book2];

// Function to display books on page
function displayBooks() {
    for(let i = 0; i < mainLibrary.length; i++) {
        let newDiv = document.createElement('DIV');
        let newP = document.createElement('P');
        let deleteEntry = document.createElement("BUTTON");
        document.getElementById("library").appendChild(newDiv);
        newDiv.appendChild(newP);
        newDiv.appendChild(deleteEntry);
        newP.textContent = "Title: " + mainLibrary[i].title + " " + "Author: " + mainLibrary[i].author + " " + "Pages: " + mainLibrary[i].pages;
        deleteEntry.textContent = "Remove";
        if(mainLibrary[i].read === true) {
            let newInput = document.createElement("P");
            newDiv.appendChild(newInput);
            newInput.textContent = "I have read this book."
        } else {
            let newerP = document.createElement("P");
            newDiv.appendChild(newerP);
            newerP.textContent = "I have not read this book."
        }
    }
}



// Opening and Closing the form to add new book
let addBook = document.getElementById("add-book");
let cancelBtn = document.getElementById('cancel');

function openForm() {
    document.getElementById("entry-form").style.display = "flex";
    document.getElementById("entry-form").style.flexDirection = "column"
    document.getElementById("entry-form").style.marginLeft = "750px"
}

function closeForm() {
    document.getElementById("entry-form").style.display = "none";
}

addBook.addEventListener('click', openForm);
cancelBtn.addEventListener('click', closeForm);

// Function to create new Book object on form submission
const form = document.getElementById('entry-form');

function createBook(event) {
    //title = document.getElementById('title').value;
   // author = document.getElementById('author').value;
   // pages = document.getElementById('pages').value;

    newBook = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value);
    mainLibrary.push(newBook);
    event.preventDefault();
}

form.addEventListener('submit', createBook);
displayBooks();