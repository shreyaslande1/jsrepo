# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body')
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey';
    }else if(e.target.id === 'white'){
      body.style.backgroundColor = 'white';
    }else if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue';
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow';
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = 'purple';
    } 
    
  })
  
});
```

## project 2
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height`
  } 
  else if (weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight`
  } 
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`
  }
})


```
## project 3
```javascript
const clock = document.getElementById('clock');
setInterval(function(){
  let date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```
## project 4
```javascript
let randomnumber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas')
const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;
if(playgame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  })
}
function validateguess(guess){
  if(isNaN(guess)){
    alert('please enter a valaid number');
  }else if(guess<1){
    alert('please a number greater than 0');
  }else if(guess>100){
    alert('please enter a number less then 100')
  }else{
    prevguess.push(guess);
    if(numguess===11){
      displayguess(guess);
      displaymessage(`game over. random nmber was ${randomnumber}`);
      endgame();
    }else{
      displayguess(guess);
      checkhuess(guess);
    }
  }
}
function checkhuess(guess){
  if(guess===randomnumber){
    displaymessage(`you guessed it right`);
  }else if(guess<randomnumber){
    displaymessage('number is low');
  }else if(guess>randomnumber){
    displaymessage(`number is high`);
  }

}
function displayguess(guess){
  userinput.value = '';
  guessslot.innerHTML +=`${guess}, `;
  numguess++;
  remaining.innerHTML = `<h2>${11-numguess}</h2>`
}
function displaymessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
  userinput.value = ''
  userinput.setAttribute('disabled', '')
  p.classList.add('button') 
  p.innerHTML = `<h2 id = "newgame">start new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame(){
  
  const newgamebutton = document.querySelector('#newgame')
  document.querySelector('#newgame')
  newgamebutton.addEventListener('click',function(e){
    randomnumber = parseInt(Math.random()*100+1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `<h2>${11-numguess}</h2>`
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame = true;
  })
}
```