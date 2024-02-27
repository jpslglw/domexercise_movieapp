$(function() { // have DOM load
    $('form').on('submit', function(event){ // add event listener on form when submittet
        event.preventDefault();
        let LI = $('<li></li>'); // create LI with each submit
        LI.append($('.inputs').eq(0).val(),' : ', $('.inputs').eq(1).val(),' '); // fill the li with input
        LI.append('<button>Remove</button>'); // append button
        $('ul').append(LI); // append to li
        $('form').trigger('reset'); // reset the form
    })

    $('ul').on('click', function(event){
        if (event.target.tagName === 'BUTTON') {
            $(event.target).closest('li').remove(); // remove item that was clicked on
        }; 
    });
});