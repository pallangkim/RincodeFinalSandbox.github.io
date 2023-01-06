const API_KEY = "05e42d35777f58c2ddace1716daf4e98";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//    js will call url for you
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        console.log(weather,city);
     });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);