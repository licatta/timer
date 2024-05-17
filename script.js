const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds")

const main = document.getElementById("main")

let previousDay

function countdown() {

    const graduationDate = new Date("4 dec 2024 00:00:00")
    const currentDate = new Date()

    const totalSeconds = (graduationDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    if (days !== previousDay) {
        previousDay = days;
        onDayChange(); // Chamar a função quando o dia muda
    }

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formaTime(hours);
    minsEl.innerHTML = formaTime(mins);
    secondsEl.innerHTML = formaTime(seconds);

}

function formaTime(time) {
    return time < 10 ? `0${time}` : time;
}

function onDayChange() {
    const currentDay = new Date().getDate()
    
    if (main.className != `bg${currentDay}`) {
        main.className = `bg${16}`
    }
}

countdown()

setInterval(countdown, 1000)