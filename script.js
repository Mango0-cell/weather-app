const weatherState = {
    0: "Clear sky",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Cloudy",
    45: "Fog",
    48: "Depositing rime",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate",
    55: "Drizzle: Dense",
    56: "Freezing drizzle: Light intensity",
    57: "Freezing drizzle: Dense intensity",
    61: "Rain: heavy",
    63: "Rain: moderate",
    66: "Freezing rain: light intensity",
    67: "Freezing rain: light heavy",
    71: "Snowfall: light",
    73: "Snowfall: moderate",
    75: "Snowfall: heavy",
    77: "Snow grains (Snow grains)",
    80: "Rain: light",
    81: "Rain: moderate",
    82: "Rain: Violent",
    85: "Snowfalls: light",
    95: "Thunderstorm: Light or moderate",
    96: "Severe storm",
    99: "Severe storm"
};

const weatherIcons = {
    0: "sunny",
    1: "brightness_low",
    2: "partly_cloudy_day",
    3: "cloud",
    45: "foggy",
    48: "mist",
    51: "rainy_light",
    53: "rainy",
    55: "rainy",
    56: "ac_unit",
    57: "ac_unit",
    61: "rainy_heavy",
    63: "rainy",
    66: "cloudy_snowing",
    67: "cloudy_snowing",
    71: "snowing",
    73: "snowing",
    75: "snowing_heavy",
    77: "grain",
    80: "rainy_light",
    81: "rainy",
    82: "rainy_heavy",
    85: "snowing",
    95: "thunderstorm",
    96: "thunderstorm",
    99: "thunderstorm"
};

const windIconMap = {
    'North': 'north',
    'North-East': 'north_east',
    'East': 'east',
    'South-East': 'south_east',
    'South': 'south',
    'South-West': 'south_west',
    'West': 'west',
    'North-West': 'north_west'
};

const temperatureIcons = {
    freezing: "ac_unit",
    cold: "thermostat_auto",
    mild: "device_thermostat",
    hot: "thermostat",
    extreme: "heat_gradient"
};


const getWeather = async (lat, lng) => {
    try {
        const results = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
        const data = await results.json();

        function getWindDirection(degrees) {
            const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];

            const index = Math.round(degrees / 45) % 8;

            return directions[index];
        };

        function getTemperatureIcon(temp) {
            if (temp <= 0) return temperatureIcons.freezing;
            if (temp > 0 && temp <= 15) return temperatureIcons.cold;
            if (temp > 15 && temp <= 25) return temperatureIcons.mild;
            if (temp > 25 && temp <= 35) return temperatureIcons.hot;
            if (temp > 35) return temperatureIcons.extreme;
            return "thermostat";
        }

        const TEMPERATURE = data.current_weather.temperature;
        const DESCRIPTION = weatherState[data.current_weather.weathercode];
        const WINDDIRECTION = getWindDirection(data.current_weather.winddirection);
        const WINDSPEED = data.current_weather.windspeed;
        const STATEIMAGE = weatherIcons[data.current_weather.weathercode];
        const ROWIMAGE = windIconMap[WINDDIRECTION];
        const TEMPIMAGE = getTemperatureIcon(data.current_weather.temperature);



        let weatherCards = `<h2>hello!, Welcome to Wheather App =|</h2>

            <h3>Search for any city to get the current weather information :D
            </h3>

            <div class="cards">
                <div class="card">
                    <h4>Temperature<span class="material-symbols-outlined">${TEMPIMAGE}</span></h4>
                    <p id="temperature">${TEMPERATURE} °C</p>
                </div>
                <div class="card">
                    <h4>Description<span class="material-symbols-outlined">${STATEIMAGE}</span></h4>
                    <p id="description">${DESCRIPTION}</p>
                </div>
                <div class="card">
                    <h4>Wind Direction<span id="wind-direction-icon" class="material-symbols-outlined">${ROWIMAGE}</span></h4>
                    <p id="wind-direction">${WINDDIRECTION}</p>
                </div>
                <div class="card">
                    <h4>Wind Speed<span class="material-symbols-outlined">air</span></h4>
                    <p id="wind-speed">${WINDSPEED} km/h</p>
                </div>
            </div> 
            <img class="background" src="/assets/bubbles-6.jpg" alt="Background">
`;

        document.querySelector(`.cards-container`).innerHTML = weatherCards;

        return data;
    } catch (error) {
        console.log(error);
    }
};