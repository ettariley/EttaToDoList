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

}   