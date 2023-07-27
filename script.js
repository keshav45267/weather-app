
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6d11afaf16mshc6be3a86b7fe757p175dd1jsn399396307857",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{ 

  cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    // cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi");

const getWeather2= (city2,n) =>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2,options)
  .then((response) => response.json())
  .then((response) => {
  console.log(response);

  document.getElementById("temp"+n).innerHTML = response.temp;
  document.getElementById("feels_like"+n).innerHTML = response.feels_like;
  document.getElementById("humidity"+n).innerHTML = response.humidity;
  document.getElementById("max_temp"+n).innerHTML = response.max_temp;
  document.getElementById("min_temp"+n).innerHTML = response.min_temp;
  document.getElementById("sunrise"+n).innerHTML = response.sunrise;
  document.getElementById("sunset"+n).innerHTML = response.sunset;
  document.getElementById("wind_degrees"+n).innerHTML = response.wind_degrees;
  document.getElementById("wind_speed"+n).innerHTML = response.wind_speed;
  

  }).catch((err) => console.error(err));
}

let x=document.getElementsByClassName("city");

console.log(x.length);
console.log(x);
for(let i=0;i<x.length;i++){
  y=x[i].innerHTML;
  getWeather2(y,i+3);
}
