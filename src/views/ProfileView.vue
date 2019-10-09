<template>
    <div id='profileView'>
        <br/>
        <img :src='profile(id).photoSrc'/>
        <p>Это пользователь <b>{{ profile(id).name }} {{ profile(id).surname }}</b>. Возраст этого пользователя <b>{{ profile(id).age }}</b> (в годах). Он из города <b>{{ profile(id).city }}.</b></p>
        <button @click='backTo'>Вернуться назад</button>
        <app-edit-profile :profileProps='profile(id)'/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import EditProfile from '../components/EditProfile';
export default {
    data: function() {
        return {
           id: this.$route.params.id
        };
    },
    computed: {
        ...mapGetters({
            profile: 'profileById'
        })
        /*,
        profile() {
            return this.$store.getters.profileById(this.$route.params.id)
        }*/
    },
    methods: {
        backTo() {
            this.$router.go(-1);
        }
    },
    components: {
        'app-edit-profile': EditProfile
    }
    
}
</script>

<style scoped>
 #profileView {
     text-align: center;
 }

 img {
     width: 550px;
     height: 550px;
     object-fit: cover;

     border-radius: 10px;
     box-shadow: 0px 5px 5px 3px gray;
 }

 p {
     font-size: 1.3em;
     margin: 20px 0 0 0;
 }

 button {
    
 }
</style>