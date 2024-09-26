const readline = require("readline-sync");


function calcularSaldoELevel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    return { saldoVitorias, nivel };
}

// Entrada de dados
const vitorias = readline.questionInt("Digite o número de vitórias: ");
const derrotas = readline.questionInt("Digite o número de derrotas: ");

// Calcula o saldo e o nível
const resultado = calcularSaldoELevel(vitorias, derrotas);

// Saída final
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}.`);
