// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Function to Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // Twelve Hour Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Function to Add Zero to minutes and seconds
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Function to Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url(https://placeimg.com/640/480/nature)";
    greeting.textContent = 'Good Morning';
  } else if(hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url(https://placeimg.com/640/480/people)";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'white';
  } else {
    // Evening
    document.body.style.backgroundImage = "url(https://placeimg.com/640/480/arch)";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

// Function to Get Name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Function to Set name
function setName(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
    localStorage.setItem('name', e.target.innerText);
    name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Function to Get Focus
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Function to Set focus
function setFocus(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
    localStorage.setItem('focus', e.target.innerText);
    focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

// Add Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
