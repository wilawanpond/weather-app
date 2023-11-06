<p align ="center">
    <img src="banner/Weather App.png">
</p>

## Project Overview 💗


https://github.com/wilawanpond/weather-app/assets/79263616/a44276cb-592f-4408-93a8-e48642ba46d6


This is a super simple real-time weather app that you can look at the weather condition, current temperature, humidity, and wind speed！I made this project with HTML, CSS, JavaScript, and using [OpenWeatherMap API](https://openweathermap.org/api). This is also my first time playing around with the concept of using API, it was super fun trying something new! I commented the code thoroughly, so you guys can follow along while understanding the functionality of the code.

Here are what I have learned from this project:  
* Getting to know more about the API concept
* Using JavaScript with HTML and CSS
* It takes time to really understand something :)

## Setting Up Your API Key 💗
I use the free subscription plan, so there are some limitations. I recommend you to get your own API from this [OpenWeatherMap API](https://openweathermap.org/api) website.  
After you get your API key, you can reaplce it in "YOUR-API-KEY" in [script.js](script.js) file as shown in code below;  
```JavaScript
const apiKey ="YOUR-API-KEY";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
```

### For the `apiURL` Link
In the url, I also added `units=metric` to convert the temperature to degree celcius, feel free to edit it to your choice.  

## Installation 💗
1. Clone the repository of this project, open your terminal and run the following command  
```
git clone https://github.com/wilawanpond/weather-app.git
```
2. Set up your API key in `script.js` file.
3. Open the `index.html` file in your web browser to view the project.

## Contrinuting 💗
If you would like to submit an improvement to this project, please submit an issue using the issues tab first (in detailed explanation must be nice) and if you would like to submit a pull request, please reference the issue you created.

## License 💗
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
