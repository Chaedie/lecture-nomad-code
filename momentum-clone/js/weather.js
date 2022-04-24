function onGeoOk(position) {
  const API_KEY = "42d1f7e2c8c833f82ffe39fc73280c8f";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");

      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}
function onGeoError() {
  console.log("not good");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
