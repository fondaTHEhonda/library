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
    document.getElementById("library").innerHTML = "";
    for(let i = 0; i < mainLibrary.length; i++) {
        let newDiv = document.createElement('DIV');
        let titleP = document.createElement('P');
        let authorP = document.createElement('P');
        let pagesP = document.createElement("P");
        let deleteEntry = document.createElement("BUTTON");
        let toggleRead = document.createElement("BUTTON");
        document.getElementById("library").appendChild(newDiv);
        newDiv.appendChild(titleP);
        newDiv.appendChild(authorP)
        newDiv.appendChild(pagesP);
        newDiv.className = "book-info";
        titleP.textContent = "Title: " + mainLibrary[i].title;
        authorP.textContent = "Author: " + mainLibrary[i].author;
        pagesP.textContent = "Pages: " + mainLibrary[i].pages;
        deleteEntry.textContent = "Remove";
        deleteEntry.className = "remove-book";
        toggleRead.textContent = "Mark Read";
        toggleRead.className = "toggle-read";
        newDiv.appendChild(toggleRead);
        newDiv.appendChild(deleteEntry);
        if(mainLibrary[i].read === true) {
            let newInput = document.createElement("P");
            newDiv.appendChild(newInput);
            newInput.textContent = "I have read this book."
        } else if(mainLibrary[i].read === false) {
            let newerP = document.createElement("P");
            newDiv.appendChild(newerP);
            newerP.textContent = "I have not read this book."
        }
    }
}

//Getting the book

function getBook(bookTitle) {
    for(let book of mainLibrary) {
        if(book.title === bookTitle) {
            return book
        }
    }
    return null
}

//Removing Books
const libraryDisplay = document.getElementById('library');

function removeBook(bookTitle) {
        mainLibrary.filter((book) => book.title !== bookTitle);

}

//Removing Book and changing read status
function changeOrDelete(e) {
    if(e.target.classList.contains("remove-book")) {
        console.log(e.target.parentNode.firstChild.innerHTML)
        removeBook(e.target.parentNode.firstChild.innerHTML);
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
    
}
libraryDisplay.addEventListener('click', changeOrDelete);

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
const trueRadio = document.getElementById('true');
const falseRadio = document.getElementById('false');

// Function to add new book to object and array based on information given in the form
function createBook(event) {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    let bookRead;

    if(falseRadio.checked) {
        bookRead = false;
    } else {
        bookRead = true;
    }

    newBook = new Book(bookTitle, bookAuthor, parseInt(bookPages), bookRead);
    mainLibrary.push(newBook);
    console.log(mainLibrary);
    displayBooks();
    document.getElementById("entry-form").style.display = "none";
    event.preventDefault();
}

form.addEventListener('submit', createBook); 



displayBooks();