$(document).ready(function(){
    $('#container').prepend("<button id='buttonOne'>Click Me, Bro!</button>");
        //section 1
        $('#buttonOne').click(function() {
            alert("You've done it.  You've clicked a button. You deserve a cookie. Have a cookie.");
        });


//section 2
    $('#submit').click(function(){
        var inputText = $('#inputOne').val();

        if (inputText.length > 0) {
            alert(inputText);
        } else {
            alert('Please Enter Some Text');
        }
    });

//section 3
    $('#main-color-box').mouseover(function(){
        $(this).css('background-color','crimson');
    });
    $('#main-color-box').mouseout(function(){
        $(this).css('background-color','blue');
    });

//section 4
    $('#para-main').click(function(){
        var randomColor = {'color': '#' + (Math.random() * 0xFFFFFF << 0).toString(16)};
        $(this).css(randomColor);   
    });

//section 5
    $('#name-button').click(function(e){
        $('#name-holder').prepend("<span>Chris Seale </span>");
        $(this).off(e);
    });

//section 6
    $('#add-friend').click(function(){
        var friendArray = ['Ryan', 'Jessica', 'Matt', 'Scott', 'Butler', 'Clay', 'Lee', 'Mary', 'Brian', 'JD'];
        for (var i = 0; i < friendArray.length; i++) {
            var friend = $('<li></li>').text(friendArray[i]);
            
        // $(friendArray).each(function(){
            $('#friends').append(friend);  
        };
    });
});