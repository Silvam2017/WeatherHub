var cityInputEl = document.getElementById("city-form"); 

var myKey = "7aeefed14e670086fed17e50b13e3bf5"

var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl + "&units=imperial&appid=" + myKey;

var getCurrentWeather = function() {
    event.preventDefault();
    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    });
};

cityInputEl.addEventListener("submit", getCurrentWeather);