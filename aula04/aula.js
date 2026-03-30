var numero = prompt("digite um numero");
if (numero %2 == 0){
    alert("seu numero é par")
} else{
    alert("seu numero é impar")
}



let idade = Number(prompt("Qual é a sua idade?"));

if (idade >= 18) {
   alert("Você é maior de idade.");
} else {
   alert("Você é menor de idade.");
}


for(var i = 1; i <11; i ++) {
    console.log(i);
}


var x = prompt("digite um numero")
while (x>0){
    console.log(x)
    x--;
}

var tabuada = prompt("Digite um numero")
var multi = 0
for (var m = 1; m <11; m++){
    multi = tabuada * m;
    console.log(multi);

}

console.log("somatoria")
var somar = prompt("Digite um numero") //ver
var result = 0
for(var s = 0; 5 < somar; s++){
    result = result + s;
    console.log(result)
}

function primo(num){
    if (num <= 1) return false;
    for (let i = 2; i < num; i ++){
        if (num % i === 0){
            return false;
        } 
    }
    
    return true;
}

