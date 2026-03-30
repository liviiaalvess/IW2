var numero = prompt("digite um numero");
if (numero %2 == 0) {
    alert("Seu número é par")
} else {
    alert("Seu número é impar")
}

var idade = prompt("Digite sua idade!")
if (idade <18) {
    alert("Você é menor de idade")
} else {
    alert("Você é maior de idade!")
}

for (var i = 1;  i < 11; i++) {
    console.log(i);
}

console.log("numero aleatorio")
var x = prompt("Digite um número aleatório!")
while (x>0) {
    console.log(x);
    x--;
}

console.log("tabuada")
var tabuada = prompt("DIgite um número para a tabuada")
var multi = 0 
for (var m = 1; m <11; m++){
    multi = tabuada * m;
    console.log(multi);
}

console.log("somatoria")
var somar = prompt("Digite um número para a soma")
var result = 0
for(var s = 0; s < somar; s++){
    result = result + s;
    console.log(result)
}

console.log("Numeros primos")
var nprimo = prompt("Digite um número para saber se ele e primo")
if (nprimo %2 == 1) {
    alert("Seu número e primo")
} else {
    ("seu número nao é primo")
}

console.log("Login Simples")
var senha = 12345
var login = "pietrorodrigues09"
var vslogin = prompt("Digite seu login")
var vsenha = prompt("Digite sua senha")
if (vslogin == login) {
    if (vsenha == senha) {
        alert("login concluido")
    } else {
        alert("senha errada")
    }
} else{
    alert("usuário errado")
}

console.log("Somatória");
var numero = 1
var soma = 0
while (numero >= 0) {
    numero = parseInt(prompt("Digite um número maior que 0"));
    soma = numero + soma
    if (numero < 0) {
        break
    }
}
console.log(soma)

console.log("Adivinhe o número");
var alt = Math.floor(Math.random() * 10);
var palpite;
while(true){
    palpite = parseInt(prompt("Adivinhe o número:"));
    if (palpite == alt){
        console.log("PARABÉNS VOCÊ ACERTOU O NÚMERO")
        break
    }else if(palpite < alt){
        alert("O número é MAIOR!");
    } 
    else{
        alert("O número é MENOR!");
    }
}

console.log("fatorial");
var numero = parseInt(prompt("Digite um número:"));
if (numero < 0){
    console.log("Fatorial não existe para números negativos.");
} else {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    }
    console.log("O fatorial de " + numero + " é: " + fatorial);


console.log("validação notas");

var nota;

while (true) {
    nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

    if (nota >= 0 && nota <= 10) {
        console.log("Nota válida: " + nota);
        break;
    } else {
        console.log("Valor inválido, tente novamente.");
    }
}

console.log("média notas");

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

console.log("Média: " + media.toFixed(2));

if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

console.log("caixa eletronico");

var valor = parseInt(prompt("Digite o valor para saque:"));

var notas100 = Math.floor(valor / 100);
valor %= 100;

var notas50 = Math.floor(valor / 50);
valor %= 50;

var notas20 = Math.floor(valor / 20);
valor %= 20;

var notas10 = Math.floor(valor / 10);
valor %= 10;

var notas5 = Math.floor(valor / 5);
valor %= 5;

var notas2 = Math.floor(valor / 2);
valor %= 2;

var notas1 = valor;

console.log("Notas de 100: " + notas100);
console.log("Notas de 50: " + notas50);
console.log("Notas de 20: " + notas20);
console.log("Notas de 10: " + notas10);
console.log("Notas de 5: " + notas5);
console.log("Notas de 2: " + notas2);
console.log("Notas de 1: " + notas1);

console.log("numeros impares");

var num = parseInt(prompt("Digite um número:"));

for (var i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}