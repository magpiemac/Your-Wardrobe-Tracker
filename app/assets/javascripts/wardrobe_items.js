$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('.all_wardrobe_items').on('click', (e) =>{
    e.preventDefault()
    console.log('hello');

    fetch('/wardrobe_items.json')
      credentials: 'include'
      .then(foo => foo.json())
      .then(bar => console.log(bar))
  })
}
