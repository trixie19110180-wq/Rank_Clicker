let points = 0
let upgradeAmt = 1
let upgradeView = 1
const pointsDisplay = document.getElementById("points")
const upgradeViewDisplay = document.getElementById("upgradeViewDisplay")
const clickButton = document.getElementById("clickButton")
const upgradeClick = document.getElementById("upgradeClick")
clickButton.addEventListener("click", function() {
  points += upgradeAmt
  pointsDisplay.innerText = points
})

upgradeClick.addEventListener("click", function() {
  upgradeAmt *= 1.2
  upgradeView = Math.ceil(upgradeAmt)
  upgradeViewDisplay.innerText = "Upgrade:"+upgradeAmt
})
