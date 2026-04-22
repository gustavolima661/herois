// Por favor, antes de executar, atribui um valor na variável xp, para que o programa possa calcular o nível do usuário e exibir a mensagem correta.
let nome = "Em busca de ser um desenvolvedor"

    console.log("Bem Vindo " + nome + " ao nosso programa de níveis, aqui você pode acompanhar seu progresso e ver qual é o seu nível atual, baseado na sua experiência (XP).")  

let xp = 0
var nv = ""


if (xp <= 1) {
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
 for (let i = 500; i <= xp; i+=500) {
    console.log("Parabéns, você ganhou " + i + " de XP, de pouco em pouco você vai chegar no próximo nível!")
 }


const mensagem = "Obrigado por participar do nosso programa, esperamos que tenha gostado!"


let estrutura = {
    nv: {
        0: ["Iniciante", "Rank F: Nível fundamental, manipulação elementar básica."], 
        1: ["Ferro", "Rank E: Habilidades controladas, mas limitadas."],
        2: ["Bronze", "Rank D: Despertar do poder elemental com pouca experiência."],
        3: ["Prata", "Rank C: Controle sólido, habilidades aprimoradas."],
        4: ["Ouro", "Rank B: Habilidades poderosas, controle avançado."],
        5: ["Platina", "Rank A: Controle excepcional, habilidades devastadoras."],
        6: ["Ascendente", "Rank S: Poder incomparável, controle absoluto."],
        7: ["Imortal", "Rank S: Poder divino, controle supremo."],
        8: ["RADIANTE", "Rank SSS: Poder transcendente, controle absoluto e imortalidade."]
    }
}

estruturaElementar()
function estruturaElementar() {
    for (let i = 0; i < Object.keys(estrutura.nv).length; i++) {
        if (estrutura.nv[i][0] === nv) {
            console.log("Parabéns por ter alcançado o nível de " + estrutura.nv[i][0] + ", " + estrutura.nv[i][1])
        }
    }
}
console.log(mensagem)
