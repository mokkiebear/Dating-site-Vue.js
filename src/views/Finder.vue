<template>
  <div class="finder">
    <h1>Здесь вы можете найти свою вторую половинку...</h1>
    <app-finder-roll v-if='profiles.length > 0' :profiles='profiles'/>
    <app-new-profile />
  </div>
</template>

<script>
import FinderRoll from '../components/FinderRoll';
import NewProfile from '../components/NewProfile';

import {mapGetters} from 'vuex';

export default {
  name: 'finder',
  components: {
    'app-finder-roll': FinderRoll,
    'app-new-profile': NewProfile
  },
  computed: mapGetters(['profiles'])
}
</script>

<style scoped>

</style>
