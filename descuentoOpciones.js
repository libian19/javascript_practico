function PrecioAPagar (precioRealProducto, descuento){
    const porcentajePrecioApagar = 100 - descuento;
    const precioConDescuento = precioRealProducto * porcentajePrecioApagar / 100;
    
    return(precioConDescuento);
}

function calcularPrecioAPagar (){
    const precioProducto = document.getElementById("precioReal");
    const precioRealProducto = parseInt(precioProducto.value);
    const select = document.getElementById("cupones");
    const cuponValor = select.options[select.selectedIndex].value;
   
    let descuento;
    if (cuponValor === 'jdc'){
        descuento = 30;
    }else if(cuponValor === 'nodigas'){
        descuento = 10;
    }else{
        descuento = 20;
    }
    console.log(descuento);

    const precioConDescuento = PrecioAPagar(precioRealProducto, descuento);
    const resultado = document.getElementById("resultadoPrecio");
    resultado.innerText = "El precio con descuento es: $ " + precioConDescuento; 
}
