let score = 0

const addPoint = event => {
  score += 1
  let message = `${score}`
  const teamOneScore = document.querySelector('.team1Score')
  teamOneScore.textContent = message
}
const subtractPoint = event => {
  score -= 1
  let message = `${score}`
  const teamOneScore = document.querySelector('.team1Score')
  teamOneScore.textContent = message
}

let team2Score = 0

const teamTwoAddPoint = event => {
  team2Score += 1
  let message = `${team2Score}`
  const teamTwoScore = document.querySelector('.team2Score')
  teamTwoScore.textContent = message
}
const teamTwoSubtractPoint = event => {
  team2Score -= 1
  let message = `${team2Score}`
  const teamTwoScore = document.querySelector('.team2Score')
  teamTwoScore.textContent = message
}

const main = () => {
  const teamOneAdd = document.querySelector('.team-1-add-1-button')
  teamOneAdd.addEventListener('click', addPoint)

  const teamOneSubtract = document.querySelector('.team-1-subtract-1-button')
  teamOneSubtract.addEventListener('click', subtractPoint)

  const teamTwoAdd = document.querySelector('.team-2-add-1-button')
  teamTwoAdd.addEventListener('click', teamTwoAddPoint)

  const teamTwoSubtract = document.querySelector('.team-2-subtract-1-button')
  teamTwoSubtract.addEventListener('click', teamTwoSubtractPoint)
}
document.addEventListener('DOMContentLoaded', main)
