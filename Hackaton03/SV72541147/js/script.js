function ejercicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}
function ejercicio2(){
    const numero = prompt("Por favor ingrese un número entero:");
    const entero = parseInt(numero);
    if (entero < 0) {
    alert(`El número ${entero} es negativo.`);
    } else {
    alert(`El número ${entero} no es negativo.`);
    }
}
function ejercicio3(){
    const numero = prompt("Por favor ingrese un número:");
    if (numero.slice(-1) === '4') {
    alert(`El número ${numero} termina en 4.`);
    } else {
    alert(`El número ${numero} no termina en 4.`);
    }
}
function ejercicio4(){
    const numero1 = parseInt(prompt("Por favor ingrese el primer número entero:"));
    const numero2 = parseInt(prompt("Por favor ingrese el segundo número entero:"));
    const numero3 = parseInt(prompt("Por favor ingrese el tercer número entero:"));

    const numeros = [numero1, numero2, numero3];

    numeros.sort((a, b) => a - b);

    alert("Los números ordenados de menor a mayor son:");
    alert(numeros.join(", "));
 }
 function ejercicio5(){
    const precioZapato = 80;
    const cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));
    const precioTotalSinDescuento = cantidadZapatos * precioZapato;

    let descuento = 0;
    let porcentajeDescuento = 0;

    if (cantidadZapatos > 30) {
         descuento = precioTotalSinDescuento * 0.4; // 40% de descuento
         porcentajeDescuento = 40;
   } else if (cantidadZapatos > 20) {
         descuento = precioTotalSinDescuento * 0.2; // 20% de descuento
         porcentajeDescuento = 20;
   } else if (cantidadZapatos > 10) {
         descuento = precioTotalSinDescuento * 0.1; // 10% de descuento
         porcentajeDescuento = 10;
   }

   const precioTotalConDescuento = precioTotalSinDescuento - descuento;

   alert(`El precio total sin descuento es: $${precioTotalSinDescuento.toFixed(2)}`);
   alert(`Se aplica un descuento del ${porcentajeDescuento}% ($${descuento.toFixed(2)})`);
   alert(`El precio total con descuento es: $${precioTotalConDescuento.toFixed(2)}`);

 }
 function ejercicio6(){
    const tarifaHoraNormal = 20;
    const tarifaHoraExtra = 25;
    
    const horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));
    
    let sueldoSinExtras = 0;
    if (horasTrabajadas <= 40) {
        sueldoSinExtras = horasTrabajadas * tarifaHoraNormal;
    } else {
        sueldoSinExtras = 40 * tarifaHoraNormal; 
    }
    
    const horasExtras = Math.max(0, horasTrabajadas - 40);
    const sueldoTotal = sueldoSinExtras + (horasExtras * tarifaHoraExtra);
    
    alert(`El sueldo semanal del trabajador es: $${sueldoTotal.toFixed(2)}`);
 }
 function ejercicio7(){
    const descuentos = {
        A: 0.1, 
        B: 0.15, 
        C: 0.2 
      };
      
    const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");
    const precioHelado = parseFloat(prompt("Ingrese el precio del helado:"));
      
      if (tipoMembresia in descuentos) {
        
    const descuento = descuentos[tipoMembresia];
        
    const precioFinal = precioHelado * (1 - descuento);
         
        alert(`El precio final del helado con membresía tipo ${tipoMembresia} es: $${precioFinal.toFixed(2)}`);
      } else {
        alert("El tipo de membresía ingresado no es válido.");
      }
}
 function ejercicio8(){
    const nota1 = parseFloat(prompt("Ingrese la nota 1:"));
    const nota2 = parseFloat(prompt("Ingrese la nota 2:"));
    const nota3 = parseFloat(prompt("Ingrese la nota 3:"));

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 60) {
      alert(`El estudiante aprobó con un promedio de ${promedio.toFixed(2)}.`);
    } else {
      alert(`El estudiante no aprobó con un promedio de ${promedio.toFixed(2)}.`);
    }
 }
 function ejercicio9(){
    const salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));
    const porcentajeAumentoMayor2000 = 0.05; 
    const porcentajeAumentoMenor2000 = 0.1; 

    let aumento = 0;
    if (salarioActual > 2000) {
    aumento = salarioActual * porcentajeAumentoMayor2000;
    } else {
    aumento = salarioActual * porcentajeAumentoMenor2000;
    }

    const nuevoSalario = salarioActual + aumento;
    alert(`El aumento para el trabajador será de $${aumento.toFixed(2)}.`);
    alert(`El nuevo salario del trabajador será de $${nuevoSalario.toFixed(2)}.`);
 }
 function ejercicio10(){
    const numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
      alert(`${numero} es un número par.`);
    } else {
      alert(`${numero} es un número impar.`);
    }
 }
 function ejercicio11(){
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    const numero3 = parseFloat(prompt("Ingrese el tercer número:"));

    let mayor = numero1;
    if (numero2 > mayor) {
    mayor = numero2;
}
    if (numero3 > mayor) {
    mayor = numero3;
}
    alert(`El mayor de los tres números es: ${mayor}`);
 }
 function ejercicio12(){
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    let mayor;
    if (numero1 > numero2) {
    mayor = numero1;
} else if (numero2 > numero1) {
    mayor = numero2;
} else {
    alert("Los números son iguales.");
}
    if (mayor !== undefined) {
    alert(`El número mayor es: ${mayor}`);
}
 }
 function ejercicio13(){
    const letra = prompt("Ingrese una letra:");
    const letraMinuscula = letra.toLowerCase();

    if (letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u') {
    alert("La letra ingresada es una vocal.");
  } else {
    alert("La letra ingresada no es una vocal.");
  }
 }
 function ejercicio14(){
    const numero = parseInt(prompt("Ingrese un número del 1 al 10:"));
    if (numero >= 1 && numero <= 10) {
    let esPrimo = true;

    if (numero === 1) {
    esPrimo = false;
  } else if (numero !== 2 && numero % 2 === 0) {
    esPrimo = false;
  } else if (numero !== 3 && numero % 3 === 0) {
    esPrimo = false;
  } else if (numero !== 5 && numero % 5 === 0) {
    esPrimo = false;
  }

    if (esPrimo) {
      alert(`El número ${numero} es primo.`);
  } else {
      alert(`El número ${numero} no es primo.`);
  }
} else {
  alert("El número ingresado no es válido. Por favor ingrese un número del 1 al 10.");
}
 }
 function ejercicio15(){
    function centimetrosAPulgadas(centimetros) {
        return centimetros / 2.54;
    }
    
    function librasAKilogramos(libras) {
        return libras * 0.453592;
    }
    
    const centimetros = 20;
    const pulgadas = centimetrosAPulgadas(centimetros);
    console.log(`${centimetros} centímetros equivalen a ${pulgadas.toFixed(2)} pulgadas.`);
    
    const libras = 10;
    const kilogramos = librasAKilogramos(libras);
    console.log(`${libras} libras equivalen a ${kilogramos.toFixed(2)} kilogramos.`);
 }
 function ejercicio16(){

 }
 function ejercicio17(){

 }
 function ejercicio18(){

 }
 function ejercicio19(){

 }
 function ejercicio20(){

 }
 function ejercicio21(){

 }
 function ejercicio21(){

 }
 function ejercicio22(){

 }
 function ejercicio23(){

 }
 function ejercicio24(){

 }
 function ejercicio25(){

 }
 function ejercicio26(){

 }
 function ejercicio27(){

 }
 function ejercicio28(){

 }
 function ejercicio29(){

 }
 function ejercicio30(){

 }
 function ejercicio31(){

 }
 function ejercicio32(){

 }
 function ejercicio33(){

 }
 function ejercicio34(){

 }
 function ejercicio35(){

 }
 function ejercicio36(){

 }
 function ejercicio37(){

 }
 function ejercicio38(){

 }
 function ejercicio39(){

 }
 function ejercicio40(){

 }