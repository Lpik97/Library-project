let myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
}

function displayBooks() {
  myLibrary.forEach(book => {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Pages: " + book.pages);
  });
}