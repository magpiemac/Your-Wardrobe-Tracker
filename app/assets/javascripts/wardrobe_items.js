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
        $('#app-container').html(' ')
        wardrobe_items.forEach(wardrobe_item => {
          let newWardrobe_item = new Wardrobe_item(wardrobe_item)
          console.log(newWardrobe_item)
      })
    })
  })
}

function Wardrobe_item(wardrobe_item) {
  this.capsules = wardrobe_item.capsules
  this.description = wardrobe_item.description
  this.id = wardrobe_item.id
  this.item = wardrobe_item.item
}
