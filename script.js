// Array of messages about programming languages
var messages = [
    "Sorry for being late 😅.",
    "Thank you for being the first girl who talked to me in college 💖.",
    "I remember that day when you asked me... 🤔",
    "Hey Harshit, 'Tell me how to find the pedal equation of a curve? 📐'",
    "Thank you! You always inspire me... 🌟",
    "Now we are in the last year of college... 🎓",
    "We all miss each other... 😢",
    "And also, thank you for being my friend... 👫",
    "And thank you for wishing me an early 'Happy birthday'... 🎉",
    "Tell me, is this 'rukha sukha' thank you or not! 😄",
    "I think we have to go out for a movie after college? 🍿🎬",
    "Yes or No? 🤔"
];


  // Get the container for Tinder cards
  var tinderCardsContainer = document.getElementsByClassName("tinder--cards")[0]


  // Function to create and append a new Tinder card with a message
  function createTinderCard(message) {
    var newCard = document.createElement('div');
    newCard.className = 'tinder--card';
    newCard.style.backgroundColor = getRandomColor();

    var heading = document.createElement('h3');
    heading.textContent = message;

    newCard.appendChild(heading);
    tinderCardsContainer.appendChild(newCard);
  }
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // Iterate through the messages array and create Tinder cards
  messages.forEach(function(message) {
    createTinderCard(message);
  });

