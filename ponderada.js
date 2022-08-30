const notes = [
    {
        course: "Matematica",
        note: 15,
        credit: 5
    },
    {
        course: "Programacion",
        note: 18,
        credit: 8
    }
]
/*Fórmula para calcula Media Ponderada
      [(N1*C1) + (N2*C2) + (N3*C3)] / (C1+C2+C3)

*/

//Multiplicar la nota por su credito, se guarda el array la variable noteCredito
const noteCredito= notes.map(function(array){
    return array.note * array.credit;
})

//Sumar todos los productos de noteCredito, 
const sumNoteCredito = noteCredito.reduce(function(sum = 0, newValue){
    return sum + newValue;
})

//Extraer todos los creditos de los cursos
const credits = notes.map(function(notes){
    return notes.credit;
})

//Sumar todos los creditos
const sumCredits = credits.reduce(function(sum=0, newValue){
    return sum + newValue;
})

//Dividir los resultados de las sumas, para obtener la Media ponderada
const ponderada = sumNoteCredito / sumCredits;
console.log (ponderada);




