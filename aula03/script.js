// 1
alert("Bem-vindo ao sistema!");

// 2
let nome = prompt("Qual é o seu nome?");
alert("Olá, " + nome + "!");

// 3
let idade = Number(prompt("Qual é a sua idade?"));

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 4
let confirmar = confirm("Deseja prosseguir?");

if (confirmar) {
    alert("Você escolheu continuar.");
} else {
    alert("Você cancelou.");
}

// 5
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let soma = num1 + num2;

alert("A soma é: " + soma);

// 6
let numero = Number(prompt("Digite um número:"));
let dobro = numero * 2;

alert("O dobro do número é: " + dobro);

// 7
let nome2 = prompt("Digite seu nome novamente:");
let idade2 = Number(prompt("Digite sua idade novamente:"));

alert("Olá " + nome2 + ", você tem " + idade2 + " anos.");