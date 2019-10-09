<template>
  <div class="about">
    <h1>Здесь вы можете узнать о приложении, разработанном с любовью и...</h1>
    <h4>А также погоду в городе Гомеле</h4>
    <weatherWidget />
    <h3>Целью сервиса "Найди свою вторую половинку" является помочь пользователям исправить свой статус семейного положения с "Всё сложно", на "есть девушка", или даже на "женат/замужем". Сервис является БЕСПЛАТНЫМ, поэтому вы можете им пользоваться без каких-либо ограничений.</h3>
  </div>
</template>

<script>
import weatherWidget from '@/components/weatherWidget.vue';
export default {
  components: { // and register it
    weatherWidget
  }
}
</script>

<style scoped>
  .about {
    width: 80%;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
