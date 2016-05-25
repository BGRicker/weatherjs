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


  var daysOfWeek = [];
  daysOfWeek[0] = "Sunday";
  daysOfWeek[1] = "Monday";
  daysOfWeek[2] = "Tuesday";
  daysOfWeek[3] = "Wednesday";
  daysOfWeek[4] = "Thursday";
  daysOfWeek[5] = "Friday";
  daysOfWeek[6] = "Saturday";

  // console.log(daysOfWeek[new Date().getDay() ]);

  data.daily.data.forEach(function(currentItem, currentIndex) {
    var maxTemp = currentItem.temperatureMax;
    var minTemp = currentItem.temperatureMin;
    var currentDate = new Date( currentItem.time * 1000 );
    var currentDay = daysOfWeek[currentDate.getDay()];
    var summary = currentItem.summary;

    WeatherAPI.drawCard(maxTemp, minTemp, currentDay, summary);
  });
}

WeatherAPI.drawCard = function (maxTemp, minTemp, currentDay, summary) {
  console.log('in drawCard function!', maxTemp, minTemp, currentDay, summary);

  // create div "card ui"
  var card = document.createElement("div");
  card.className = "card ui";

  /* <div class="card ui">
   *  this is what card.classname = "card ui"; created
   * </div>
   */

  var header = document.createElement("div");
  header.className = "header";
  header.innerHTML = currentDay
  card.appendChild(header);

  /* <div class="card ui">
   * <div class="header">Monday</div>
   * <div class="meta">Partly cloudy</div>
   * <div class="content">
   *  Temperature / temperature - from above code
   * </div>
   * </div>
   */

  var meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = summary;
  card.appendChild(meta);

  /* <div class="card ui">
   *  <div class="header">(currentDay)</div>
   *  <div class="meta">(summary)</div>
   * </div>
   */

  var content = document.createElement("div");
  content.className = "content";
  content.innerHTML = maxTemp + "&deg;F / " + minTemp + " &deg;F";
  card.appendChild(content);

  document.querySelector('.js-card-container').appendChild(card);

  
}

// <div class="card ui">
//   <div class="header">Monday</div>
//     <div class="meta">Partly cloudy</div>
//       <div class="content">
//       76 &deg;F / 56 &deg;F
//       </div>
//     </div>
//   </div>
// </div>

// console.log(currentDay, maxTemp, minTemp, summary);
// document.querySelector('.js-forecast-container').innerHTML += "<div>" + currentDate + " " + currentItem.temperatureMax + "</div>";

WeatherAPI.getForecast();
