const ProfileService = {
    ID() {
        return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    },
    newProfile(profile) {
        var profiles = this.getProfiles();
        profile._id = this.ID();
        profiles.push(profile);
        localStorage.setItem('profiles', JSON.stringify(profiles));
    },
    likeProfile(profile) {
        var likedProfiles = localStorage.getItem('likedProfiles');
        likedProfiles = (likedProfiles) ? JSON.parse(likedProfiles) : [];
        if (!likedProfiles.includes(profile._id)) {
            likedProfiles.push(profile._id);
            localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
        }
    },
    dislikeProfile(profile) {
        var likedProfiles = localStorage.getItem('likedProfiles');
        likedProfiles = (likedProfiles) ? JSON.parse(likedProfiles) : [];
        if (likedProfiles.includes(profile._id)) {
            likedProfiles = likedProfiles.filter(p => p !== profile._id);
            localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
        }
    },
    deleteProfile(profile) {
        var profiles = this.getProfiles();
        var likedProfiles = localStorage.getItem('likedProfiles') || [];
        likedProfiles = (likedProfiles) ? JSON.parse(likedProfiles) : [];
        profiles = profiles.filter(p => p._id !== profile._id);
        likedProfiles = likedProfiles.filter(p => p !== profile._id);
        localStorage.setItem('profiles', JSON.stringify(profiles));
        localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
    },
    editProfile(id, data) {
        var profiles =this.getProfiles();
        var profile = this.getProfileById(id);
        var index = profiles.findIndex(p => p._id === id);
        profile.name = data.name;
        profile.surname = data.surname;
        profile.age = data.age;
        profile.city = data.city;
        profile.photoSrc = data.photoSrc;

        profiles[index] = profile;
        localStorage.setItem('profiles', JSON.stringify(profiles));
    },
    getProfiles() {
        return JSON.parse(localStorage.getItem('profiles')) || [];
    },
    getProfileById(id) {
        var profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        return profiles.filter(p => p._id === id)[0];

    },
    getLikedProfiles() {
        var profiles = this.getProfiles();
        var likedProfiles = localStorage.getItem('likedProfiles') || [];
        return profiles.filter(p => likedProfiles.includes(p._id));
    },
    getFoundProfiles(query = '') {
        var profiles = this.getProfiles();
        var foundProfiles = [];
        if (query === '') return profiles;

        for(var i=0; i<profiles.length; i++) {
            for(var key in profiles[i]) {
                if (key !== 'photoSrc') {
                    if(profiles[i][key].toLowerCase().indexOf(query.toLowerCase())!=-1) {
                        foundProfiles.push(profiles[i]);
                    }
                }
                
            }
        }
        return [...new Set(foundProfiles)];
    }
};

export default ProfileService;