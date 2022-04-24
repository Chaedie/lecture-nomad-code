const clock = document.querySelector("h3#clock");

const today = document.querySelector("h3#date");

function getDate() {
  const date = new Date();
  var options = { weekday: "long" };
  const days = new Intl.DateTimeFormat("ko-KR", options).format(date);

  let months = String(date.getMonth()).padStart(2, "0");
  let dates = String(date.getDate()).padStart(2, "0");

  today.innerText = `${months}월 ${dates}일 ${days}`;
}

function getClock() {
  const date = new Date();

  let hours = String(date.getHours()).padStart(2, " ");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}시 ${minutes}분`;
}

getDate();
getClock();
setInterval(getClock, 1000);
setInterval(getDate, 100000);
