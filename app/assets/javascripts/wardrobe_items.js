
//document.ready
$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('.all_wardrobe_items').on('click', (e) => {
    e.preventDefault()
    history.pushState(null, null, "wardrobe_item")
    fetch('/wardrobe_items.json', {
      credentials: "include"})
      .then(res => res.json())
      .then(wardrobe_items => {
        $('#app-container').html(' ')
        wardrobe_items.forEach(wardrobe_item => {
          let newWardrobe_item = new Wardrobe_item(wardrobe_item)
          let wardrobe_itemHtml = newWardrobe_item.formatIndex()
          $('#app-container').append(wardrobe_itemHtml)
      })
    })
  })
}

//constructor function

function Wardrobe_item(wardrobe_item) {
  this.capsules = wardrobe_item.capsules
  this.description = wardrobe_item.description
  this.id = wardrobe_item.id
  this.item = wardrobe_item.item
}

//every instance of Wardrobe_item can call the .formatIndex function.
//cannot use arrow function with prototype
//format the rest of html
Wardrobe_item.prototype.formatIndex = function() {
  let wardrobe_itemHtml = `
    <a href="/wardrobe_items/${this.id}" class="show_link"<h1>${this.item}</h1></a>
  `
    return wardrobe_itemHtml
};
