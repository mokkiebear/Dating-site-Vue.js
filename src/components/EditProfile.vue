<template>
    <div>
        <form>
            <h2>Изменение анкеты</h2>
            <hr/>
            <input v-model='profile.name' placeholder='Введите имя'/>
            <br/><br/>
            <input v-model='profile.surname' placeholder='Введите фамилию'/>
            <br/><br/>
            <input v-model='profile.age' placeholder='Введите ваш возраст'/>
            <br/><br/>
            <input v-model='profile.city' placeholder='В каком вы городе?'/>
            <br/><br/>
            <input v-model='profile.photoSrc' placeholder='Вставьте ссылку на фото'/>
            <br/><br/>
            <button @click.prevent='editProfile'>Изменить анкету</button>
        </form>
    </div>
</template>

<script>
export default {
  props: ['profileProps'],
  data: function() {
    return {
      profile: this.profileProps
    };
  },
  methods:{ 
    editProfile() {
        var pr = this.profile;
        if (pr.name && pr.surname && pr.age && pr.city && pr.photoSrc){
            var profile = { _id: pr._id, name: pr.name, surname: pr.surname, age: pr.age, city: pr.city, photoSrc: pr.photoSrc };
            this.$store.dispatch('editProfile', profile);
            alert('Данные успешно изменены!');
        } 
    }
  }
}
</script>

<style scoped>
    div {
        width: 50%;
        margin: 10px auto;
        padding: 10px;
        border: 1px solid black;  
        box-shadow: 0px 10px 15px 2px gray;
        margin-top: 130px;
        margin-bottom: 120px;
    }

    input {
        width: 80%;
        padding: 10px;
        font-size: 1.1em;
    }
</style>