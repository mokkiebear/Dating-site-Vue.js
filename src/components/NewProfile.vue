<template>
  <div>
    <form>
      <h2>Добавление анкеты</h2>
      <hr />
      <input v-model="name" placeholder="Введите имя" />
      <br />
      <br />
      <input v-model="surname" placeholder="Введите фамилию" />
      <br />
      <br />
      <input v-model="age" type="number" placeholder="Введите ваш возраст" />
      <br />
      <br />
      <input v-model="city" placeholder="В каком вы городе?" />
      <br />
      <br />
      <input v-model="photoSrc" placeholder="Вставьте ссылку на фото" />
      <br />
      <br />
      <button
        @click.prevent="newProfile"
        :disabled="age < 18 || !Number.isInteger(Number(age))"
      >Добавить анкету</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      surname: "",
      age: "",
      city: "",
      photoSrc:
        "https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg"
    };
  },
  methods: {
    newProfile() {
      if (this.name && this.surname && this.age && this.city && this.photoSrc) {
        var profile = {
          name: this.name,
          surname: this.surname,
          age: this.age,
          city: this.city,
          photoSrc: this.photoSrc
        };
        this.$store.dispatch('newProfile', profile);
        this.name = "";
        this.surname = "";
        this.age = 0;
        this.city = "";
      }
    }
  }
};
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