const form = document.querySelector('form')
const bookInput = document.querySelector('#book')
const booklist = document.querySelector('ul')

form.addEventListener('submit', addBook)
booklist.addEventListener('click', deleteBook)

