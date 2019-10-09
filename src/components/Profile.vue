<template>
<div id='profile'>
    <div style="text-align:right; width:100%; padding:0;">
        <button id='deleteProfile' @click='deleteProfile' title='Удалить анкету'><img src="https://img.icons8.com/color/24/000000/delete-sign.png"></button>
    </div>
    <h2>Анкета пользователя</h2>
    <img id='photo' @click='openProfile' :src='profile.photoSrc'
    >
    <h4>Имя: {{profile.name}} {{ profile.surname }}</h4>
    <br/>
    <transition mode='out-in'>
        <button class='like' v-if='profileIsLiked(profile._id)' @click='likeProfile(profile)' v:key="likeProfile">Нравится</button>
        <button class='dislike' v-else @click='dislikeProfile(profile)' v:key="dislikeProfile">Больше не нравится</button>
    </transition>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Profile',
    props: {
        profile: {
            type: Object,
            default: function() {
                return { name: 'Miskam Vonabur', photoSrc: 'https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg'}
            }
        }
    },
    computed: mapGetters(['profileIsLiked']),
    methods: {
        ...mapActions(['likeProfile', 'dislikeProfile']),

        deleteProfile() {
            if (window.confirm(`Вы действительно хотите удалить эту анкету пользователя '${this.profile.name}'?`)){
                this.$store.dispatch('deleteProfile', this.profile);
                this.$emit('profileDeleted'); // нужно для перелистывания
            }    
        },
        openProfile() {
            this.$router.push({ path: `profile/${this.profile._id}`})
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
    h2 {
        margin-top: 0;
    }

    #profile {
        padding: 5px 25px;
        width: auto;
        border-radius: 10px;
        box-shadow: 0px 2px 10px 0px black;
        margin: 10px;
        display: inline-block;
    }

    #photo {
        width: 300px;
        object-fit: cover;
        height: 300px;
        box-shadow: 0px 5px 5px 3px gray;
        border-radius: 10px;
        margin: 5px;
        transition: ease-in 0.15s;
        cursor: pointer;
    }

    #photo:hover {
        box-shadow: 0px 6px 15px 6px gray;
        transform: scale(1.05);
    }

    .dislike:hover {
        background: rgba(219, 26, 26, 0.9);
        color: white;
    }

    .like:hover {
        background: rgba(5, 160, 44, 0.9);
        color: white;
    }

    .like {
        font-family: 'Pacifico';
        font-weight: lighter;
        background: rgba(100, 200, 100, 0.9);
        color: rgba(3, 37, 3, 0.9);
    }

    .dislike {
        font-family: 'Pacifico';
        font-weight: lighter;
        background: rgba(200, 100, 100, 0.9);
        color: rgba(61, 17, 17, 0.9);
    }

    #deleteProfile {
        background: white;
        padding: 0px;
        margin: 10px -10px 0 0;
        border-radius: 50%;
        height: 24px;
        box-shadow: 0px 0px 0px 0px white;
        transition: 0.3s ease-in-out;
    }
    #deleteProfile:hover {
        transform: rotate(180deg);
    }
</style>