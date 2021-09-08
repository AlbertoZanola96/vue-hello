//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Vue.config.devtolls = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            saluto: 'hello world',
            image: 'img/ciaomondo.png'
        }
    }
)