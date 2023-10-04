document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("cityInput");
    const searchButton = document.getElementById("searchButton");
    const mapFrame = document.getElementById("mapFrame");
    const weatherDetails = document.getElementById("weatherDetails");

    searchButton.addEventListener("click", function () {
        const cityName = cityInput.value;
        // You should replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key.
        const apiKey = 'f41a246a8f470c1ca2af0b4af29c7cc5';

        // Fetch weather data from OpenWeatherMap API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                // Display weather data
                weatherDetails.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Min Temperature: ${data.main.temp_min}°C</p>
                    <p>Max Temperature: ${data.main.temp_max}°C</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                    <p>Clouds: ${data.weather[0].description}</p>
                `;

                // Embed Google Map
                const lat = data.coord.lat;
                const lon = data.coord.lon;
                mapFrame.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzExLjEiTiAxN8KwMjEnMjMuMyJF!5e0!3m2!1sen!2sus!4v1627351781291!5m2!1sen!2sus`;
            })
            .catch((error) => {
                console.error("Error fetching weather data: ", error);
                weatherDetails.innerHTML = "City not found!";
            });
    });
});
