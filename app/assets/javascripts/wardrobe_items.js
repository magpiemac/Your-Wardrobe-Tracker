$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('.all_wardrobe_items').on('click', (e) => {
    e.preventDefault()
    fetch('/wardrobe_items.json', {
      credentials: "include"})
      .then(res => res.json())
      .then(wardrobe_items => {
        $('#app-container').html('hello')
      })
  })
}
