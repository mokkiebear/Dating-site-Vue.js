<template>
  <div id="finder-roll">
    <transition name="slide-fade" mode="out-in">
      <app-profile :profile="profile" :key="profile._id" @profileDeleted="nextProfile" />
    </transition>
    <br />
    <button @click="nextProfile">Следующая анкета &raquo;</button>
  </div>
</template>

<script>
import Profile from "./Profile";
export default {
  name: "FinderRoll",
  data: function() {
    return {
      profile: this.profiles[0]
    };
  },
  props: ["profiles"],
  components: {
    "app-profile": Profile
  },
  methods: {
    nextProfile() {
      var index = this.profiles.indexOf(this.profile);
      if (index < 0) index = 0;
      if (index + 1 < this.profiles.length) {
        index++;
        this.profile = this.profiles[index];
      } else this.profile = this.profiles[0];
    }
  }
};
</script>

<style scoped>
@import "../style.css";

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to {
  transform: translateX(-150px) scale(0.5) rotate3d(0, 0, 1, 180deg);
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(150px);
  opacity: 0.5;
}
</style>