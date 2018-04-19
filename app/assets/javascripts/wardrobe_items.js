$(() => {
    bindClickHandlers()
})

const bindClickHandlers = () => {
    //get wardrobe_item index
    $('.all_wardrobe_items').on('click', (e) => {
        e.preventDefault()
        history.pushState(null, null, "wardrobe_item")
        fetch('/wardrobe_items.json', {
                credentials: "include"
            })
            .then(res => res.json())
            .then(wardrobeItems => {
                $('#app-container').html(' ')
                console.log(wardrobeItems)
                wardrobeItems.sort(descriptions).forEach(wardrobeItem => {
                    let newWardrobeItem = new WardrobeItem(wardrobeItem)
                    let wardrobeItemHtml = newWardrobeItem.formatIndex()
                    $('#app-container').append(wardrobeItemHtml)
                    console.log(wardrobeItems.item)
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
                let newWardrobeItem = new WardrobeItem(wardrobe_item)
                let wardrobeItemHtml = newWardrobeItem.formatShow()
                $('#app-container').append(wardrobeItemHtml)
            })
    })

    // create wardrobe_item
    $('#new_wardrobe_item').on('submit', function(e) {
        e.preventDefault()
        $('#app-container').html(' ')
        $.ajax({
            url: '/wardrobe_items.json',
            method: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                const newWardrobeItem = new WardrobeItem(data)
                $('#app-container').append(newWardrobeItem.formatShow())
            }
        })
    })

    //previous wardrobe item (wardrobe_item)
    $(document).on('click', '.js-prev', function(e) {
        $('#app-container').html(' ')
        let id = +$(this).attr('data-id');
        fetch(`/wardrobe_items/${id}/previous.json`, {
                credentials: "include"
            })
            .then(res => res.json())
            .then(wardrobe_item => {
                let newWardrobeItem = new WardrobeItem(wardrobe_item)
                let wardrobeItemHtml = newWardrobeItem.formatShow()
                $('#app-container').append(wardrobeItemHtml)
            })
    })

    //show next wardrobe item (wardrobe_item)
    $(document).on('click', '.js-next', function(e) {
        $('#app-container').html(' ')
        let id = +$(this).attr('data-id');
        fetch(`/wardrobe_items/${id}/next.json`, {
                credentials: "include"
            })
            .then(res => res.json())
            .then(wardrobe_item => {
                let newWardrobeItem = new WardrobeItem(wardrobe_item)
                let wardrobeItemHtml = newWardrobeItem.formatShow()
                $('#app-container').append(wardrobeItemHtml)
            })
    })
}

//constructor function
function WardrobeItem(wardrobeItem) {
    this.id = wardrobeItem.id
    this.item = wardrobeItem.item
    this.description = wardrobeItem.description
    this.wardrobeItemCapsules = wardrobeItem.wardrobe_item_capsules
    this.capsules = wardrobeItem.capsules
}

//index view formatter
WardrobeItem.prototype.formatIndex = function() {
    let wardrobeItemHtml = `
    <a href="/wardrobe_items/${this.id}" data-id="${this.id}" class="show_link"><h2>${this.item}</h2></a>
    <h3> -${this.description}</h3>
    <h3> -${this.capsules[0].name}</h3>
  `
    return wardrobeItemHtml
};

//show view formatter
WardrobeItem.prototype.formatShow = function() {
    let wardrobeItemHtml = `
    <h2>${this.item}</h2>
    <h3> -${this.description}</h3>
    <h3> -${this.capsules[0].name}</h3>
    <button class="js-next" data-id=${this.id}>Next</button>
    <button class="js-prev" data-id=${this.id}>Previous</button>
  `
    return wardrobeItemHtml
};

let descriptions = (function(a, b) {
  var descA = a.description.toUpperCase(); // ignore upper and lowercase
  var descB = b.description.toUpperCase(); // ignore upper and lowercase
  if (descA < descB) {
    return -1;
  }
  if (descA > descB) {
    return 1;
  }

  // names must be equal
  return 0;
});
