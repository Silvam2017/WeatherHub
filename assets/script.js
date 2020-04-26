var cityInputEl = document.getElementById("city-form");

var inputSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();
};

var getCurrentWeather = function(city) {
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=7aeefed14e670086fed17e50b13e3bf5"

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
cityInputEl.addEventListener("submit", inputSubmitHandler);