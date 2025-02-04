
function searchHandle(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#city");
    let city = searchInput.value;
}
let searchForm = document.querySelector(".form-box");
searchForm.addEventListener("submit", searchHandle);

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()]

   let p = document.querySelector("#specDay");
   p.innerHTML = `${day}`;
   let watch = document.querySelector("#time");
   watch.innerHTML = `${hour}:${minutes}`;

let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=713a631324o2dtc013aaf4374b846544&units=metric";
axios.get(apiUrl).then(displayTemperature);

function displayTemperature(response) {
    console.log(response)
    let cityName = document.querySelector(".place");
    cityName.innerHTML = response.data.city;

    let temperature = Math.round(response.data.temperature.current);
    let description = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;

    let temp = document.querySelector(".weather-temp-number");
    temp.innerHTML = `${temperature}`

    let explain = document.querySelector(".detail");
    explain.innerHTML = `${description}`;

    let damp=document.querySelector(".percentage")
    damp.innerHTML = `${humidity}%`
    
    let windSpeed = document.querySelector(".km")
    windSpeed.innerHTML=`${wind}km/h`
}
