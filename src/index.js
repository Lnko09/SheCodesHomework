function displayWeather(response) {
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let descriptionElement = document.querySelector("#weather-description");
  let iconElement = document.querySelector("#weather-icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = response.data.temperature.humidity + "%";
  windElement.innerHTML = Math.round(response.data.wind.speed) + " km/h";
  descriptionElement.innerHTML = response.data.condition.description;
  iconElement.innerHTML = getWeatherEmoji(response.data.condition.icon);
}

function getWeatherEmoji(icon) {
  const weatherIcons = {
    "clear-sky-day": "☀️",
    "clear-sky-night": "🌙",
    "few-clouds-day": "⛅",
    "few-clouds-night": "🌥️",
    "scattered-clouds-day": "☁️",
    "scattered-clouds-night": "☁️",
    "broken-clouds-day": "☁️",
    "broken-clouds-night": "☁️",
    "shower-rain-day": "🌧️",
    "shower-rain-night": "🌧️",
    "rain-day": "🌦️",
    "rain-night": "🌦️",
    "thunderstorm-day": "⛈️",
    "thunderstorm-night": "⛈️",
    "snow-day": "❄️",
    "snow-night": "❄️",
    "mist-day": "🌫️",
    "mist-night": "🌫️"
  };
  return weatherIcons[icon] || "❓";
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiKey = "8ebde42a79fb6f1t0802633c6fo94685";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${8ebde42a79fb6f1t0802633c6fo94685}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

document.querySelector("#search-form").addEventListener("submit", search);

function formatDate(date) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let formattedDay = days[date.getDay()];
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  return `${formattedDay} ${hours}:${minutes}`;
}

document.querySelector("#current-date").innerHTML = formatDate(new Date());
