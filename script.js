const url = 'https://open-weather13.p.rapidapi.com/city/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bf650bf0d4mshbf63a9a9d8665b7p136c29jsn3de99d269d58',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};

temp = document.getElementById("temp");
feels_like = document.getElementById("feels_like");
humidity = document.getElementById("humidity");
pressure = document.getElementById("pressure");
temp_max = document.getElementById("temp_max");
temp_min = document.getElementById("temp_min");
city = document.getElementById("city");


async function getWeather(cityName) {
    try {
        const response = await fetch(url+cityName, options);
        const result = await response.json();

        city.innerText = " "+result.name;
        temp.innerText = " "+Math.round((result.main.temp-32)*5/9);
        feels_like.innerText = " "+result.main.feels_like;
        humidity.innerText =" "+ result.main.humidity;
        pressure.innerText = " "+result.main.pressure;
        temp_max.innerText = " "+Math.round((result.main.temp_max-32)*5/9);
        temp_min.innerText = " "+Math.round((result.main.temp_min-32)*5/9);



        console.log(result);

    } catch (error) {
        console.error(error);
        city.innerText =" "+"Incorrect City!! Please Enter Correct Name";
    }
}

document.getElementById("submit").addEventListener("click",()=>{
   let city_name = document.getElementById("search").value;
   getWeather(city_name);
})


