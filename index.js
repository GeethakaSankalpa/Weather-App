const apiKey = "ae042a47d8b750c31ae18b3bc2e2e7a6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

const searchBox = document.querySelector(".search input");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
//     const data=0;
//     try {
//     const response = await fetch(apiURL + `&appid=${apiKey}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }

  document.querySelector(".city").innerHTML= data.name;     // updates city name
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '°c';     // updates temperature
  document.querySelector(".humidity").innerHTML= data.main.humidity + '%';     // updates humidity
  document.querySelector(".wind").innerHTML= data.wind.speed + 'km/h';     // updates wind speed
}

checkWeather();