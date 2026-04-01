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