var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/react.png') {
      myImage.setAttribute ('src','images/react-2.png');
    } else {
      myImage.setAttribute ('src','images/react.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Начало работы, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} 
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Начало работы, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
};