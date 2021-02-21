//Basic Set Up -> main array and Book constructor and function that adds it to array
const form = document.getElementById('entry-form');
const readCheck = document.getElementById('true');


// Opening and Closing the form to add new book
let addBook = document.getElementById("add-book");
let cancelBtn = document.getElementById('cancel');


// Example Objects
const book1 = new Book("Heat", "Mike Lupica", 100, true);
const book2 = new Book("The Partner", "John Grisham", 250, false);
let mainLibrary = [];


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
        deleteEntry.className = "remove-book";
        deleteEntry.textContent = "Remove";
        toggleRead.className = "toggle-read"
        if(mainLibrary[i].read === true) {
            toggleRead.classList.add("book-read");
        } else {
            toggleRead.classList.add("book-not-read");
        }
        newDiv.appendChild(toggleRead);
        newDiv.appendChild(deleteEntry);
        toggleRead.addEventListener("click", () => {
            if(mainLibrary[i].read === true) {
                toggleRead.textContent = "Not Read";
                mainLibrary[i].read = false;
                toggleRead.classList.remove("book-read");
                toggleRead.classList.add("book-not-read");

            } else if(mainLibrary[i].read === false) {
                toggleRead.textContent = "Read";
                mainLibrary[i].read = true;
                toggleRead.classList.add("book-read");
                toggleRead.classList.remove("book-not-read");

            }
        })
        if(mainLibrary[i].read === true) {
            toggleRead.textContent = "Read"

        } else if(mainLibrary[i].read === false) {
            toggleRead.textContent = "Not Read";
        }
    }   
}


//Removing Books
const libraryDisplay = document.getElementById('library');

function removeBook(bookTitle) {
       mainLibrary.splice(mainLibrary.indexOf(bookTitle), 1);
}

//Removing Book
function alterLibrary(e) {
    if(e.target.classList.contains("remove-book")) {
        removeBook(e.target.parentNode.firstChild.textContent);
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        saveData();
    }
}
libraryDisplay.addEventListener('click', alterLibrary);



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


// Function to add new book to object and array based on information given in the form
function createBook(event) {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    let bookRead;

    if(readCheck.checked) {
        bookRead = true;
    } else {
        bookRead = false;
    }

    newBook = new Book(bookTitle, bookAuthor, parseInt(bookPages), bookRead);
    mainLibrary.push(newBook);
    displayBooks();
    document.getElementById("entry-form").style.display = "none";
    event.preventDefault();
}

form.addEventListener('submit', createBook); 

function saveData() {
    localStorage.setItem('mainLibrary', JSON.stringify(mainLibrary));
}

function loadData() {
    mainLibrary = JSON.parse(localStorage.getItem("mainLibrary"));
    if(mainLibrary === null) mainLibrary = [];
    displayBooks();
    }

loadData();
