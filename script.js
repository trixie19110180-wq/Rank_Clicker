let points = 0
let upgradeAmt = 1
const pointsDisplay = document.getElementById("points")
const upgradeViewDisplay = document.getElementById("upgradeViewDisplay")
const clickButton = document.getElementById("clickButton")
const upgradeClick = document.getElementById("upgradeClick")

clickButton.addEventListener("click", function() {
  points += upgradeAmt
  pointsDisplay.innerText = points.toFixed(2)
})

upgradeClick.addEventListener("click", function() {
  upgradeAmt = Math.round(upgradeAmt * 1.2 * 100) / 100
  upgradeViewDisplay.innerText = "Upgrade: " + upgradeAmt.toFixed(2)
})
