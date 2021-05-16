document.getElementById('button').addEventListener('click',randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer() {
  userGuess = document.getElementById("in").value
  userGuess = parseInt(userGuess)

  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  if (userGuess == randomNumber) {
    document.getElementById('a').innerHTML = "You win!"
  }
}