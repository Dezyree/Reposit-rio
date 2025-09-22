let numero1 = Number(prompt("digite o primeiro numero: "));
let numero2 = Number(prompt("digite o segundo numero: "));

let sinal = prompt("digite a operacao desejada (+,-,*,/): ");

if (isNaN(numero1), isNaN(numero2)) {
    alert("digite apenas numeros validos");
}
else {
    let resultado;

    if (sinal === "+") {
        resultado = numero1 + numero2;
        alert("o resultado dessa conta e: " + resultado);
    }

    else if (sinal === "-") {
        resultado = numero1 - numero2;
          alert("o resultado dessa conta e: " + resultado);
    }

    else if (sinal === "*") {
        resultado = numero1 * numero2;
          alert("o resultado dessa conta e: " + resultado);
    }

    else if (sinal === "/") {
        resultado = numero1 / numero2;
         alert("o resultado dessa conta e: " + resultado);
    }
    
    else {
        // 5. Operador inválido
        alert("Operação inválida!");
    }

}
