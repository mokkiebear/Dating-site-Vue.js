<template>
    <div class='stats'>
        <h1>Статистика использования</h1>
        <h2 style='text-align:left;'>Всего анкет на сайте: {{ profiles.length }}</h2>
        <h3 style='text-align:left;'>Анкет в городах</h3>
        <ul style='text-align: left; font-weight: bold;'>
            <li v-for='(num, city) in citiesStats' :key='city'>{{ city }} : {{ num }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['profiles', 'citiesStats'])
}
</script>

<style scoped>
    div {
        width: 80%;
        margin: 0 auto; /* Remove margins */
    }
    ul {
    list-style-type: none; 
    padding: 0;
    margin: 0; 
    }

    ul li {
    border: 1px solid rgb(143, 143, 143); /* Add a thin border to each list item */
    margin-top: -1px; /* Prevent double borders */
    background-color: rgb(221, 221, 221); /* Add a grey background color */
    padding: 12px; /* Add some padding */
    }
</style>