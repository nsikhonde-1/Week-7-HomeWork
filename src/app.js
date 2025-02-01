let searchForm = document.querySelector("#form-box");
searchForm.addEventListener("submit", searchHandle);

function searchHandle(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#city");
    let cityName=document.querySelector("h1")
    cityName.innerHTML = searchInput.value;
}

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()]

   let p = document.querySelector("#specDay");
   p.innerHTML = `${day}`;
   let watch = document.querySelector("#time");
   watch.innerHTML = `${hour}:${minutes}`;
