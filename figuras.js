function perimetroCuadrado(lado){
    const resultado= lado*4;
    console.log(resultado);
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

function calcularPerimetro(){
    const input = document.getElementById("inputCuadrado");
    const value= parseInt(input.value);
    const resultado = perimetroCuadrado(value);
    alert(resultado);
}

function calcularArea(){
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    alert(areaCuadrado(value));
}

//CIRCULOS

function calcularDiametro(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = calcularDiametro(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

function calcularPerimetroCirculo(){
    const input= document.getElementById('inputRadioCirculo');
    const radio= parseInt(input.value);
    const diametro= calcularDiametro(radio);
    const perimetro=  perimetroCirculo(radio);
    alert('El diámetro de la circunsferencia es de: ' + diametro + 
    ' y su perímetro es de: '+ perimetro);
}

function calcularAreaCirculo(){
    const input= document.getElementById('inputRadioCirculo');
    const radio= parseInt(input.value);
    const area= areaCirculo(radio);
    alert('El área del círculo es de: ' + area);

}
// CALCULAR TRIANGULO

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1Triangulo");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado2Triangulo");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputBaseTriangulo");
    const base = parseInt(input3.value);

    alert(perimetroTriangulo(lado1, lado2, base));    
}

function calcularAlturaTriangulo(lado1, base){
    const altura = Math.sqrt((lado1**2)-((base**2)/4));
    //alert('La altura del triángulo es: ' + altura);
    return altura;
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputLado1Triangulo");
    const lado1 = parseInt(input1.value);
   
    const input2 = document.getElementById("inputLado2Triangulo");
    const lado2 = parseInt(input2.value);
   
    const input3 = document.getElementById("inputBaseTriangulo");
    const base= parseInt(input3.value);

    const alturaTriangulo = calcularAlturaTriangulo(lado1, base);
    const areaTriangulo = (base * alturaTriangulo) / 2; 
    alert('El area del Triangulo es: ' + areaTriangulo);
}
