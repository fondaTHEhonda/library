//Basic Set Up -> main array and Book constructor and function that adds it to array

let mainLibrary = ["Heat", "The Partner"];

function Book(title) {
    this.title = title;
}

function addToMainLibrary() {
    //will add contents of form to mainLibrary array
}

const book1 = new Book("Heat");
const book2 = new Book("The Partner");

console.log(book1.title);
console.log(book2);
console.log(mainLibrary);