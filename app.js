const accordions = document.querySelectorAll('.label')
const menuArray = document.querySelectorAll('.content')
const viewArray = document.querySelectorAll('.items')

accordions.forEach((accordion) => accordion.addEventListener('click', function () {
    this.parentElement.classList.toggle('active')
}))

function addRemove(item, itemView) {
  Array.from(item).forEach((button) => {
    const items = document.createElement('p')
    items.classList.add('item')
    button.addEventListener('click', function () {
      items.innerHTML = `${this.innerText} <span class="delete">&times;</span>`
      items.children[0].addEventListener('click', () => {
        items.remove()
      })
      itemView.appendChild(items)
    })
  })
}

menuArray.forEach((menu, i) => addRemove(menu.children, viewArray[i]))
