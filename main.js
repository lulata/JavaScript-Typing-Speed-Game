window.addEventListener('load', init);

//Globals

// Available Levels
const levels = {
  easy: 6,
  medium: 4,
  hard: 2,
  extrahard: 1
};

// To change level
const currentLevel = levels.medium;


let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Init game
function init() {
 //Show number of seconds
 seconds.innerHTML = currentLevel;
 //Load word from array
 showWord(words);
 //Start matching on word input
 wordInput.addEventListener('input', startMatch);
 //Call coutdown every second
 setInterval(countDown, 1000);
 //Check game status
 setInterval(checkStatus, 50);
}

//Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1) {
    score.innerHTML = 0;
  }
  scoreDisplay.innerHTML= score;
}

//Match current word to word Input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct';
    return true;
  }else {
    message.innerHTML = 'False';
    return false;
  }
}

//pick and show random word
function showWord(words) {
  //Generate random array index
  const ranIndex = Math.floor(Math.random() * words.length);

  //Output a random word
  currentWord.innerHTML = words[ranIndex];
}

//countdown timer
function countDown() {
  //Make sure the time hasnt run out
  if (time>0) {
    time--;
  }else if (time === 0) {
    isPlaying = false;
    score = -1;
  }

  timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over';
  }
}
