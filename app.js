// A callback function is a function passed an argument to another function
// function Displayer (Calc) {
  
// }

// function Calculator (num1, num2, rudisha) {
//   let sum = num1 + num2
//   rudisha(sum)
// }

// Calculator(9, 9, Displayer);

setInterval(myTime, 1000);

function myTime() {
  let hour = new Date()
  document.getElementById('lala').textContent = `${hour.getHours()}:${hour.getMinutes()}:${hour.getSeconds()}`
  if (hour.getMinutes() < 30) {
    document.getElementById('to').innerHTML= `It is ${hour.getMinutes()} minutes past the hour`
  } if (hour.getMinutes() == 30) {
    document.getElementById('to').innerHTML = `It is half past the hour`
  }
  else {
    document.getElementById('to').innerHTML = `It is ${60-hour.getMinutes()} minutes to the hour`
  }
}



