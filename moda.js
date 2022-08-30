//const listaObjeto = {};

function ObjetoALista(listaObjeto){
    const listaArray = Object.entries(listaObjeto).sort(function (elemA, elemB){
        return elemA[1] - elemB[1];
    })
}

function calcularModa(lista){
    const listaObjeto = {};
    listaObjeto = lista.map(function(elemento){
        if (listaObjeto[elemento]){
            listaObjeto[elemento] += 1;
        }else{
            listaObjeto[elemento] = 1;
        }
    });
    return listaObjeto;
}