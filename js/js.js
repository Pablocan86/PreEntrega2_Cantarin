//Lamamos elementos de html
const alumnoLista = document.querySelector("#alumnos");
let usuario = document.querySelector("#nombreEntrenador");
const listaDeEjercicios = document.querySelector("#ejercicio");
//1. Creamos una array para poder cargar a los entrenadores
//2. Hacemos un objeto para que se pueden ingresar los datos del entrenador
//3. La idea es que cada entrenador tenga su panel de trabajo para poder manipular los alumnos bajo su mando
const entrenadores = [];
let nuevoEntrenador;

function agregarEntrenador() {
  const nombre = prompt("Ingrese su nombre: ");
  const apellido = prompt("Ingrese su apellido: ");

  const nuevoEntrenador = {
    nombre: nombre,
    apellido: apellido,
  };

  entrenadores.push(nuevoEntrenador);

  usuario.innerText = nombre + " " + apellido;

  //   console.log(entrenadores);
}

//SECTOR ENTRENADORES
//1. Necestiamos crear array para que se puedan ir ingresando los alumnos
//lo que conlleva solicitar datos del mismo (se harían perfiles por cada alumno)
//2. Function donde podamos ver todos los alumnos que tenemos bajo nuestro cargo
//3. Fucion para poder ingresar al panel de ese alumno
//4. Una vez dentro del panel del alumno, agregar una acción para crear la rutina y poder
//cargarsela en su perfil
const alumnos = [];
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
  miDiv.innerText = nuevoAlumno.nombre + " " + nuevoAlumno.apellido;
  alumnoLista.append(miDiv);
}
//Funcion mostrar alumnos
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
//Funcion quitar alumno
function quitarAlumno() {
  const nombreAlumno = prompt("Nombre del alumno: ");
  const apellidoAlumno = prompt("Apellido del alumno: ");
  for (const alumno of alumnos) {
    if (alumno.nombre == nombreAlumno && alumno.apellido == apellidoAlumno) {
      //Encontrado necesitamos el indice y lo pedimos con indexOF
      const indiceAlumno = alumnos.indexOf(alumno);
      //Lo borramos con splice ya que obtuvimos el indice
      alumnos.splice(indiceAlumno, 1);
      //Mostramos un mensaje para mostar que producto fue borrado
      alert(
        "El alumno " +
          "'" +
          alumno.nombre +
          " " +
          alumno.apellido +
          "' fue borrado de tu lista de alumnos."
      );
      //si encuentra el producto bien con return sale
      return;
    }
  }
  alert(
    "No se encontró el alumno " +
      nombreAlumno +
      " " +
      apellidoAlumno +
      " en el carrito."
  );
}
//ARMADADO DE RUTINAS

//Array días
const dias = ["DIA 1", "DIA 2", "DIA 3", "DIA 4", "DIA 5", "DIA 6", "DIA 7"];
console.log(dias);

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
  new URL("https://www.instagram.com/tv/CeeJaQWDC1P/?igshid=MzRlODBiNWFlZA==")
);
const pressPlanoConBarra = new Ejercicio(
  "PRESS PLANO CON BARRA",
  "PECTORALES",
  new URL("https://www.instagram.com/tv/CeeIDoQj7QI/?igshid=MzRlODBiNWFlZA==")
);

const dominadasEnMaquina = new Ejercicio(
  "DOMINADAS EN MAQUINA",
  "DORSALES",
  new URL("https://www.instagram.com/tv/CeeJwcZD00Y/?igshid=MzRlODBiNWFlZA==")
);

const remoEnMaquina = new Ejercicio(
  "REMO BAJO",
  "DORSALES",
  new URL("https://www.instagram.com/tv/CeeKDtljYSr/?igshid=MzRlODBiNWFlZA==")
);

//CREACION DE RUTINAS
const ejercicios = [
  aperturaInclinada,
  pressPlanoConBarra,
  dominadasEnMaquina,
  remoEnMaquina,
  // (ejercicio1 = new Ejercicio(
  //   "APERTURA INCLINADA",
  //   "PECTORALES",
  //   new URL("https://www.instagram.com/tv/CeeJaQWDC1P/?igshid=MzRlODBiNWFlZA==")
  // )),
  // (ejercicio2 = new Ejercicio(
  //   "DOMINADAS EN MAQUINA",
  //   "DORSALES",
  //   new URL("https://www.instagram.com/tv/CeeJwcZD00Y/?igshid=MzRlODBiNWFlZA==")
  // )),
];

console.log(ejercicios);

const rutina = [];
const armadoRutina = document.querySelector("#armado_rutina");

// function crearRutina() {
//   let section = document.createElement("section");
//   section.innerHTML = `<h3>RUTINA</h3>
//   <div>
//     <select name="" id="">
//       <option value="">DIA 1</option>
//       <option value="">DIA 2</option>
//       <option value="">DIA 3</option>
//       <option value="">DIA 4</option>
//       <option value="">DIA 5</option>
//       <option value="">DIA 6</option>
//       <option value="">DIA 7</option></select
//     ><button>Agregar día</button>
//   </div>
//   <div><button>Quitar día</button></div>

//   <div>
//     <div class="div_ejercicio">
//       <img
//         class="img_camara"
//         src="./images/video-camera-svgrepo-com.svg"
//         alt=""
//       />
//     </div>
//     <div id="ejercicio"></div>
//     <div><button>Quitar Ejercicio</button></div>
//   </div>
//   <button onclick="agregarEjercicio()">Agregar Ejercicio</button>
//   <button onclick="mostrarEjercicios()">Cargar rutina</button>
//   <button onclick="quitarRutina()">Eliminar rutina</button>`;
//   armadoRutina.append(section);
// }

function quitarRutina() {
  armadoRutina.remove();
}

let listaEjercicios = document.querySelector(".div_ejercicio");

function agregarEjercicio() {
  const nombreEjercicio = prompt("Ingrese ejercicio (escribe con mayúscula): ");
  const seriesYRepeticiones = prompt("Ingrese series y repeticiones: ");
  const descanso = prompt("Ingrese descanso entre series: ");
  for (const ejercicio of ejercicios) {
    if (ejercicio.nombre == nombreEjercicio) {
      // const nuevoEjericio = ejercicios.filter((el) =>
      //   el.nombre.includes(nombreEjercicio)
      // );

      rutina.push(ejercicio);
      const nuevoEjercicio = document.createElement("div");
      nuevoEjercicio.innerText =
        "Ejercicio: " +
        ejercicio.nombre +
        " =======> Series y Repeticiones: " +
        seriesYRepeticiones +
        " =======> Descanso entre series: " +
        descanso;
      // document.body.append(nuevoEjercicio);
      listaEjercicios.append(nuevoEjercicio);
      //Mostramos un mensaje para mostar que el ejercicio fue agregado.
      // alert("El ejercicio " + "'" + ejercicio.nombre + " fue agregado.");
      //si encuentra el ejercicio return corta.
      return nombreEjercicio;
    }
    // alert(nombreEjercicio + " no se encuentra en la lista. Vuelva a intentar.");
  }
}

function mostrarEjercicios() {
  console.log(rutina);
}
