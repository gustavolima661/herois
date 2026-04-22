let name = ""
let idade = 0
let tipo = "Guerreiro"
//["Guerreiro", "Mago", "Monge", "Ninja"]

class heroi {
    constructor(name, age, tipo) {
        this.name = name
        this.age = age
        this.tipo = tipo
        this.atk = ["", ""]
    }
    tipoAtk() {
        if (this.tipo === "Guerreiro") {
            this.atk = "Ele ultilizou uma espada para atacar o inimigo"
        } else if (this.tipo === "Mago") {
            this.atk = "Ele ultilizou uma magia para atacar o inimigo"
        } else if (this.tipo === "Monge") {
            this.atk = "Ele ultilizou a arte marcial para atacar o inimigo"
        } else if (this.tipo === "Ninja") {
            this.atk = "Ele ultilizou uma shuriken para atacar o inimigo"
        }
    } 
}

let heroi1 = new heroi("Gustavo", 18, "Guerreiro")
console.log("O herói " + heroi1.name + " tem " + heroi1.age + " anos e é um " + heroi1.tipo)

heroi1.tipoAtk()
console.log(heroi1.atk)