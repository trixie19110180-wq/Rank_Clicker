let points = 0
const pointsDisplay = document.getElementById("points")
const clickButton = document.getElementById("clickButton")
clickButton.addEventListener("click", function() {
  points++
  pointsDisplay.innerText = points
})
