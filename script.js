const key = '2ced1ac9441a01600c71e741632840f8'

function screenData (data){
    console.log(data)
    document.querySelector('.city').innerHTML = 'Tempo em ' + data.name;
    document.querySelector('.temp').innerHTML =  'Temperatura: ' + Math.floor(data.main.temp) + 'ºC';
    document.querySelector('.text-prev').innerHTML = data.weather[0].description;
    document.querySelector('.umd').innerHTML = 'Umidade: ' + data.main.humidity + '%';
    document.querySelector('.img-prev').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector('.sens').innerHTML = 'Sensação Térmica: ' + Math.floor(data.main.feels_like) + 'ºC';
    document.querySelector('.temp-max').innerHTML = 'Temperatura maxima: ' + Math.floor(data.main.temp_max) + 'ºC'
    document.querySelector('.temp-min').innerHTML = 'Temperatura minima: ' + Math.floor(data.main.temp_min) + 'ºC'
}

async function searchCity (city) {
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    screenData (data)
}

function clickButton () { 
    const city = document.querySelector('.input-city').value
        searchCity (city)
}



