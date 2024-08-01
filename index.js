const apiKey = "ae042a47d8b750c31ae18b3bc2e2e7a6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");  // selects the input field 
const searchButton = document.querySelector(".search button");  // when search button is selected, the city name should be passed to method
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();
    
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

  // update weather icons
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow"){
    weatherIcon.src = "images/drizzle.png";
  }

  // show details
  document.querySelector(".weather").style.display = "Block";
}

searchButton.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
