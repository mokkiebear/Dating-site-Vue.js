<template>
    <div class='container grid'>
        <Profile v-for="profile in profiles" v-bind:key='profile._id' v-bind:profile='profile' />
    </div>
</template>

<script>
import Profile from './Profile';
export default {
    props: ['profiles'],
    components: {
        Profile
    }
}
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(500px, 1fr) );
        margin-bottom: 100px;
    }
</style>