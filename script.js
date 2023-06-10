let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let newBook = new Book (title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  let library = document.querySelector('#library');
  library.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card-header" href>
      <div class="buttons">
        <img src="${book.read ? './svg/visibility_off_FILL0_wght400_GRAD0_opsz48.svg' : './svg/visibility_FILL0_wght400_GRAD0_opsz48.svg'}" alt="read icon" class="status-btn" onclick="changeStatus(event)" data-index="${i}">
        <img src="./svg/delete_FILL0_wght400_GRAD0_opsz48.svg" alt="delete icon" class="delete-btn" onclick="removeBook(${i})">
      </div>
      <h3 class="title">${book.title}</h3>
      <h5 class="author">by: ${book.author}</h5>
    </div>
    <div class="card-body">
      <p>Pages: ${book.pages}</p>
      <p class="read-status">${book.read ? "Read" : "Not read yet"}</p>
    </div>
    `;
    library.appendChild(card);
  }
}

let newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', function () {  
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.visibility = "visible";
});

document.querySelector('#new-book-form').addEventListener('submit', function (event) {
  event.preventDefault();
  addBookToLibrary();
});