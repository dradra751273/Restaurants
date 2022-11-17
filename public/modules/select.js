function getSelectValue() {
  const sortRestsSelect = document.querySelector('.sort-rests')
  const sortWay = sortRestsSelect.options[sortRestsSelect.selectedIndex].value
  window.location.href = `http://localhost:3000/restaurants/sort/${sortWay}`
}
