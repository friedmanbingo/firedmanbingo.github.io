$(document).ready(function() {

    $('body').on('touchmove', false);

    $('#header').append("http://friedman.bingo");

    shuffle(JSONBingo.squares);

    for (i = 0; i < 24; i++) {

        if (i == 12) {
            $('#board').append("<div data-value='1' class='picture' id='sqfree'><img src='img/1.jpeg' width='120px' height='120px'></div>");
            $('#board').append("<div data-value='0' class='square' id='sq12'><div class='text'><br/>" + JSONBingo.squares[i].square + "</div></div>");
        } else {
            $('#board').append("<div data-value='0' class='square' id='sq" + i + "'><div class='text'><br/>" + JSONBingo.squares[i].square + "</div></div>");
        }
    }

});

shuffle = function(v) {
    for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};