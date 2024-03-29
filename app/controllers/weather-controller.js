import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  //
  let template = "";
  let displayedWeather = store.State.weather;
  console.log("here", displayedWeather);

  document.getElementById(
    "weather"
  ).innerHTML = template += `<p>${displayedWeather.city}</p><p>currently ${displayedWeather.kelvin}</p>`;
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", _drawWeather);
    WeatherService.getWeather();
  }
}
