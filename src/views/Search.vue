<template>
    <div>
        <h2>Поиск по анкетам</h2>
        <input type='search' v-model='query' v-on:keyup='loadFoundProfiles(query)' placeholder="Введите значение для поиска анкет"/>
        <h4>Найдено анкет: {{ foundProfiles.length }}</h4>
        <app-profile-grid v-bind:profiles='foundProfiles'/>
    
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProfileGrid from '../components/ProfileGrid';
export default {
  name: 'foundProfiles',
  data: function() {
    return {
      query: ''
    }
  },
  created() {
    this.loadFoundProfiles(this.query)
  },
  computed: mapGetters(['foundProfiles']),
  methods: mapActions(['loadFoundProfiles']),
  components: {
    'app-profile-grid': ProfileGrid
  }
}
</script>


<style scoped>
input {
        width: 60%;
        padding: 10px;
        font-size: 1.1em;
    }
</style>