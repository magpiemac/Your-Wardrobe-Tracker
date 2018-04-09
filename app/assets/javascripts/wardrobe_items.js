document.ready
$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  //get wardrobe_item idex
  $('.all_wardrobe_items').on('click', (e) => {
    e.preventDefault()
    history.pushState(null, null, "wardrobe_item")
    fetch('/wardrobe_items.json', {
        credentials: "include"
      })
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
  //show single wardrobe_item
  $(document).on('click', ".show_link", function(e) {
    e.preventDefault()
    $('#app-container').html(' ')
    let id = $(this).attr('data-id');
    fetch(`/wardrobe_items/${id}.json`, {
        credentials: "include"
      })
      .then(res => res.json())
      .then(wardrobe_item => {
        console.log(wardrobe_item)
        let newWardrobe_item = new Wardrobe_item(wardrobe_item)
        let wardrobe_itemHtml = newWardrobe_item.formatShow()
        $('#app-container').append(wardrobe_itemHtml)
      })
  })
  // create resource
  $('#new_wardrobe_item').on('submit', function(e) {
    e.preventDefault()
    $('#app-container').html(' ')
    $.ajax({
      url: '/wardrobe_items.json',
      method: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        const newWardrobeItem = new Wardrobe_item(data)
        $('#app-container').append(newWardrobeItem.formatShow())
      }
    })
  })

  //previous wardrobe item
  $(document).on('click', '.js-prev', function(e) {
    $('#app-container').html(' ')
    let id = +$(this).attr('data-id');
    // let nextId = id - 1
    // let id = $(this).attr('data-id'); //use jQuery to grab id of post
    // console.log(id)
    fetch(`/wardrobe_items/${id}/previous.json`, {
        credentials: "include"
      })
      .then(res => res.json())
      .then(wardrobe_item => {
        console.log(wardrobe_item)
        let newWardrobe_item = new Wardrobe_item(wardrobe_item)
        let wardrobe_itemHtml = newWardrobe_item.formatShow()
        $('#app-container').append(wardrobe_itemHtml)
      })
  })

  //show next wardrobe_item
  $(document).on('click', '.js-next', function(e) {
    $('#app-container').html(' ')
    let id = +$(this).attr('data-id');
    // let nextId = id + 1
    // console.log(nextId)
    fetch(`/wardrobe_items/${id}/next.json`, {
        credentials: "include"
      })
      .then(res => res.json())
      .then(wardrobe_item => {
        console.log(wardrobe_item)
        let newWardrobe_item = new Wardrobe_item(wardrobe_item)
        let wardrobe_itemHtml = newWardrobe_item.formatShow()
        $('#app-container').append(wardrobe_itemHtml)
      })
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

//index view formatter
Wardrobe_item.prototype.formatIndex = function() {
  let wardrobe_itemHtml = `
    <a href="/wardrobe_items/${this.id}" data-id="${this.id}" class="show_link"><h2>${this.item}</h2></a>
    <h3> -${this.description}</h3>
    <h3> -${this.capsules[0].name}</h3>
  ` //fix links, add other display items
  return wardrobe_itemHtml
};

//show view formatter
Wardrobe_item.prototype.formatShow = function() {
  let wardrobe_itemHtml = `
    <h2>${this.item}</h2>
    <h3> -${this.description}</h3>
    <h3> -${this.capsules[0].name}</h3>
    <button class="js-next" data-id=${this.id}>Next</button>
    <button class="js-prev" data-id=${this.id}>Previous</button>
  `
  return wardrobe_itemHtml
};
