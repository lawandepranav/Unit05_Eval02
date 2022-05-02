
let container = document.getElementById("container");

let url = 'https://api.openweathermap.org/data/2.5/weather?lat=22&lon=77&appid=0e700e80a90c21de7c1e4a6568150d76';


async function getData() {
  try {
 
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
     let wind=data.wind;
     let whdata=data.main;
     let sunTime=data.sys;
     let wheatherDes=data.weather[0];


  let dataArr=[];
  dataArr.push(whdata)
  dataArr.push(wind)
  dataArr.push(sunTime)
  dataArr.push(wheatherDes)
    console.log(dataArr);
 
    displayData(dataArr);
  } catch (err) {

    console.log(err);
  }
}

getData();

function displayData(data) {
  // [{},{},{}]
  data.forEach(function (product) {
    let productCard = document.createElement("div");
        
    let country = document.createElement("p");
    country.textContent = product.country;

    let temp = document.createElement("p");
    temp.textContent = product.temp;
 
    let pressure = document.createElement("p");
    pressure.textContent =  product.pressure;
    
    let humidity = document.createElement("p");
    humidity.textContent =  product.humidity;

    let windSpeed = document.createElement("p");
    windSpeed.textContent =  product.speed;

    let sunRise = document.createElement("p");
    sunRise.textContent =  product.sunrise;

    let sunSet = document.createElement("p");
    sunSet.textContent =  product.sunset;

    let wheatherDescription = document.createElement("p");
    wheatherDescription.textContent =  product.description;

    productCard.append(windSpeed, temp, pressure, humidity,country, sunRise, sunSet,wheatherDescription );
    document.getElementById("container").append(productCard);
  });
}
