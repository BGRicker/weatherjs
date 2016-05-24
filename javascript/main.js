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
  // document.querySelector('.js-forecast-container').innerHTML += "<div>" + data.daily.data[0].temperatureMax + "</div>";

  data.daily.data.forEach(function(currentItem, currentIndex) {
    var currentDate = new Date( currentItem.time * 1000 );
    document.querySelector('.js-forecast-container').innerHTML += "<div>" + currentDate + " " + currentItem.temperatureMax + "</div>";
  });
}

WeatherAPI.getForecast();
