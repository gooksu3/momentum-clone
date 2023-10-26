function onGeoOk(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    const API_KEY="22b2f37b24cdea80744e71eac949169d"
    const url=`https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{console.log(data.name,data.weather[0].main)});
    
}

function onGeoError(){
    alert("Can't find you. No weather information for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);