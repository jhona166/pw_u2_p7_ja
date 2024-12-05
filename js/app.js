console.log(Vue); // Verificar que Vue está cargado
 
// Declarar un objeto de Vue
const app = Vue.createApp({
    // Uso de Backticks para escribir el template ``
    //Programacion declarativa {{}}
    /*
    template: `
    <h1>Hola Mundo</h1>
    <p>Con Vue.js</p>
    <p>{{ 2 + 5 }}</p>
    <p>{{['a','b','c'].join(' - ')}}</p>
    <p>{{[1,2,3,4,5,6]}}</p>
    <p>{{{nombre: 'Juan', apellido: 'Altamirano'}.nombre}}</p>
    <p>{{false ? 'Activ○':'Inactivo}}'</p>
 `
*/
 methods: {
    cambiarMensaje(){
        this.mensaje = 'Nuevo mensaje'
        this.edad = 30;
    }
 },
 data(){
    return{
        mensaje:'Hola mundo PWED',
     edad: 35}
    }
}) 

 
app.mount('#myApp'); // Montar la aplicación en el div con id myApp