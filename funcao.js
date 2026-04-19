var name = "Desenvolvedor"
var vitorias = 35
var derrotas = 10

calcularPartidas()

function calcularPartidas() {
    let totalPartidas = vitorias + derrotas
    console.log("Olá " + name + ", você tem um total de " + totalPartidas + " partidas jogadas.")
    return totalPartidas
}

calcularVitorias()

function calcularVitorias() {
    let totalPartidas = vitorias + derrotas
    let taxaVitoria = (vitorias / totalPartidas) * 100
    console.log("Sua taxa de vitórias é: " + taxaVitoria.toFixed(2) + "%")
    return taxaVitoria
}

calcularDerrotas()

function calcularDerrotas() {
    let totalPartidas = vitorias + derrotas
    let taxaDerrota = (derrotas / totalPartidas) * 100
    console.log("Sua taxa de derrotas é: " + taxaDerrota.toFixed(2) + "%")
    return taxaDerrota
}

ranked()

function ranked() {
    let nv = " "
    if (vitorias <= 0) {
        nv = "Iniciante"
    } else if (vitorias <= 10) {
        nv = "Ferro"
    } else if (vitorias <= 20) {
        nv = "Bronze"
    } else if (vitorias <= 50) {
        nv = "Prata"
    } else if (vitorias <= 70) {
        nv = "Ouro"
    } else if (vitorias <= 80) {
        nv = "Platina"
    } else if (vitorias <= 90) {
        nv = "Ascendente"
    } else if (vitorias <= 100) {
        nv = "Imortal"
    } else {
        nv = "RADIANTE"
    }
 return nv
    }

console.log("O Herói " + name + " tem de saldo de: " + vitorias + " vitórias e está no nível: " + ranked())