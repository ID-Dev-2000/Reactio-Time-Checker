const speedBox = document.getElementById('speedBox')
const testButton = document.getElementById('testButton')
const resultDisplay = document.getElementById('resultDisplay')

let timeValue1 = 0
let timeValue2 = 0
let randomTimeValue = 0
let checkValue = 0

function speedBoxEventListener() {
    timeValue2 = Date.now()
    speedBox.style.backgroundColor = 'White'
    resultDisplay.innerHTML = timeValue2 - timeValue1
    speedBox.removeEventListener('click', speedBoxEventListener)
    testButton.disabled = false
}

function handleReactionSpeed() {
    randomTimeValue = Math.floor(Math.random() * 1200)
    setTimeout(function() {
            timeValue1 = Date.now()
            speedBox.style.backgroundColor = 'Red'
            checkValue++
            if (checkValue == 1) {
                speedBox.addEventListener('click', speedBoxEventListener)
                checkValue = 0
        }
    }, randomTimeValue)
}

testButton.addEventListener('click', function() {
    testButton.disabled = true
    speedBox.style.backgroundColor = 'Blue'
    setTimeout(handleReactionSpeed, 800)
})

console.log(speedBox)
