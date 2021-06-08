//Geolocation API
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  document.querySelector('#find-me').addEventListener('click', geoFindMe);

//Define Elements--better to declare with const? can always go and change
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Show todays date and time 
var today = new Date();
// get the date and time
var now = today.toLocaleString();


//Add to List
function addToDo(toDo) {
  
  const postion = "beforehand";
  list.insertAdjacentHTML(position, item);
};