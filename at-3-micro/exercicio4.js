let idade = prompt("Quantos anos voce tem?");
idade = Number(idade);

if (idade) {
    




    if (idade >= 18) {
        alert("Voce pode tirar a CNH!")
    }

    else {
        let falta = 18 - idade;
        alert("Ainda faltam " + falta + " ano(s) para voce poder tirar a CNH."); 
    } 
}

else {
  alert("Por favor, digite um número válido para a idade.");


}