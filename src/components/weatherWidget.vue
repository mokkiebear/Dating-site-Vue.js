<template>
  <div>
    <div v-if="this.$store.state.dataIsReceived" id='weather'>
      <h2>Погода в Гомеле</h2>
      <hr/>
      <h3>{{ weather.city_name }}</h3>
      <img :src="'https://www.weatherbit.io/static/img/icons/' + weather.weather.icon + '.png'"/>
      <h1>{{ weather.temp }}<span>°C</span></h1>
      <h3>{{ weather.weather.description }}</h3>
    </div>
    <div v-else class="weather-widget">
      Подождите...
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      weather() {
        return this.$store.state.weather // gets weather state from Vuex store
      }
    },
    created() {
      this.$store.dispatch("updateWeather"); // dispatch "updateWeather" when component is created
    }
  }
</script>

<style scoped> 
  #weather {
    border: 1px solid black;
    width: 30%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0px 6px 13px 4px gray;
    padding: 15px 0px;
  }
</style>