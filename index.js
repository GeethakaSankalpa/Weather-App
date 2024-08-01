const apiKey = "ae042a47d8b750c31ae18b3bc2e2e7a6";      // API Key for open weather map API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";   // base URL

const searchBox = document.querySelector(".search input");  // selects the input field for searching cities
const searchButton = document.querySelector(".search button");  // selects search button
const weatherIcon = document.querySelector(".weather-icon");   // selects weather icon

/**
 * Async function to check the weather based on the user input city.
 * @param {String} city - The city name to check the weather for 
 */
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);   // fetches weather data from API

    //check response status
    if(response.status == 404){     // show error message and hide weather details
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        searchBox.value = "";   // clear search box
    } else {
        var data = await response.json();

        // updates city name, temperature, humidity and wind speed
        document.querySelector(".city").innerHTML= data.name;     
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '°c';     
        document.querySelector(".humidity").innerHTML= data.main.humidity + '%';    
        document.querySelector(".wind").innerHTML= data.wind.speed + 'km/h';   

        // update weather icons based on weather condition
        if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "images/clouds.png";
          weatherIcon.alt="Cloudy Weather";
        } else if (data.weather[0].main == "Clear"){
          weatherIcon.src = "images/clear.png";
          weatherIcon.alt="Clear Sky";
        } else if (data.weather[0].main == "Rain"){
          weatherIcon.src = "images/rain.png";
          weatherIcon.alt="Rainy Weather";
        } else if (data.weather[0].main == "Drizzle"){
          weatherIcon.src = "images/drizzle.png";
          weatherIcon.alt="Drizzle";
        } else if (data.weather[0].main == "Mist"){
          weatherIcon.src = "images/mist.png";
          weatherIcon.alt="Misty Weather";
        } else if (data.weather[0].main == "Snow"){
          weatherIcon.src = "images/drizzle.png";
          weatherIcon.alt="Snowy Weather";
        }

        // show weather details and hides error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";     
    }
}

/**
 * Add event listner to search button
 * calls the check weather function with the search box value when clicked.
 */
searchButton.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
