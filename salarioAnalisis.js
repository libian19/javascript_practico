//CALCULAR MEDIANA DE SALARIOS

//1. Crear un nuevo array con solo los salarios
const salarys = salarios.map(function(persona){
    return persona.salary;
});

//2. Ordenar el array de salarios
const salarysSorted = salarys.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
});

//3. Para calcular si el array de salarios es par (true) o impar (false)
function esPar(numero){
    return (numero % 2 ===0);
}

//4. Calcular Mediana de Salarios
function calcularMedianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    if (esPar(lista.length)){
        const salary1 = lista[mitad];
        const salary2 = lista[mitad-1];
        const medianaSalary = (salary1 + salary2) / 2;
        return medianaSalary;
    }else{
        const medianaSalary = lista[mitad];
        return medianaSalary;
    }
}

//5. Para calcular el Top 10%, usando metodo.slice
const sliceStart= parseInt((salarysSorted.length * 90) / 100);
//const sliceEnd= parseInt(salarysSorted.length - sliceStart);
const salarysTop10= salarysSorted.slice(sliceStart);

const medianaSalary = calcularMedianaSalarios(salarysSorted);
const medianaSalaryTop10= calcularMedianaSalarios(salarysTop10);

console.log({
  medianaSalary,
  medianaSalaryTop10,
});
