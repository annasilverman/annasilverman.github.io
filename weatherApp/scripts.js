// weather API gloabal variables
const weatherURL = 'https://weatherapi-com.p.rapidapi.com/forecast.json?days=3&q=';
const weatherOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd6112b66c3mshba209df32ba0ae9p19b2f0jsnfef19801d0d0',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};


let scrollingBox;
let offsetLeftStart;
let scrollLeftstart;
let isMoving;

//function to get remote json data
async function getData(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw (response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

//update weather idsplay in DOM based on passed obejct
function updateWeather(weatherObject) {
    //updates location
    document.querySelector("#location").innerHTML = weatherObject.location.name;
    //updating curent temp img the api icons are ugly :(
    document.querySelector("#currentweathericon").innerHTML = "<img id='currentweatherimg' src='" + weatherObject.current.condition.icon + "'>";
    //updating currentTemp
    document.querySelector(".currentTemp span").innerHTML = weatherObject.current.temp_f;
    document.querySelector(".currentDescription").innerHTML = weatherObject.current.condition.text;

    //updates wind and humidity
    document.querySelector(".humidity span").innerHTML = weatherObject.current.humidity;
    let windspeed = weatherObject.current.wind_mph;
    let winddirection = weatherObject.current.wind_dir;
    document.querySelector(".windDirection").innerHTML = windspeed + "mph" + "<br>" + winddirection;

    //setting compass image direction i dont think its right but im happy the code worked
    let compassDegree = weatherObject.current.wind_degree;
    document.querySelector("#compassimg").style.setProperty('--compassDegree', `${compassDegree}deg`);

    //updates future days
    let futureDays = document.querySelectorAll(".futureDay");
    for (i = 0; i < futureDays.length; i++) {

        //updates future icons,weather, temp, and condtion
        futureDays[i].querySelector(".futureicon").innerHTML = "<img id='futureIcon' src='" + weatherObject.forecast.forecastday[i].day.condition.icon + "'>";
        futureDays[i].querySelector(".futureTemp").innerHTML = weatherObject.forecast.forecastday[i].day.maxtemp_f;
        futureDays[i].querySelector(".futureStatus").innerHTML = weatherObject.forecast.forecastday[i].day.condition.text;
      
        //updates future wind direction
        let windspeed = weatherObject.forecast.forecastday[i].day.maxwind_mph;
        futureDays[i].querySelector(".futureWind").innerHTML = windspeed + "mph";
    }
}



//wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

//ipLookupdata
let ipLookupURL = "https://api.ipify.org/?format=json";
let ipLookupOptions = {};

//use ajax to fetch IP in JSON font 
getData(ipLookupURL, ipLookupOptions).then(function(result){

    //adds IP number to the weatherURL
    let weatherLookupURL=weatherURL + result.ip;
    console.log(weatherLookupURL)
    //use IP number to lookup weather
    getData(weatherLookupURL, weatherOptions).then(function(weatherResult){
        console.log(weatherResult);
        updateWeather(weatherResult);
    });
});

    //make the location button show modal popups
    document.querySelector("#findLocation").addEventListener(".click", function(){
        document.body.classList.toggle("showModal");
        console.log("clicked");
    });
});