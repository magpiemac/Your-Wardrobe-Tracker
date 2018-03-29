$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('.wardrobe_items_path').on('click', (e) => {
    e.preventDefault()
    console.log('hello')
  })
}
