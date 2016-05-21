var WeatherAPI = {};

WeatherAPI.API_KEY = 'dcbdb3b43d97ccfc1eb6379f3b97c9b0'

WeatherAPI.getForecast = function(){
  var url = 'https://api.forecast.io/forecast/'+ WeatherAPI.API_KEY +'/37.8267,-122.423';

  var scriptTag = document.createElement('script');
  scriptTag.src = url;
  document.querySelector('body').appendChild( scriptTag );

}

WeatherAPI.getForecast();
