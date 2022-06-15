class Usuario {
    
  constructor(nombre , apellido , mascotas=[], libros=[]) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
      return("Hola!, mi nombre es "+this.nombre+" "+this.apellido)
  } 
  
  addMascota (mascota) {
      this.mascotas.push(mascota)
  }

  countMascotas(){
      return this.mascotas.length
  }

  addBokk(nombre, autor){
      this.libros.push({nombre: nombre, autor: autor})     
  }

  getBookNames(){
      let libs= ""
      for (var i = 0; i < this.libros.length; i++) {
          libs = libs + ", " + this.libros[i].nombre;
       }
      return(`los libros del usuario son : ${libs}`)
  }  

  getFullName(){
      return(this.nombre+" "+this.apellido)
  }  

}

const usuario = new Usuario('Rabih' , 'Souiden' , ['gato', 'pez'], [{nombre: "El principito", autor:"Antoine de Saint-Exupéry"}])

console.log(usuario)
console.log(usuario.getFullName())
usuario.addMascota("Lobo")
console.log(usuario.countMascotas())
usuario.addBokk("Harry Potter", "J. K. Rowling")
console.log(usuario.getBookNames())