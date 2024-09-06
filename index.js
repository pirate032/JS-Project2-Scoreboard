let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0
homeScore.textContent = homeCount
guestScore.textContent = guestCount


function incrementOneHome() {
    homeCount += 1
    homeScore.textContent = homeCount
}
function incrementTwoHome() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function incrementThreeHome() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function incrementOneGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}
function incrementTwoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}
function incrementThreeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}