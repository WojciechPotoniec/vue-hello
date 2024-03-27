const {createApp} = Vue;

createApp({
    data(){
        return {
            message: '<h1>Hello Vue!</h1>',
            image: 'https://picsum.photos/450/250'
        }
    },
}).mount('#app');