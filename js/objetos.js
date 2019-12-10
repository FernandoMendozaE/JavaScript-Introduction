// Object Literal
const persona = {
  nombre: "Juan",
  profesion: "Desorrallador Web",
  edad: 27
};
console.log(persona);

// Object Constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

// Crear una nueva tarea
const tarea1 = new Tarea("Aprender JavaScript y react", "Urgente");
const tarea2 = new Tarea("Preparar café", "Medio");
const tarea3 = new Tarea("Pasear al perro", "Urgente");
const tarea4 = new Tarea("Conocer a mis suegros", "bajo");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);
