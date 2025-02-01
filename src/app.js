let searchForm = document.querySelector("#form-box");
searchForm.addEventListener("submit", searchHandle);

function searchHandle(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#city");
    let cityName=document.querySelector("h1")
    cityName.innerHTML = searchInput.value;
}