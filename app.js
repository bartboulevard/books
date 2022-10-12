const form = document.querySelector('#add-book')
const addTitle = document.querySelector('#title')
const addAuthor = document.querySelector('#author')
const addISBN = document.querySelector('#isbn')
const table = document.querySelector('table')
//const taskDelete = document.querySelector('table')

form.addEventListener('click', addBook)
//taskDelete.addEventListener('click', deleteBook)

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
}

