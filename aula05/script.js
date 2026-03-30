document.addEventListener("DOMContentLoaded", function () {

    const botoesDiv = document.getElementById("botoes");

    // Descrições de cada exercício
    const descricoes = [
        "Verifica se um número é par ou ímpar.",
        "Informa se a pessoa é maior ou menor de idade.",
        "Mostra uma contagem regressiva até zero.",
        "Imprima a tabuada de um número.",
        "Calcule a somatória de números.",
        "Verifica se um número é primo (regra simples).",
        "Simula um login com usuário e senha.",
        "Soma números até digitar um valor negativo.",
        "Jogo para adivinhar um número aleatório.",
        "Calcula o fatorial de um número.",
        "Valida se a nota está entre 0 e 10.",
        "Calcula a média de três notas.",
        "Simula um caixa eletrônico e calcula notas.",
        "Mostra a quantidade de cada nota do saque.",
        "Exibe números ímpares até um valor informado."
    ];

    // Criar botões
    for (let i = 1; i <= 15; i++) {
        const card = document.createElement("div");
        card.style.background = "#ffffff";
        card.style.padding = "15px";
        card.style.borderRadius = "12px";
        card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "space-between";
        card.style.minHeight = "120px";

        const texto = document.createElement("p");
        texto.textContent = descricoes[i - 1];
        texto.style.marginBottom = "10px";
        texto.style.fontWeight = "bold";

        const btn = document.createElement("button");
        btn.textContent = "Abrir";
        btn.onclick = function () {
            abrirModal(i);
        };

        card.appendChild(texto);
        card.appendChild(btn);
        botoesDiv.appendChild(card);
    }

    // Criar modais automaticamente
    for (let i = 1; i <= 15; i++) {
        const modal = document.createElement("div");
        modal.id = "modal" + i;
        modal.className = "modal";

        const content = document.createElement("div");
        content.className = "modal-content";

        const close = document.createElement("span");
        close.className = "close";
        close.innerHTML = "&times;";
        close.onclick = function () {
            fecharModal(i);
        };

        const titulo = document.createElement("h3");
        titulo.textContent = "Modal " + i;

        const descricao = document.createElement("p");
        descricao.textContent = descricoes[i - 1];

        const executar = document.createElement("button");
        executar.textContent = "Executar Função";
        executar.onclick = function () {
            if (i === 14) {
                func13();
            } else {
                window["func" + i]();
            }
        };

        content.appendChild(close);
        content.appendChild(titulo);
        content.appendChild(descricao);
        content.appendChild(executar);
        modal.appendChild(content);
        document.body.appendChild(modal);
    }

});

function abrirModal(num) {
    document.getElementById("modal" + num).style.display = "block";
}

function fecharModal(num) {
    document.getElementById("modal" + num).style.display = "none";
}

// 1
function func1() {
    var numero = prompt("Digite um número");
    if (numero % 2 == 0) {
        alert("Seu número é par");
    } else {
        alert("Seu número é ímpar");
    }
}

// 2
function func2() {
    var idade = prompt("Digite sua idade!");
    if (idade < 18) {
        alert("Você é menor de idade");
    } else {
        alert("Você é maior de idade!");
    }
}

// 3
function func3() {
    var x = prompt("Digite um número aleatório!");
    while (x > 0) {
        console.log(x);
        x--;
    }
}

// 4
function func4() {
    var tabuada = prompt("Digite um número para a tabuada");
    for (var m = 1; m < 11; m++) {
        console.log(tabuada * m);
    }
}

// 5
function func5() {
    var somar = prompt("Digite um número para a soma");
    var result = 0;
    for (var s = 0; s < somar; s++) {
        result = result + s;
    }
    console.log(result);
}

// 6
function func6() {
    var nprimo = prompt("Digite um número para saber se ele é primo");
    if (nprimo % 2 == 1) {
        alert("Seu número é primo");
    } else {
        alert("Seu número não é primo");
    }
}

// 7
function func7() {
    var senha = 12345;
    var login = "liviaalves";
    var vslogin = prompt("Digite seu login");
    var vsenha = prompt("Digite sua senha");

    if (vslogin == login) {
        if (vsenha == senha) {
            alert("Login concluído");
        } else {
            alert("Senha errada");
        }
    } else {
        alert("Usuário errado");
    }
}

// 8
function func8() {
    var numero = 0;
    var soma = 0;

    while (true) {
        numero = parseInt(prompt("Digite um número maior que 0:"));

        if (isNaN(numero)) {
            alert("Valor inválido. Tente novamente.");
            continue;
        }

        if (numero < 0) {
            break;
        }

        soma = soma + numero;
    }

    alert("A soma total é: " + soma);
}


// 9
function func9() {
    var alt = Math.floor(Math.random() * 10);
    var palpite;

    while (true) {
        palpite = parseInt(prompt("Adivinhe o número"));

        if (palpite == alt) {
            alert("PARABÉNS VOCÊ ACERTOU O NÚMERO");
            break;
        } else if (palpite < alt) {
            alert("O número é MAIOR!");
        } else {
            alert("O número é MENOR!");
        }
    }
}

// 10
function func10() {
    var numero = parseInt(prompt("Digite um número"));
    var fatorial = 1;

    if (numero < 0) {
        console.log("Fatorial não existe para números negativos.");
    } else {
        for (var i = 1; i <= numero; i++) {
            fatorial *= i;
        }
    }

    console.log("Fatorial: " + fatorial);
}

// 11
function func11() {
    var nota;

    while (true) {
        nota = parseFloat(prompt("Digite uma nota de 0 a 10"));

        if (nota >= 0 && nota <= 10) {
            console.log("Nota válida: " + nota);
            break;
        } else {
            console.log("Valor inválido, tente novamente.");
        }
    }
}

// 12
function func12() {
    var n1 = parseFloat(prompt("Digite a primeira nota"));
    var n2 = parseFloat(prompt("Digite a segunda nota"));
    var n3 = parseFloat(prompt("Digite a terceira nota"));

    var media = (n1 + n2 + n3) / 3;

    console.log("Média: " + media.toFixed(2));

    if (media >= 7) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }
}

// 13 e 14
function func13() {
    var valor = parseInt(prompt("Digite o valor para saque"));

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
}

// 15
function func15() {
    var num = parseInt(prompt("Digite um número"));

    for (var i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
