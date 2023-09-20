//Array para entrenadores
const entrenadores = [];
//Llamamos elementos de html para que figure nombre del entenador
let usuario = document.querySelector("#nombreEntrenador");

function agregarEntrenador() {
  const nombreEntrenador = prompt("Nombre entrenador: ");
  const apellidoEntrenador = prompt("Apellido entrenador: ");

  const nuevoEntrenador = {
    nombre: nombreEntrenador,
    apellido: apellidoEntrenador,
  };

  entrenadores.push(nuevoEntrenador);

  usuario.innerText = nombreEntrenador + " " + apellidoEntrenador;
}

function verEntrenadores() {
  console.log(entrenadores);
}
//PANEL ENTRENRADORES: la idea es en el futuro cuando tenga más conocimientos, generan un panel donde el entrenador tenga todos los datos de sus alumnos, para que pueda seleccionando a cada uno, ver las rutinas que le hizo e ir cargandole nuevas rutinas

//Array para alumnos
const alumnos = [];
//Llamamos elemento de html para que pueda crear una lista de los alumnos
const alumnoLista = document.querySelector("#alumnos");
//Funcion agregar alumnos
function agregarAlumno() {
  const nombre = prompt("Ingrese nombre del alumno:");
  const apellido = prompt("Ingrese apellido del alumno: ");
  const inicio = new Date();

  const nuevoAlumno = {
    nombre: nombre,
    apellido: apellido,
    inicio: inicio.toLocaleDateString(),
  };

  alumnos.push(nuevoAlumno);
  const miDiv = document.createElement("option");
  miDiv.innerHTML = `${nuevoAlumno.nombre}  ${nuevoAlumno.apellido}`;
  alumnoLista.append(miDiv);
}
//Función para ver alumnos en la consola
function mostrarAlumnos() {
  console.log(alumnos);
  console.clear();
  // console.log("Alumnos:");
  for (const alumno of alumnos) {
    console.log("Nombre:", alumno.nombre);
    console.log("Apellido:", alumno.apellido);
    console.log("Fecha inicio:", alumno.inicio);
  }
}
//Función para quitar alumnos (no se eliminan de la lista del select porque no se como hacerlo)
function quitarAlumno() {
  const nombreAlumno = prompt("Nombre de alumno: ");
  const apellidoAlumno = prompt("Apellido del alumno: ");
  for (const alumno of alumnos) {
    if (alumno.nombre == nombreAlumno && alumno.apellido == apellidoAlumno) {
      //Buscar indice a través de indeOf
      const indiceAlumno = alumnos.indexOf(alumno);
      //Borramos de la lista de alumnos
      alumnos.splice(indiceAlumno, 1);
      //Mostramos mensaje para confirmar su borrado
      alert(
        `El alumno ${alumno.nombre} ${alumno.apellido} fue borrado de tu lista de alumnos.`
      );
      return;
    }
  }
  alert(
    `No se ha encontrado al alumno ${nombreAlumno} ${apellidoAlumno} en tu lista.`
  );
}
//PANEL DE ARMADO DE RUTINA
//Array de días posibles de entrenamiento, para en el futuro generar un div o article para cada día y ahi dentro meter los ejercicios
const dias = ["DIA 1", "DIA 2", "DIA 3", "DIA 4", "DIA 5", "DIA 6", "DIA 7"];

//Clase ejercicios
class Ejercicio {
  constructor(nombre, musculo, video) {
    this.nombre = nombre;
    this.musculo = musculo;
    this.video = video;
  }
}

const aperturaInclinada = new Ejercicio(
  "APERTURA INCLINADA",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeJaQWDC1P/?igshid=MzRlODBiNWFlZA=="
);
const pressPlanoConBarra = new Ejercicio(
  "PRESS PLANO CON BARRA",
  "PECTORALES",
  "https://www.instagram.com/tv/CeeIDoQj7QI/?igshid=MzRlODBiNWFlZA=="
);

const dominadasEnMaquina = new Ejercicio(
  "DOMINADAS EN MAQUINA",
  "DORSALES",
  "https://www.instagram.com/tv/CeeJwcZD00Y/?igshid=MzRlODBiNWFlZA=="
);

const remoEnMaquina = new Ejercicio(
  "REMO BAJO",
  "DORSALES",
  "https://www.instagram.com/tv/CeeKDtljYSr/?igshid=MzRlODBiNWFlZA=="
);

//Array de ejercicio ya pre establecidos
const ejercicios = [
  aperturaInclinada,
  pressPlanoConBarra,
  dominadasEnMaquina,
  remoEnMaquina,
];

// Mostramos los ejercicios para poder ingresar bien los nombres al momento de hacer la rutina

console.log(ejercicios);

//Array donde se irán guardando los nuevos ejercicios de la rutina seleccionados
const rutina = [];
//Se llama etiqueta de html donde se va a agregar elemento de lista de ejercicios
const listaEjercicios = document.querySelector("#div_ejercicio");

//Función para agregar los ejercicios que necesitamos
function agregarEjercicio() {
  const nombreEjercicio = prompt(
    "Ingrese ejercicio de la lista de ejercicios en mayúscula: "
  );

  for (const ejercicio of ejercicios) {
    if (ejercicio.nombre == nombreEjercicio) {
      const resultadoEjercicio = ejercicios.find((el) =>
        el.nombre.includes(nombreEjercicio)
      );
      const seriesYRepeticiones = prompt(
        "Ingrese series y repeticiones (ejemplo Series: 4 / Repetciones: 15): "
      );
      const descanso = prompt("Ingrese descando entre series (tiempo): ");
      rutina.push(ejercicio);
      const nuevoEjercicio = document.createElement("div");
      nuevoEjercicio.innerHTML = `Ejercicio: ${ejercicio.nombre} // Series y Repeticiones: ${seriesYRepeticiones} =======> Descanso entre series:  ${descanso}`;
      listaEjercicios.append(nuevoEjercicio);
    }
  }
}

//Función para ver los ejercicios que se van agregando en la rutina
function mostrarEjerciciosDeRutina() {
  console.log(rutina);
}
//Función para quitar ejercicios de la rutina
function quitarejercicio() {
  const nombreEjercicio = prompt(
    "Ingrese ejercicio de la lista de ejercicios en mayúscula: "
  );
  for (const ejercicio of rutina) {
    if (ejercicio.nombre == nombreEjercicio) {
      //Buscar indice a través de indeOf
      const indiceEjercicio = rutina.indexOf(ejercicio);
      //Borramos de la lista de alumnos
      rutina.splice(indiceEjercicio, 1);
      //Mostramos mensaje para confirmar su borrado
      alert(
        `El ejercicio ${ejercicio.nombre}  fue borrado de tu lista de la rutina.`
      );
      return;
    }
  }
  alert(`No se ha encontrado el ejercicio ${nombreEjercicio} en la rutina.`);
}
