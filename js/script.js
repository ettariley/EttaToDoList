function newItem() {

    //Adding to the new list of items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    }

    //Crossing out an item from the list
     li.on('click', function (event) {
        li.addClass('strike');
    });

    //Adding delete button "X"
    let crossOutButton = $('<div class="cross-out-button">X</div>');
    li.append(crossOutButton);

    //Adding delete class from CSS
    crossOutButton.on('click', function(){
        li.addClass('delete');
    });

    //Reordering list items
    $('#list').sortable();

}   