function showDateTime() {
  let date = new Date();
  let datetime = date.toLocaleString();
  document.getElementById("datetime").innerHTML = datetime;
  setInterval(showDateTime, 1000); // update every second
}
