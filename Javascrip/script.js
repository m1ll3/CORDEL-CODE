document.getElementById("titulo").innerHTML = "Opa, tudo bem?";
document.write("Algum texto");
window.alert("Mensagem exemplo")
// ou você pode usar só o atalho alert("")//
//console.log("A mensagem que eu inserir aqui aparecerá no console");
// var nome = x //
//var nome = "Amorim";
// var sobrenome = "Mille"
// var completo = nome + " "+sobrenome sai o nome completo com espaço entre eles
//alert(nome);
var hora = 9;
if(hora <12) {
    console.log("bom dia")
};// else{
  //  console.log("É de tarde")
//}
//else if(hora <18){
    // console.log("É de tarde")
//}
//else(hora <24){
//  console.log("É de noite")
//}
// tambémd a pra fazer condiçãe de duas coisas
//if(hora >= 12 && hora <= 18){
//  console.log("É de tarde")
//}
//if (hora == 12 || hora == 18) {
//  console.log("Você está na hora do rush")
//}
//o que acontece com o var é hosting pode ser transferida pra qualquer área do sistema, do console pra window.
//
// let nome = "Amorim";
// let só funciona no scopo que for colocada, você não pode colocar no console, se der console.log() só vai aparecer se ele tiver dentro do if do let
// além de estar dentro do scopo a variável let não pode ser redefinida "sobreposta" por outro let
// 
// a variavél const nome = "amorim" não pode ser redefinida pq é constante, é bom para que você não altere sem querer o valor

const valor1 = x;
const valor2 = y;
const resultadosoma = x + y;
console.log("Resultado"+" "+ resultadosoma);
    if (resultadosoma > 0){
        console.log("Positivo");
    }
    else (resultadosoma < 0) {
        console.log("Negativo");
    };