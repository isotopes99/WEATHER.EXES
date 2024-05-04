document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const cityNameElement = document.getElementById("cityName");
  
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    const city = document.getElementById("cityInput").value;
    fetchWeather(city);
    cityNameElement.textContent = `Weather for ${city}`;
  });

  fetchWeather("Delhi"); // Initial fetch for default city
});

// ... rest of your code remains the same ...

async function fetchWeather(city) {
  const apiKey = '3820697b33msh62fb61567b2320fp1194d0jsnd5659ffe2a2c';
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse JSON data
    updateWeatherData(data);
  } catch (error) {
    console.error(error);
  }
}

function updateWeatherData(data) {
  document.getElementById('temp').textContent = data.temp;
  document.getElementById('feels_like').textContent = data.feels_like;
  document.getElementById('humidity').textContent = data.humidity;
  document.getElementById('wind_speed').textContent = data.wind_speed;
  document.getElementById('wind_degrees').textContent = data.wind_degrees;
  document.getElementById('sunrise').textContent = data.sunrise;
  document.getElementById('sunset').textContent = data.sunset;
  document.getElementById('cloud_pct').textContent = data.cloud_pct;
  document.getElementById('max_temp').textContent = data.max_temp;
}


