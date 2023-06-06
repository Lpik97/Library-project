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
  const booksSection = document.body.querySelector('.books');
  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;
    booksSection.appendChild(card);
  });
}