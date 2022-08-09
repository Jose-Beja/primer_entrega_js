class Paciente{
    constructor(nombre, edad, peso, estatura, imc, grado){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.estatura = estatura;
    this.imc = imc;
    this.grado = grado;
    }
 }
 
 function crearPaciente(){

        let nombre = prompt("Ingresa tu nombre");
        let edad = parseInt(prompt(nombre + " cual es su edad?"));
        let peso= parseFloat(prompt(nombre + " cual es su peso? en KILOGRAMOS"));
        let estatura = parseFloat(prompt(nombre + " cual es su altura en CENTIMETROS?"));
        let nuevoUsuario= new Paciente (nombre,edad,peso,estatura);
        return nuevoUsuario;
    }
    
 const nuevoPaciente = crearPaciente(); //crea un nuevo paciente
 console.log (nuevoPaciente);
 const listaPacientes = []; // array vacio al que se le van agregar los pacientes creados.
 
 function agregarPacientes (paciente,arr) { arr.push (paciente)} //agrega el paciente nuevo al array listaPaciente.
 agregarPacientes (nuevoPaciente,listaPacientes);
 
 
 let imc; //creamos let para guardar un dato y ese dato sea el valor del objeto, lo declaramos porque va usasrse en un proceso.
 //grado, no lo declaramos porque directamente se le asigna un resustado de la operacion.

 with (Math) {
    imc = nuevoPaciente.peso /pow(nuevoPaciente.estatura/ 100,2);
    imc = round(imc * 100) / 100;  // redondea con 2 decimales.
    
    nuevoPaciente.imc = imc
 }

 if (nuevoPaciente.imc < 16) {
    nuevoPaciente.grado = "Delgadez severa.";
 } else if (nuevoPaciente.imc >= 16 && nuevoPaciente.imc <= 16.99) {
    nuevoPaciente.grado = "Delgadez moderada.";
 } else if (nuevoPaciente.imc >= 17 && nuevoPaciente.imc <= 18.49) {
    nuevoPaciente.grado = "Delgadez aceptable.";
 } else if (nuevoPaciente.imc>= 18.5 && nuevoPaciente.imc <= 24.99) {
    nuevoPaciente.grado = "Normal.";
} else if (nuevoPaciente.imc >= 25 && nuevoPaciente.imc <= 29.99) {
    nuevoPaciente.grado = "Preobeso.";
} else if (nuevoPaciente.imc >= 30 && nuevoPaciente.imc <= 34.99) {
    nuevoPaciente.grado = "Obeso tipo I.";
} else if (nuevoPaciente.imc >= 35 && nuevoPaciente.imc <= 39.99) {
    nuevoPaciente.grado = "Obeso tipo II.";
} else if (nuevoPaciente.imc > 40 ) {
    nuevoPaciente.grado = "Obeso tipo III.";
} 

let resultado = ("Tu indice de masa corporal es: "+ nuevoPaciente.imc + " por lo que tu grado de obecidad es: " + nuevoPaciente.grado);

alert (resultado); // Resultado.

//filter

const edadMasVeinte = listaPacientes.filter(listaPacientes =>listaPacientes.edad > 20);

 console.log(edadMasVeinte);

 //find

 const Edad = listaPacientes.find(pacientes => pacientes.edad > 10);

 console.log(Edad);