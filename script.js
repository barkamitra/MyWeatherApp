const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bc678cc301msh7e644577205a5f0p172526jsn58498b99d7d2',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' 
    }
};
const getWeather = (city) => {
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}



submit.addEventListener('click', (e) => {
	e.preventDefault() // prevent the page from reloading
getWeather(city.value)// get the value of the input
})

getWeather("Brisbane")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New Delhi',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			del_cloud_pct.innerHTML = response.cloud_pct
     		del_temp.innerHTML = response.temp
     		del_feels_like.innerHTML = response.feels_like
     		del_humidity.innerHTML = response.humidity
     		del_min_temp.innerHTML = response.min_temp
     		del_max_temp.innerHTML = response.max_temp
     		del_sunset.innerHTML = response.sunset
     		del_wind_speed.innerHTML = response.wind_speed
     		del_wind_degrees.innerHTML = response.wind_degrees
     		del_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Melbourne',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			mel_cloud_pct.innerHTML = response.cloud_pct
     		mel_temp.innerHTML = response.temp
     		mel_feels_like.innerHTML = response.feels_like
     		mel_humidity.innerHTML = response.humidity
     		mel_min_temp.innerHTML = response.min_temp
     		mel_max_temp.innerHTML = response.max_temp
     		mel_sunset.innerHTML = response.sunset
     		mel_wind_speed.innerHTML = response.wind_speed
     		mel_wind_degrees.innerHTML = response.wind_degrees
     		mel_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			bom_cloud_pct.innerHTML = response.cloud_pct
     		bom_temp.innerHTML = response.temp
     		bom_feels_like.innerHTML = response.feels_like
     		bom_humidity.innerHTML = response.humidity
     		bom_min_temp.innerHTML = response.min_temp
     		bom_max_temp.innerHTML = response.max_temp
     		bom_sunset.innerHTML = response.sunset
     		bom_wind_speed.innerHTML = response.wind_speed
     		bom_wind_degrees.innerHTML = response.wind_degrees
     		bom_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Perth',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			perth_cloud_pct.innerHTML = response.cloud_pct
     		perth_temp.innerHTML = response.temp
     		perth_feels_like.innerHTML = response.feels_like
     		perth_humidity.innerHTML = response.humidity
     		perth_min_temp.innerHTML = response.min_temp
     		perth_max_temp.innerHTML = response.max_temp
     		perth_sunset.innerHTML = response.sunset
     		perth_wind_speed.innerHTML = response.wind_speed
     		perth_wind_degrees.innerHTML = response.wind_degrees
     		perth_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			kol_cloud_pct.innerHTML = response.cloud_pct
     		kol_temp.innerHTML = response.temp
     		kol_feels_like.innerHTML = response.feels_like
     		kol_humidity.innerHTML = response.humidity
     		kol_min_temp.innerHTML = response.min_temp
     		kol_max_temp.innerHTML = response.max_temp
     		kol_sunset.innerHTML = response.sunset
     		kol_wind_speed.innerHTML = response.wind_speed
     		kol_wind_degrees.innerHTML = response.wind_degrees
     		kol_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Adelaide',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			adelaide_cloud_pct.innerHTML = response.cloud_pct
     		adelaide_temp.innerHTML = response.temp
     		adelaide_feels_like.innerHTML = response.feels_like
     		adelaide_humidity.innerHTML = response.humidity
     		adelaide_min_temp.innerHTML = response.min_temp
     		adelaide_max_temp.innerHTML = response.max_temp
     		adelaide_sunset.innerHTML = response.sunset
     		adelaide_wind_speed.innerHTML = response.wind_speed
     		adelaide_wind_degrees.innerHTML = response.wind_degrees
     		adelaide_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			sydney_cloud_pct.innerHTML = response.cloud_pct
     		sydney_temp.innerHTML = response.temp
     		sydney_feels_like.innerHTML = response.feels_like
     		sydney_humidity.innerHTML = response.humidity
     		sydney_min_temp.innerHTML = response.min_temp
     		sydney_max_temp.innerHTML = response.max_temp
     		sydney_sunset.innerHTML = response.sunset
     		sydney_wind_speed.innerHTML = response.wind_speed
     		sydney_wind_degrees.innerHTML = response.wind_degrees
     		sydney_sunrise.innerHTML = response.sunrise
		})
			.catch(err => console.error(err));//console.log(err)

			
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			dxb_cloud_pct.innerHTML = response.cloud_pct
            dxb_temp.innerHTML = response.temp
            dxb_feels_like.innerHTML = response.feels_like
            dxb_humidity.innerHTML = response.humidity
            dxb_min_temp.innerHTML = response.min_temp
            dxb_max_temp.innerHTML = response.max_temp
            dxb_sunset.innerHTML = response.sunset
            dxb_wind_speed.innerHTML = response.wind_speed
            dxb_wind_degrees.innerHTML = response.wind_degrees
            dxb_sunrise.innerHTML = response.sunrise
		})
			.catch(err => console.error(err));//console.log(err)