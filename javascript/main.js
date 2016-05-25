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

    var daysOfWeek = [];
    daysOfWeek[0] = "Sunday";
    daysOfWeek[1] = "Monday";
    daysOfWeek[2] = "Tuesday";
    daysOfWeek[3] = "Wednesday";
    daysOfWeek[4] = "Thursday";
    daysOfWeek[5] = "Friday";
    daysOfWeek[6] = "Saturday";

    // console.log(daysOfWeek[new Date().getDay() ]);

    var maxTemp = currentItem.temperatureMax;
    var minTemp = currentItem.temperatureMin;
    var currentDate = new Date( currentItem.time * 1000 );
    var currentDay = daysOfWeek[currentDate.getDay()];
    var summary = currentItem.summary;


    console.log(currentDay, maxTemp, minTemp, summary);
    // document.querySelector('.js-forecast-container').innerHTML += "<div>" + currentDate + " " + currentItem.temperatureMax + "</div>";
  });
}

WeatherAPI.getForecast();
