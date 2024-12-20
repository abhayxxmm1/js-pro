# Projects related to DOM in js-pro

A code repo for JavaScript series

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rtkds2?file=index.html)

# Solution code

## project 1 solution

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// events moving cursor, tab ko close krna bhi ek event hai, jabhi app click kar skte hai ham event ko function mai le sakte hai orrr use sath activity kar sakte hai

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e /* its a name */) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");

// This use case will give u empty value height outside form coz it stores zero when the page is reloded
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(
    /*to take value in integer it's a element*/ document.querySelector(
      "#height"
    ).value
  );
  // input ki values lene keliye
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // Checks application ✅
  if (height === "" || height < 0 || isNaN(height) /* not a number */) {
    results.innerHTML = "please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give me avalid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## project 3 solution

```javascript
const clock = document.getElementById("clock");
// document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 solution

```JavaScript


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

## project 6 solution

```javascript

const randomColour = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  // jab null लागते है तब safety check करणा जरुरी है
  // becoz of this we will not overutlize memory or no use case are there
  if (!intervalId) {
    intervalId = setInterval(chandeBgColor, 0.1);
  }

  function chandeBgColor() {
    document.body.style.backgroundColor = randomColour();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  // कॉर्नोर cases ही सिखना project है
  // ham bar bar overwrite karrahe hai intervalId ko i some cases
  // so need to write cleaner code by fulsh out the intervalId
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

```


## project 5 solution
``` javascript


```