class Usuario {
    constructor(nombre , apellido , mascota=[],libro=[]) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libro = libro;
      this.mascota = mascota;
    }
    getFullName() {
    return(`buenaaass, soy ${this.nombre}  ${this.apellido}`)
    }
 
    
  addMascota (agregar) {
  this.mascota.push( agregar)
  return this.mascota
  }
  countMascotas(){
    console.log(this.mascota.length)
  }
  addBokk(){
    return( this.libro)
    
    
  }
  getBookNames(){
    return(`el libro es : ${this.libro}`)
  }
  
  }
  const usuario = new Usuario('Rabih' , 'souiden' ,'perro gato', '100 viajes de leguas submarinas')
  const usuario1 = new Usuario('Jose', 'Maria','pez ', 'el senor de los anillos')
  console.log(usuario)
  console.log(usuario1)

 
  