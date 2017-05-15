// section 1

var btn = document.createElement('button');
var btnText = document.createTextNode('Touch It!');
btn.appendChild(btnText);

document.addEventListener('DOMContentLoaded',function() {  
    container.appendChild(btn);  
    btn.addEventListener('click', alertNice);
        function alertNice() {
            alert('You did it! You clicked a button! A true hero you are!');
        };
// });

//section 2
var submitButton = document.getElementById('submit');
var inputText = document.getElementById('inputOne').value;
submitButton.addEventListener('click', alertInput);
    
function alertInput() {
    if (inputText.length > 0) {
        alert(inputText);
    } else {
        alert('Please enter some text.');
    };
};

//section 3
var mainColorBox = document.getElementById('main-color-box');
mainColorBox.addEventListener('mouseover', changeColor);
    function changeColor(e){
        e.target.style.backgroundColor = "red";
    };
mainColorBox.addEventListener('mouseout', changeColorBack);
    function changeColorBack(e) {
        e.target.style.backgroundColor = 'blue';
    };

//section 4
colorArray = ["blue", "green", "orange", "purple", "yellow", "white", "red"]
var paraMain = document.getElementById('para-main');
paraMain.addEventListener('click', colorChange);
function colorChange() {
    var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    this.style.color = randomColor;
};

//section 5
var nameButton = document.getElementById('name-button');
var emptyDiv = document.getElementById('name-holder');
var spanName = document.createElement('span');
var spanText = document.createTextNode('Chris Seale');
spanName.appendChild(spanText);
nameButton.addEventListener('click', addName);
    function addName() {
        emptyDiv.appendChild(spanName);
        nameButton.removeEventListener('click', addName);
        nameButton.addEventListener('click', removeName);
    }
    function removeName() {
        emptyDiv.removeChild(spanName);
        nameButton.removeEventListener('click', removeName);
        nameButton.addEventListener('click', addName);
    }

//section 6
var addFriendButton = document.getElementById('add-friend');
var friends = document.getElementById('friends');

var friendArray = ['Ryan', 'Jessica', 'Matt','Scott','Butler', 'Clay', 'Lee', 'Mary', 'Brian', 'JD'];

addFriendButton.addEventListener('click', addFriend);
    function addFriend() {
        for(var i = 0; i < friendArray.length; i++) {
            var friendIndex = friendArray[i];
            var listItem = document.createElement('li');
            listItem.innerHTML = friendIndex;
            friends.appendChild(listItem);
        }
    }

});