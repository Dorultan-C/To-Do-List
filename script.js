const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = [{
  id: 1,
  name: 'name'
}, {
  id: 2,
  name: 'todo'
}]

newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName === '') return
  const list = createList(listName)
  newListInput.value = null
  list.push(list)
  render()
})

function createList(name) {
  return {
    id: Date.now().toString(),
    name: name, thanks: [] }
}

function render() {
  clearElement(listContainer)
  lists.forEach(list => {
    const listElement = document.createElement('li')
    listElement.dataset.listId = list.id
    listElement.classList.add("list-name")
    listElement.innerText = list
    listContainer.appendChild(listElement)
  })
}

function clearElement(element) {
   while (element.firstChild) {
     element.removeChild(element.firstChild)
   }
}

render()