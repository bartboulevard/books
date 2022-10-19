const form = document.querySelector('#add-book')
const addTitle = document.querySelector('#title')
const addAuthor = document.querySelector('#author')
const addISBN = document.querySelector('#isbn')
const table = document.querySelector('table')
const taskDelete = document.querySelector('table')

form.addEventListener('click', addBook)
taskDelete.addEventListener('click', deleteBook)
document.addEventListener('DOMContentLoaded', getBooks)

function addBook(e){
    let row = table.insertRow()
    let td = document.createElement('td')
    td.appendChild(document.createTextNode(addTitle.value))
    td.appendChild(document.createTextNode(addAuthor.value))
    td.appendChild(document.createTextNode(addISBN.value))
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken 2 secondary-content'
    a.setAttribute('href', '#')
    td.appendChild(a)
    row.appendChild(td)
    addBookLS(addTitle.value)
    addBookLS(addAuthor.value)
    addBookLS(addISBN.value)
    addTitle.value = ''
    addAuthor.value = ''
    addISBN.value = ''
    e.preventDefault()
}

function deleteBook(e){
    if(e.target.textContent === 'X'){
        if(confirm('Are you sure you want to delete this value?')){}
        e.target.parentElement.parentNode.remove()
        deleteBookLS(e.target.parentElement.parentNode.textContent.slice(0, 2))
    }
}

function addBookLS(book) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

function deleteBookLS(book) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((bookLS, bookIndex) => {
        if(bookLS === book){
            books.splice(bookIndex, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}

function getBooks(){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((book) => {
        const td = document.createElement('td')
        td.appendChild(document.createTextNode(book))
        td.className = 'collection-item'
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken 2 secondary-content'
        a.setAttribute('href', '#')
        td.appendChild(a)
        // add to list
        const row = table.insertRow()
        row.appendChild(td)
    })
}
