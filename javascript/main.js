var WeatherAPI = {};

WeatherAPI.API_KEY = 'dcbdb3b43d97ccfc1eb6379f3b97c9b0'

WeatherAPI.getForecast = function(){
  var url = 'https://api.forecast.io/forecast/'+ WeatherAPI.API_KEY +'/37.8267,-122.423';

  var scriptTag = document.createElement('script');
  // JSONP technique
  scriptTag.src = url + "?callback=WeatherAPI.onDataBack";
  document.querySelector('body').appendChild( scriptTag );

}

WeatherAPI.onDataBack = function( data ) {
  // console.log( data );
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[0].temperatureMax + "</div>";
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[1].temperatureMax + "</div>";
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[2].temperatureMax + "</div>";
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[3].temperatureMax + "</div>";
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[4].temperatureMax + "</div>";
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[5].temperatureMax + "</div>";
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[6].temperatureMax + "</div>";
  document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[7].temperatureMax + "</div>";
}

WeatherAPI.getForecast();
