##Weather App
# 🌦️ Weather & Maps App

A modern web application that integrates the **Google Maps API** and the **Open-Meteo API** to provide precise weather forecasts based on exact user-selected locations.

---

## 📝 Project Description
The goal of this project is to develop a tool that allows users to search for any location worldwide using an **intelligent autocomplete system**. Once a location is selected, the application:

1.  **Centers the map** on the exact coordinates using the Google Maps JavaScript API.
2.  **Fetches real-time meteorological data** via the Open-Meteo API.
3.  **Displays detailed information** (temperature, wind, description) accompanied by dynamic icons.

---

## 🚀 Key Features

* **Intelligent Search (Autocomplete):** Implementation of `google.maps.places.Autocomplete` for real-time location suggestions.
* **Interactive Map:** Dynamic visualization of the selected location with custom markers and automated panning.
* **Real-Time Weather:** Retrieval of weather data (temperature, wind speed, wind direction) using latitude and longitude.
* **Adaptive UI:** Weather descriptions and icons change dynamically according to the **WMO (World Meteorological Organization)** `weathercode`.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5 / CSS3** | Structure and custom styling for the Google Autocomplete dropdown. |
| **JavaScript (ES6+)** | API consumption (`fetch`/`async-await`) and DOM manipulation. |
| **Google Maps API** | Maps JavaScript API & Places Library (Autocomplete). |
| **Open-Meteo API** | High-resolution weather data (Free tier). |
| **Material Symbols** | Dynamic iconography for weather states. |

---

## 📖 How to Use

1.  **Search for a location:** Start typing in the search bar. You will see automatic suggestions provided by Google.
2.  **Select a place:** Click on a suggestion. The map will automatically fly to that location.
3.  **Check the Weather:** The information cards will instantly update with the current temperature, sky description, and wind conditions.

---


## 🗺️ Standards and Logic

* **Weather Codes:** Uses the **WMO** standard to translate numerical codes into human-readable text (e.g., Code 0 = Clear Sky).
* **Wind Direction:** Degree values ($0^\circ - 360^\circ$) are converted into cardinal points (North, East, etc.) using a custom mathematical offset.

---

## ✒️ Author

* **Eduardo Meneses** - *Full Stack Developer* 

---
*This project was developed as part of a web integration exercise.*
