const modal = document.querySelector('.del-modal')
const openModals = document.querySelectorAll('.open-modal-btn')
const closeModal = document.querySelector('.close-modal-btn')
const delTrigger = document.querySelector('.del-btn')
let datasetId = null

openModals.forEach(btn => {
  btn.addEventListener('click', () => {
    datasetId = btn.dataset.id
    modal.showModal()
  })
})

closeModal.addEventListener('click', () => {
  modal.close()
})

delTrigger.addEventListener('click', async () => {
  window.location.href = `http://localhost:3000/restaurants/${datasetId}/delete`
  modal.close()
})
