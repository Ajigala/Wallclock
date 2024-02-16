function setClock() {
  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");

  const hourAngle = (hour % 12) * 30 + minute * 0.5; // Each hour is 30 degrees, and each minute is 0.5 degrees
  const minuteAngle = minute * 6; // Each minute is 6 degrees
  const secondAngle = second * 6; // Each second is 6 degrees

  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}
// Update clock every second
setInterval(setClock, 1000);
