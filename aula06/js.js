// EXERCICIO 01
//const botao = document.getElementById("botao");
// const campoTexto = document.getElementById("campoTexto");
// const resultado = document.getElementById("resultado");
// botao.addEventListener("click", function() {
//     resultado.textContent = campoTexto.value;
// });

//EXERCICIO 02
// function mostrarSaudacao() {
//     const nome = document.getElementById("nome").value;
//     document.getElementById("resultado").textContent = `Olá, ${nome}!`;
//   }
  
//   document.getElementById("btnMostrar").addEventListener("click", mostrarSaudacao);

//EXERCICIO 03
// function verificarIdade() {
//     const idade = document.getElementById("idade").value;
  
//     if (idade >= 18) {
//       document.getElementById("resultado").textContent = "Maior de idade";
//     } else {
//       document.getElementById("resultado").textContent = "Menor de idade";
//     }
//   }
  
//   document.getElementById("btnVerificar").addEventListener("click", verificarIdade);

//EXERCICIO 04
// function mudarCor() {
//     document.body.style.backgroundColor = "lightblue";
//   }
  
//   document.getElementById("btnCor").addEventListener("click", mudarCor);

//EXERCICIO 05
// const botao = document.getElementById("btnModo");

// botao.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

//EXERCICIO 06
// const input = document.getElementById("inputTexto");
// const botao = document.getElementById("btnAdicionar");
// const lista = document.getElementById("lista");

// botao.addEventListener("click", () => {
//   const texto = input.value;

//   if (texto !== "") {
//     const li = document.createElement("li");
//     li.textContent = texto;

//     lista.appendChild(li);
//     input.value = "";
//   }
// });
//EXERCICIO 07
// const input = document.getElementById("inputTexto");
// const botao = document.getElementById("btnAdicionar");
// const lista = document.getElementById("lista");

// botao.addEventListener("click", () => {
//   const texto = input.value;

//   if (texto !== "") {
//     const li = document.createElement("li");
//     li.textContent = texto;

//     li.addEventListener("click", () => {
//       li.remove();
//     });

//     lista.appendChild(li);
//     input.value = "";
//   }
// });
//EXERCICIO 08
// const inputNumero = document.getElementById("numero");
// const botaoVerificar = document.getElementById("verificar");
// const resultado = document.getElementById("resultado");

// botaoVerificar.addEventListener("click", () => {
//   const numero = Number(inputNumero.value);

//   if (numero % 2 === 0) {
//     resultado.textContent = "É par";
//   } else {
//     resultado.textContent = "É ímpar";
//   }
// });
//EXERCICIO 09
// const inputSenha = document.getElementById("senha");
// const botaoValidar = document.getElementById("validar");
// const mensagem = document.getElementById("mensagem");

// botaoValidar.addEventListener("click", () => {
//   const senha = inputSenha.value;

//   if (senha.length >= 6) {
//     mensagem.textContent = "Senha válida";
//   } else {
//     mensagem.textContent = "Senha precisa ter pelo menos 6 caracteres";
//   }
// });
//EXERCICIO 10
// const inputNome = document.getElementById("nome");
// const botaoAdicionar = document.getElementById("adicionar");
// const lista = document.getElementById("listaNomes");
// const contador = document.getElementById("contador");

// let total = 0;

// function atualizarContador() {
//   contador.textContent = total;
// }

// botaoAdicionar.addEventListener("click", () => {
//   const nome = inputNome.value;

//   if (nome !== "") {
//     const li = document.createElement("li");
//     li.textContent = nome + " ";

//     const btnRemover = document.createElement("button");
//     btnRemover.textContent = "Remover";

//     btnRemover.addEventListener("click", () => {
//       li.remove();
//       total--;
//       atualizarContador();
//     });

//     li.appendChild(btnRemover);
//     lista.appendChild(li);

//     total++;
//     atualizarContador();

//     inputNome.value = "";
//   }
// });
