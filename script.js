let myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  myLibrary.push(new Book(title, author, pages));
}