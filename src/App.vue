<template>
  <div id="app">
    <app-header />
    <ul id="nav">
      <li>
        <router-link to="/">Найти</router-link>
      </li>
      <li>
        <router-link to="/likedProfiles">Понравившиеся анкеты</router-link>
      </li>
      <li>
        <router-link to="/search">Поиск по анкетам</router-link>
      </li>
      <li>
        <router-link to="/about">О сайте</router-link>
      </li>
      <li>
        <router-link to="/stats">Статистика</router-link>
      </li>
    </ul>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
export default {
  components: {
    "app-footer": Footer,
    "app-header": Header
  },
  created() {
    this.$store.dispatch('initState');
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
body {
  margin: 0;
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: rgb(221, 221, 221);
  margin-top: 2px;
  display: relative;
}

#nav li {
  display: inline;
}

#nav a {
  display: inline-block;
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 1.2em;
  color: black;
  transition: all 0.2s;
}

#nav li a:hover {
  background-color: rgba(195, 59, 59, 0.9);
  color: white;
}

#nav a.router-link-exact-active {
  color: rgba(195, 59, 59, 0.9);
}

@media screen and (max-width: 600px) {
  #nav li {
    display: block;
  }

  #nav li a {
    width: 100%;
  }
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.right {
  float: right;
}

.clearfix {
  overflow: auto;
}
</style>
