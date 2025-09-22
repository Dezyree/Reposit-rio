let numero = 25;
let string = "25";

console.log(numero == string); 
// vai sair true pq foi convertido a string em um numero

console.log(numero === string);
// vai sair false pq nao associou o "25" como um numero por causa do seu tipo string 



//Explicacao do == : o operador compara os valores das variaveis, (mas pode transformar e converter se nescessario, como ocorrida nessa linha do codigo) o que transforma o string = "25" em um numero = 25, assim dando o resultado true.

//Explicacao do === : o operador compara os valores e os seu tipos, e como ambos sao o mesmo numero mas nao o mesmo tipo, isso faz com que nao sejam reconhecido com iguais, o que faz com que a comparaçao seja false.
