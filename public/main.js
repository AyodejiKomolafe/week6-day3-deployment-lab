let billionaire = document.querySelector(".billionaire")
let goat = document.querySelector(".goat")
let dogz = document.querySelector(".dogz")

const billionaireAlert = evt => {
    alert("Billionaire #2920 of The Party Ape Billionaire Club. Minted over a year ago")
}

const goatAlert = evt => {
    alert("Goat Society #9598 of The GOAT Society. Minted over a year ago")
}


const dogzAlert = evt => {
    alert("Party Dog #225 of The Party Dog Social Club. Minted over a year ago")
}

billionaire.addEventListener("click", billionaireAlert)
goat.addEventListener("click", goatAlert)
dogz.addEventListener("click", dogzAlert)