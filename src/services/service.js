import axios from "axios";
var CURRENT_WEATHER = `https://api.weatherbit.io/v2.0/current?city=Gomel,BE&lang=RU&key=092f72d24ce140a0a0041d14bd45364b`;

const apiClient = axios.create({ // create promise
  baseURL: CURRENT_WEATHER,
  withCredentials: false, // CORS
  headers: { // some HTTP headers
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getWeather() { // function that is used in store.js 👆
    return apiClient.get();
  }
};