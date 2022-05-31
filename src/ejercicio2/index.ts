/*Ejercicio 2:
Una materia de la carrera de Ingeniería de Sistemas tiene 30 alumnos,
divididos en 3 comisiones. Estos arreglos contienen las notas finales
de los alumnos en cada comisión :
comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]
comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]
comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9]
1. Crear una función que devuelva el mayor promedio y a qué comisión corresponde.
2. Crear una función que devuelva el menor promedio y a qué comisión corresponde.
3. Teniendo en cuenta que la materia se aprueba con 6, crear una función que
devuelva la cantidad de desaprobados en una comisión, mostrar el resultado para cada comisión
4. Crear una función que devuelva la menor nota de una comisión,
mostrar el resultado para cada comisión.*/
let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];
let indice: number;
//Función que devuelve el promedio de la comision
function promedioNota(notas: number[]): number {
  let suma: number = 0;
  let promedio: number = notas.length;
  for (indice = 0; indice < notas.length; indice++) suma += notas[indice];
  return suma / promedio;
}
//Función que devuelve el mayor promedio
function mayorPromedio(
  comisionA: number[],
  comisionB: number[],
  comisionC: number[]
): string {
  let promedioA: number = promedioNota(comisionA);
  let promedioB: number = promedioNota(comisionB);
  let promedioC: number = promedioNota(comisionC);
  let texto: string = "";
  if (promedioA > promedioB && promedioA > promedioC) {
    texto =
      "El mayor promedio es: " + promedioA + " y corresponde a la comisión A";
  } else if (promedioB > promedioA && promedioB > promedioC) {
    texto =
      "El mayor promedio es: " + promedioB + " y corresponde a la comisión B";
  } else {
    texto =
      "El mayor promedio es: " + promedioC + " y corresponde a la comisión C";
  }
  return texto;
}
//Función que devuelve el menor promedio
function menorPromedio(
  comisionA: number[],
  comisionB: number[],
  comisionC: number[]
): string {
  let promedioA: number = promedioNota(comisionA);
  let promedioB: number = promedioNota(comisionB);
  let promedioC: number = promedioNota(comisionC);
  let texto: string = "";
  if (promedioA < promedioB && promedioA < promedioC) {
    texto =
      "El menor promedio es: " + promedioA + " y corresponde a la comisión A";
  } else if (promedioB < promedioA && promedioB < promedioC) {
    texto =
      "El menor promedio es: " + promedioB + " y corresponde a la comisión B";
  } else {
    texto =
      "El menor promedio es: " + promedioC + " y corresponde a la comisión C";
  }
  return texto;
}
//Función que muestra cantidad de desaprobados
function totalDesaprobados(notas: number[]): number {
  let cantidadDesaprobados: number = 0;
  for (indice = 0; indice < notas.length; indice++) {
    if (notas[indice] < 6) {
      cantidadDesaprobados++;
    }
  }
  return cantidadDesaprobados;
}
//Función que devuelve la menor nota de una comisión
function menorNota(notas: number[]): number {
  let menor: number = 10;
  for (indice = 0; indice < notas.length; indice++) {
    if (notas[indice] < menor) {
      menor = notas[indice];
    }
  }
  return menor;
}

console.log(mayorPromedio(comisionA, comisionB, comisionC));
console.log(menorPromedio(comisionA, comisionB, comisionC));
console.log(
  "La comisión A tiene " + totalDesaprobados(comisionA) + " desaprobados"
);
console.log(
  "La comisión B tiene " + totalDesaprobados(comisionB) + " desaprobados"
);
console.log(
  "La comisión C tiene " + totalDesaprobados(comisionC) + " desaprobados"
);
console.log("La menor nota de la comisón A es: " + menorNota(comisionA));
console.log("La menor nota de la comisón A es: " + menorNota(comisionB));
console.log("La menor nota de la comisón A es: " + menorNota(comisionC));
