function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }

}

function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    const listaOrdenada = lista.sort(function(a, b) {return a-b}); 

    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista-1];
        const mediana = (elemento1 + elemento2)/2;
        return mediana;
    }else{
        const mediana = listaOrdenada[mitadLista];
        return mediana;
    }
}
