class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Determinando o tipo de ataque com base no tipo de herói
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
heroi1.atacar();  

const heroi2 = new Heroi("Gandalf", 1000, "mago");
heroi2.atacar(); 

const heroi3 = new Heroi("Liu Kang", 35, "monge");
heroi3.atacar();  

const heroi4 = new Heroi("Ryu Hayabusa", 40, "ninja");
heroi4.atacar();  
