
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
  $(document).on('click', ".show_link", function(e) {
    e.preventDefault()
      $('#app-container').html(' ')
      let id = $(this).attr('data-id');
      fetch(`/wardrobe_items/${id}.json`, {
      credentials: "include"})
        .then(res => res.json())
        .then(wardrobe_item => {
          let newWardrobe_item = new Wardrobe_item(wardrobe_item)
          let wardrobe_itemHtml = newWardrobe_item.formatIndex()
          $('#app-container').append(wardrobe_itemHtml)
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
    <a href="/wardrobe_items/${this.id}" data-id="${this.id}" class="show_link"><h2>${this.item}</h2></a>
  ` //fix links, add other display items
    return wardrobe_itemHtml
};

Wardrobe_item.prototype.formatShow = function() {
  let wardrobe_itemHtml = `
    <h2>${this.id}</h2>
    <h2>${this.name}</h2>
  ` //fix links, add other display items
    return wardrobe_itemHtml
};
