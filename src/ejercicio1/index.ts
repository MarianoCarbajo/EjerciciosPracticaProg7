/*Ejercicio 1:
Una materia de la carrera de Ingeniería de Sistemas exige la entrega de un trabajo práctico
cada mes del año académico. Este arreglo contiene las notas de un alumno para los meses de
marzo a diciembre:
notasAlumno: [7, 6, 9, 5, 8, 7, 10, 4, 8, 8]
1) Teniendo en cuenta que se aprueba con 6, crear una función que devuelva en que meses
desaprobó el alumno.
2) Crear una función que devuelva en que mes obtuvo menor nota el alumno y cuál fue la nota.
3) Crear una función que devuelva en que mes obtuvo mayor nota el alumno y cuál fue la nota.
4) Crear una función que devuelva el promedio del alumno.*/

let notasAlumno: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];
let mesesNotas: string[] = [
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
let indice: number;
//Función que muestra en que mes desaprobó
function desaproboMes(notas: number[], mes: string[]): string {
  let mesDesaprobado: string = "";
  for (indice = 0; indice < notas.length; indice++) {
    if (notas[indice] < 6) {
      mesDesaprobado += mes[indice] + " ";
    }
  }
  return mesDesaprobado;
}
//Función que muestra el mes que tuvo la menor nota
function menorNota(notas: number[], mes: string[]): string {
  let menor: number = 10;
  let mesMenor: string = "";
  let texto: string = "";
  for (indice = 0; indice < notas.length; indice++) {
    if (notas[indice] < menor) {
      menor = notas[indice];
      mesMenor = mes[indice];
    }
  }
  texto = "mes: " + mesMenor + ", nota: " + menor;
  return texto;
}
//Función que muestra el mes que tuvo la mayor nota
function mayorNota(notas: number[], mes: string[]): string {
  let mayor: number = 0;
  let mesMayor: string = "";
  let texto: string = "";
  for (indice = 0; indice < notas.length; indice++) {
    if (notas[indice] > mayor) {
      mayor = notas[indice];
      mesMayor = mes[indice];
    }
  }
  texto = "mes: " + mesMayor + ", nota: " + mayor;
  return texto;
}
//Función que devuelve el promedio del alumno
function promedioNota(notas: number[]): number {
  let suma: number = 0;
  let promedio: number = notas.length;
  for (indice = 0; indice < notas.length; indice++) suma += notas[indice];
  return suma / promedio;
}

console.log(
  "Los meses desaprobados son: " + desaproboMes(notasAlumno, mesesNotas)
);
console.log(
  "El mes que sacó menor nota es: " + menorNota(notasAlumno, mesesNotas)
);
console.log(
  "El mes que sacó mayor nota es: " + mayorNota(notasAlumno, mesesNotas)
);
console.log("El promedio del alumno es: " + promedioNota(notasAlumno));
