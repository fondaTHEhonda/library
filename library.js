//Basic Set Up -> main array and Book constructor and function that adds it to array

let mainLibrary = ["Heat", "The Partner"];

function Book(title) {
    this.title = title;
}

function addToMainLibrary() {
    //if each form field is filled out
    //create new Object where each field is .title, .author, etc.
    //Push new Object into Array
}

const book1 = new Book("Heat");
const book2 = new Book("The Partner");

console.log(book1.title);
console.log(book2);
console.log(mainLibrary);

function displayBooks() {
    for(let i = 0; i < mainLibrary.length; i++) {
        let newDiv = document.createElement('P');
        newDiv.textContent = mainLibrary[i];
        document.getElementById("library").appendChild(newDiv);
    }
}

displayBooks();