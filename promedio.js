function calcularMediaAritmetica(lista){
   const sumalista = lista.reduce(
        function (sumaAcumulada = 0, nuevoElemento){
            return sumaAcumulada + nuevoElemento;
        }
    );
    const promediolista = sumalista / lista.length;
    return promediolista;
}

/*let sumalista = 0;
for (let i=0; i<lista.length; i++){
    sumalista = sumalista + lista[i];
}
*/

/*function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
        );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}
*/