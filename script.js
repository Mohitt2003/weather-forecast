const apiKey = "5882d6efb4c4e503cf93f38086c237f2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


  if (data.weather[0].main === "clear") {
    weatherIcon.src = "imgs/sun.png";
  }
  else if (data.weather[0].main === "Smoke") {
    weatherIcon.src = "smoke.png";
  }
  else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "rain.png";
  }
  else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "drizzle.png";
  }
  else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "snow.png";
  }
  else if (data.weather[0].main === "Wind") {
    weatherIcon.src = "wind.png";
  }
  else if (data.weather[0].main === "Humidity") {
    weatherIcon.src = "humidity.png";
  }  else if (data.weather[0].main === "Cloud") {
    weatherIcon.src = "cloudy.png";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

})