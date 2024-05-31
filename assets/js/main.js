const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "82b39d5e5161b42d81f8e662f206208c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://live.staticflickr.com/7687/17129781308_c06c794492.jpg";
            break;
        case 'Clear':
            weather_img.src = "https://wallpapercave.com/wp/7rhrsIf.jpg";
            break;
        case 'Rain':
            weather_img.src = "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xMDU1MzA2MS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1ODQ0MTMxMX0.0YyTMt8Q7qOap3F_0Nza-ONpwI0e4qyCO5Kifs_mTwI/img.jpg?width=980";
            break;
        case 'Mist':
            weather_img.src = "https://wallpapercave.com/wp/wp4155388.jpg";
            break;
        case 'Snow':
            weather_img.src = "https://wallpaperaccess.com/full/4414046.jpg";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
