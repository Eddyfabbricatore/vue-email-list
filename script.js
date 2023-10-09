/*
- Data la seguente API https://flynn.boolean.careers/exercises/api/random/mail
- Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
- Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue;

createApp({
  data(){
    return{
      titolo: 'Elenco email',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailsList: [],
      limit: 10
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then((result) => {
        this.mailsList.push(result.data.response);
      })
    },

    getMails(){
      setTimeout(() => {
        for(let i = 1; i <= this.limit; i++){
          this.getApi();
        }
      }, 1000);
    }
  },

  mounted(){
    this.getMails();
  }
}).mount('#app');