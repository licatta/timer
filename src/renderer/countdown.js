const targetDate = new Date("2024-12-04T00:00:00");
const elements = {
  days: document.getElementById("days"), hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"), seconds: document.getElementById("seconds"),
};

const format = (value) => String(value).padStart(2, "0");

function updateCountdown() {
  const totalSeconds = Math.floor(Math.max(0, targetDate.getTime() - Date.now()) / 1000);
  elements.days.textContent = Math.floor(totalSeconds / 86400);
  elements.hours.textContent = format(Math.floor(totalSeconds / 3600) % 24);
  elements.minutes.textContent = format(Math.floor(totalSeconds / 60) % 60);
  elements.seconds.textContent = format(totalSeconds % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);
