const readline = require("readline-sync")

var nomeHeroi = readline.question("Digite o nome do Heroi:")
var xpHeroi = readline.questionInt("Digite o XP do Heroi:")
var nivelheroi;
if (xpHeroi <= 1000) {
    nivelheroi = "Ferro";
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    nivelheroi = "Bronze";
} else if (xpHeroi > 2000 && xpHeroi <= 5000) {
    nivelheroi = "Prata";
} else if (xpHeroi > 5000 && xpHeroi <= 7000) {
    nivelheroi = "Ouro";
} else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    nivelheroi = "Platina";
} else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    nivelheroi = "Ascendente";
} else if (xpHeroi > 9000 && xpHeroi <= 10000) {
    nivelheroi = "Imortal";
} else if (xpHeroi > 10000) {
    nivelheroi = "Radiante";
} else {
    console.log("Opção inválida!");
}

console.log(`O héroi de nome ${nomeHeroi} está no nivel de ${nivelheroi}`)