function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const temperatureElement = document.getElementById('temperature');
            temperatureElement.textContent = `Temperature  ${data.main.temp} °C`;

            const feelLikeElement = document.getElementById('feel_like');
            feelLikeElement.textContent = `Feels like ${data.main.feels_like} °C`;

            const temp_minElement = document.getElementById('temp_min');
            temp_minElement.textContent = `Min Temperature  ${data.main.temp_min} °C`;

            const temp_maxElement = document.getElementById('temp_max');
            temp_maxElement.textContent = `Max Temperature  ${data.main.temp_max} °C`;

            const pressure = document.getElementById('pressure');
            pressure.textContent = `Pressure  ${data.main.pressure} Pa`;

            const humidity = document.getElementById('humidity');
            humidity.textContent = ` Humidity  ${data.main.humidity} g / kg`;

            const speed = document.getElementById('speed');
            speed.textContent = `Wind speed  ${data.wind.speed} m/s`;
            console.log(temperatureElement)
            console.log(feelLikeElement)
            console.log(temp_minElement)
            console.log(temp_maxElement)
            console.log(pressure)
            console.log(humidity)


        })
        .catch((error) => {
            alert('incorrect input . . . ')
        });
}



