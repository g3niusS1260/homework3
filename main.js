'use strict';

const userProfile = {
    username : 'michael.jackson',
    email : 'michaeljackson@gmail.ru',
    age : 34,
    isLoggedIn : true
}

console.log(userProfile.email);

userProfile.age = 26;

userProfile['user location'] = 'New York';

console.log(userProfile['user location']);

