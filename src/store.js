import Vue from "vue";
import Vuex from "vuex";
import service from "./services/service";
import ProfileService from "./services/ProfileService";
var log = require('loglevel');
log.enableAll();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    dataIsReceived: false,

    profiles: [],
    likedProfiles: [],
    foundProfiles: []
  },
  getters: {
    profileById: state => id => {
        return state.profiles.find(p => p._id === id);
    },

    profileIsLiked: state => id => {
      log.info("CHECK PROFILE IS LIKED");
      if (state.likedProfiles.find(p => p._id === id)) {
        log.info('SHOW DISLIKE');
        return false;
      }
      log.info('SHOW LIKE');
      return true;
    },

    profiles: state => {
      return state.profiles;
    },
    foundProfiles: state => {
      return state.foundProfiles;
    },
    likedProfiles: state => {
      return state.likedProfiles;
    },
    citiesStats: function(state) {
      var cities = [];
      cities = state.profiles.map(function(p) {
        return p.city;
      });
      var result = {};
      for (var i = 0; i < cities.length; ++i) {
        var city = cities[i];
        if (city !== undefined)
          result[city] = result[city] ? result[city] + 1 : 1;
      }
      return result;
    }
  },

  mutations: {
    SET_PROFILES(state, profiles) {
      state.profiles = profiles;
    },

    SET_LIKED_PROFILES(state, profiles) {
      state.likedProfiles = profiles;
    },

    SET_FOUND_PROFILES(state, profiles) {
      state.foundProfiles = profiles;
    },

    DELETE_PROFILE(state, payload) {
      state.profiles = payload.profiles;
      state.likedProfiles = payload.likedProfiles;
      state.foundProfiles = payload.foundProfiles;
    },

    NEW_PROFILE(state, payload) {
      state.profiles = payload.profiles;
      state.foundProfiles = payload.foundProfiles;
    },

    LIKE_PROFILE(state, payload) {
      state.likedProfiles = payload.likedProfiles;
    },

    DISLIKE_PROFILE(state, payload) {
      state.likedProfiles = payload.likedProfiles;
    },

    UPDATE_WEATHER(state) {
      service
        .getWeather() // call the function from service.js that returns the data from API
        .then(response => {
          // if the response was get
          state.weather = response.data.data[0]; // set weather obj in state to real weather obj
          state.dataIsReceived = true; // mark that data was Recieved
          console.log(response); // and log it
        })
        .catch(error => {
          // if there was an error
          console.log("There was an error:", error.response); // log it
          state.dataIsReceived = false; // and mark that data wasn't Recieved
        });
    }
  },

  actions: {
    updateWeather(context) {
      context.commit("UPDATE_WEATHER");
    },

    deleteProfile(context, profile) {
      ProfileService.deleteProfile(profile);
      var profiles = ProfileService.getProfiles();
      var likedProfiles = ProfileService.getLikedProfiles();
      var foundProfiles = ProfileService.getFoundProfiles();
      context.commit("DELETE_PROFILE", {
        profiles,
        likedProfiles,
        foundProfiles
      });
    },

    newProfile(context, profile) {
      ProfileService.newProfile(profile);
      var profiles = ProfileService.getProfiles();
      var foundProfiles = ProfileService.getFoundProfiles();
      context.commit("NEW_PROFILE", {
        profiles,
        foundProfiles
      });
    },

    editProfile({ dispatch }, profile) {
      ProfileService.editProfile(profile._id, profile);
      dispatch('initState');

    },

    likeProfile(context, profile) {
      ProfileService.likeProfile(profile);
      var likedProfiles = ProfileService.getLikedProfiles();
      context.commit("LIKE_PROFILE", { likedProfiles });
    },

    dislikeProfile(context, profile) {
      ProfileService.dislikeProfile(profile);
      var likedProfiles = ProfileService.getLikedProfiles();
      context.commit("DISLIKE_PROFILE", { likedProfiles });
    },

    getProfileById(context, id) {
      return this.profiles.filter(p => p._id === id)[0];
    },

    loadProfiles(context) {
      const profiles = ProfileService.getProfiles();
      context.commit('SET_PROFILES', profiles);
    },

    loadLikedProfiles(context) {
      const profiles = ProfileService.getLikedProfiles();
      context.commit('SET_LIKED_PROFILES', profiles);
    },

    loadFoundProfiles(context, query) {
      const profiles = ProfileService.getFoundProfiles(query);
      context.commit('SET_FOUND_PROFILES', profiles);
    },

    initState({ dispatch }) {
      log.info('INIT STATE');
      dispatch('loadProfiles');
      dispatch('loadLikedProfiles'),
      dispatch('loadFoundProfiles', '');
    }
  }
});
