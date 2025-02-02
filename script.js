const apikey = "161ceebf373a66c5e08654f78e04ed18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Images/cloudy.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Images/heavy-rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "Images/snowy.png";
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }

    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Images/heavy-rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Images/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "Images/snowy.png";
    }

    document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        checkWeather(searchBox.value);
    }
});
