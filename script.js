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


const getWeather = async (lat, lng) => {
    try {
        const results = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
        const data = await results.json();

        function getWindDirection(degrees) {
            const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];

            const index = Math.round(degrees / 45) % 8;

            return directions[index];
        };

        const TEMPERATURE = data.current_weather.temperature;
        const DESCRIPTION = weatherState[data.current_weather.weathercode];
        const WINDDIRECTION = getWindDirection(data.current_weather.winddirection);
        const WINDSPEED = data.current_weather.windspeed;


        return data;
    } catch (error) {
        console.log(error);
    }
};



