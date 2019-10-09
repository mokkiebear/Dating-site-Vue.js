<template>
  <div class="home">
    <h2>Понравившиеся Вам анкеты</h2>
    <h4>Количество понравившихся анкет: {{ likedProfiles.length }}</h4>
    <app-profile-grid v-bind:profiles='likedProfiles'/>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProfileGrid from '../components/ProfileGrid';
export default {
  name: 'likedProfiles',
  computed: mapGetters(['likedProfiles']),
  components: {
    'app-profile-grid': ProfileGrid
  }
}
</script>
