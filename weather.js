let API_KEY ="6735299091204b37b87103943230802";


getWeatherData=() =>{
    var city= document.getElementById("city-input").value;
    const URL ='https://api.weatherapi.com/v1/current.json';
    
    const Full_Url = `${URL}?key=${API_KEY}&q=${city}&aqi=no`;
    const weatherPromise =fetch(Full_Url);
    return weatherPromise.then((response) =>{
        return response.json()
    })


}
function searchCity(){
    const city= document.getElementById("city-input").value;
    getWeatherData(city)
    .then((response)=>{
        showWeatherData(response)
        console.log(response)

    })
    .catch((err)=>{
        console.log(err)
    })
}
showWeatherData=(weatherData) =>{
    var city= document.getElementById("city-input").value;
    document.getElementById('city-name').innerText = city;
    document.getElementById('weather-type').innerText = weatherData.current.condition.text;
    document.getElementById('temp').innerText = weatherData.current.temp_c;
    document.getElementById('min-temp').innerText = weatherData.current.humidity;
    document.getElementById('wind-speed').innerText = weatherData.current.wind_kph;
}