const frases = [{frase:'El que madruga Dios le ayuda',autor:'Pepito Perez'},
    {frase:'El que madruga Dios le ayuda 1',autor:'Pepito Perez'},
    {frase:'El que madruga Dios le ayuda 2',autor:'Juan Teran'},
    {frase:'El que madruga Dios le ayuda 3',autor:'Sebastian Blanco'},
    {frase:'El que madruga Dios le ayuda 4',autor:'Anton González'},
    {frase:'El que madruga Dios le ayuda 5',autor:'Carlos Lopez'},
    {frase:'El que madruga Dios le ayuda 6',autor:'Reinaldo Rueda'}]
// Declarar un objeto de Vue
const app = Vue.createApp({
   
 methods: {
   
 },
 data(){
    return{
      listafrases: frases,

    }
    }
}) 

 
app.mount('#myApp'); // Montar la aplicación en el div con id myApp