// function declaration
function saludar(nombreCliente) {
  console.log("Bienvenido " + nombreCliente);
}

saludar("Juan");

//function expression
const cliente = function(nombreCliente) {
  console.log("Mostrando datos del cliente: ", nombreCliente);
};

cliente("Juan");

// parametros por default en las funciones
function actividad(nombre = "Walter White", actividad = "Enseñar Quimica") {
  console.log(
    `La persona ${nombre}, esta realizando la actividad ${actividad}`
  );
}
actividad("Juan", "Aprender JavaScript");
actividad("Pedro", "Aprender JavaScript");
actividad("Antonio");

// arrow functions
let viajando = function(destino) {
  return `Viajando a la ciudad de: ${destino}`;
};
let viaje;
viaje = viajando("Paris");
viaje = viajando("Londres");
viaje = viajando("Barcelona");
console.log(viaje);

// arrow functions simplified
let viajando2 = destino => `Viajando a la ciudad de: ${destino}`;
let viaje2;
viaje2 = viajando2("Paris");
console.log(viaje2);
