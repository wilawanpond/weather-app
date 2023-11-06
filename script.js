// API Keys and URL
const apiKey ="YOUR-API-KEY";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input"); // for users to type
const searchBtn = document.querySelector(".search button"); // for users to click
const weatherIcon = document.querySelector(".weather-icon"); // the weather icons

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); // ${...}` allows you to insert the value of variable into the string
    // fetch data and then wait until receive response before continue

    // Check for the typo for error status
    if(response.status == 404) { // error cannot be found
        document.querySelector(".error").style.display = "block"; // show the error message
        document.querySelector(".weather").style.display = "none"; // hide the weather information
    } else {
        var data = await response.json();
        // wait until the reponse parse to .json file and then continue

        // Update text in HTML file using .innerHTML
        document.querySelector(".city").innerHTML = data.name; // get name of the city replace it in city class
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; // get temperature of the city and replace in temp class
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; // get humidity of the city and replace in humidity class
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; // get wind speed of the city and replace in wind class

        // Update weather image according to weather condition
        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/clear.png";
        } 
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/clouds.png";
        } 
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/rain.png";
        } 
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/drizzle.png";
        } 
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/mist.png";
        } 

        document.querySelector(".weather").style.display = "block"; // display the weather information
        document.querySelector(".error").style.display = "none"; // don't display the error message in case the users already made
    }
}

searchBtn.addEventListener("click", ()=> { // when users click then the function triggers
    checkWeather(searchBox.value); // get the value from users when they type and pass that as a parameter to checkWeather function
})