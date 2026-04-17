// Por favor, antes de executar, atribui um valor na variável xp, para que o programa possa calcular o nível do usuário e exibir a mensagem correta.

let xp = 0
let nv = ""


if (xp == 1) {
    nv = "Iniciante"
} else if (xp <= 1000) {
    nv = "Ferro"
} else if (xp <= 2000) {
    nv = "Bronze"
} else if (xp <= 5000) {
    nv = "Prata"
} else if (xp <= 7000) {
    nv = "Ouro"
} else if (xp <= 8000) {
    nv = "Platina"
} else if (xp <= 9000) {
    nv = "Ascendente"
} else if (xp <= 10000) {
    nv = "Imortal"
} else if (xp < 10001) {
    nv = "RADIANTE"
}

let nome = "Em busca de ser um desenvolvedor"

console.log("Olá, seja Bem Vindo: " + nome)
console.log("Sua experiencia é: " + xp)
console.log("Seu nével atual é: " + nv)

switch (nv) {
    case nv = "Iniciante":
    console.log("Que bom te ver por aqui, que tal começar sua jornada?")
    break; 
    case nv = "Ferro":
    console.log("Parabéns por ter alcançado o nível de Ferro, continue se esforçando!")
    break;
    case nv ="Bronze":
    console.log("Parabéns por ter alcançado o nível de Bronze, continue se esforçando!")
    break;
    case nv = "Prata":
    console.log("Parabéns por ter alcançado o nível de Prata, continue se esforçando!")
    break;
    case nv = "Ouro":
    console.log("Parabéns por ter alcançado o nível de Ouro, continue se esforçando!")
    break;
    case nv = "Platina":
    console.log("Parabéns por ter alcançado o nível de Platina, continue se esforçando!")
    break;
    case nv = "Ascendente":
    console.log("Parabéns por ter alcançado o nível de Ascendente, continue se esforçando!")
    break;
    case nv = "Imortal":
    console.log("Parabéns por ter alcançado o nível de Imortal, continue se esforçando!")
    break;
    case nv = "RADIANTE":
    console.log("Parabéns por ter alcançado o nível maximo, agora é só continuar se esforçando para manter esse nível!")
    break;

}