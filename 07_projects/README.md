# Projects related to DOM in js-pro
A code repo for JavaScript series 
## project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rtkds2?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// events moving cursor, tab ko close krna bhi ek event hai, jabhi app click kar skte hai ham event ko function mai le sakte hai orrr use sath activity kar sakte hai

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e /* its a name */) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project 2

```javascript

const form = document.querySelector('form');

// This use case will give u empty value height outside form coz it stores zero when the page is reloded
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(
    /*to take value in integer it's a element*/ document.querySelector('#height').value); 
  // input ki values lene keliye
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('results');

  // Checks application ✅
  if (height === '' || height < 0 || isNaN(height) /* not a number */) {
    results.innerHTML = 'please give a valid height';
  }
});


```