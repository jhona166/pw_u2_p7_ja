const frases = [{ frase: 'El que madruga Dios le ayuda', autor: 'Pepito Perez' },
{ frase: 'El que madruga Dios le ayuda 1', autor: 'Pepito Perez' },
{ frase: 'El que madruga Dios le ayuda 2', autor: 'Juan Teran' },
{ frase: 'El que madruga Dios le ayuda 3', autor: 'Sebastian Blanco' },
{ frase: 'El que madruga Dios le ayuda 4', autor: 'Anton González' },
{ frase: 'El que madruga Dios le ayuda 5', autor: 'Carlos Lopez' },
{ frase: 'El que madruga Dios le ayuda 6', autor: 'Reinaldo Rueda' }]
const app = Vue.createApp({
  methods: {
      agregarFrase() {
          console.log(this.frase);
          console.log(this.autor);

          const nuevaFrase = {
              frase: this.frase,
              autor: this.autor
          }

          this.listafrases.unshift(nuevaFrase);
      },

      agregarFraseFinal() {
          console.log(this.frase);
          console.log(this.autor);

          const nuevaFrase = {
              frase: this.frase,
              autor: this.autor
          }

          this.listafrases.push(nuevaFrase);
      },

      eventoKeyPress({ charCode, cancelable, key, keyCode, target }) {
          if (key === 'Enter') {
              console.log('Evento');
              //console.log(event);
              console.log(key);
              console.log(charCode);
              console.log(keyCode);
              console.log(cancelable);
              console.log(target.baseURI);
              this.agregarFraseFinal();
          }
      },

      eventoKeyPressModificador() {
          console.log('Evento');
          console.log(key);
          console.log(charCode);
          console.log(keyCode);
          console.log(cancelable);
          console.log(target.baseURI);
          //console.log(event);
          this.agregarFraseFinal();

      }

  },
  data() {
      return {
          listafrases: frases,
          frase: null,
          //autor: 'Sin autor'
          autor: null
      }
  }
})

app.mount('#myApp')