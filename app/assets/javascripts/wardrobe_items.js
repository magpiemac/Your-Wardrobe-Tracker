
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
      fetch(`/wardrobe_items/${id}/capsules/${id}.json`, {
        credentials: "include"})
        .then(res => res.json())
        .then(wardrobe_item => {
          console.log(wardrobe_item)
          let newWardrobe_item = new Wardrobe_item(wardrobe_item[0])
          let wardrobe_itemHtml = newWardrobe_item.formatShow()
          $('#app-container').append(wardrobe_itemHtml)
        })
      })

      $('#new_wardrobe_item').on('submit', function(e){
        e.preventDefault()
        console.log('submitting new item')
        //send the ajax or fetch post request to create the new item and when you get the response back from the
        //server append that new item to the DOM

        $('#app-container').html('')
        $('#app-container').append(`<h1>New Item will display here</h1>`)
      })
    }

//constructor function

function Wardrobe_item(wardrobe_item) {
  this.id = wardrobe_item.id
  this.item = wardrobe_item.item
  this.description = wardrobe_item.description
  this.wardrobe_item_capsules = wardrobe_item.wardrobe_item_capsules
  this.capsules = wardrobe_item.capsules
}

//every instance of Wardrobe_item can call the .formatIndex function.
//cannot use arrow function with prototype(get window object)
//format the rest of html
Wardrobe_item.prototype.formatIndex = function() {
  let wardrobe_itemHtml = `
    <a href="/wardrobe_items/${this.id}" data-id="${this.id}" class="show_link"><h2>${this.item}</h2></a>
    <h3> -${this.description}</h3>
  ` //fix links, add other display items
    return wardrobe_itemHtml
};

Wardrobe_item.prototype.formatShow = function() {
  let wardrobe_itemHtml = `
    <h2>${this.item}</h2>
    <h2>${this.decription}</h2>
    <h2>${this.wardrobe_item}</h2>
  `
    return wardrobe_itemHtml
    // <%= button_tag 'Next', class: 'js-next', data: {id: wardrobe_item.id} %>
};

// create resource
