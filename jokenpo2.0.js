import PromptSync from "prompt-sync"

const prompt = PromptSync();

let restart;
let partidas = 0;
let contador = 0;
let escolhaDoJogador;
let vitoriasDoJogador = 0;
let vitoriasDoComputador = 0;
const jokenpo = ['PEDRA', 'PAPEL', 'TESOURA'];

console.log("Digite o seu nome: ")
let nome = prompt(`> `)


do{
    contador = 0;
    vitoriasDoJogador = 0;
    vitoriasDoComputador = 0;

    console.log(`Quantas partidas você quer jogar? `)
    partidas = prompt("> ")
    console.clear();

    console.log(`Olá, ${nome}. Você escolheu jogar ${partidas} partidas. \n\n       VAMOS JOGAR!! \n`)
    console.log(`[0] PEDRA\n[1] PAPEL\n[2] TESOURA\n`)

    do{
        do{
            escolhaDoJogador = prompt(`Faça sua escolha: `)
            if(escolhaDoJogador != 0 && escolhaDoJogador != 1 && escolhaDoJogador != 2){
                console.log("\nVocê deve escolher entre:\n [0] PEDRA\n [1] PAPEL\n [2] TESOURA\n ")
            }
        } while (escolhaDoJogador != 0 && escolhaDoJogador != 1 && escolhaDoJogador != 2);

        let escolhaDoComputador = Math.floor(Math.random() * 3);

        console.log(`\n${nome} escolhe >> ${jokenpo[escolhaDoJogador]}\nComputador escolhe >> ${jokenpo[escolhaDoComputador]}\n`);
        
        if ((escolhaDoComputador === 0 && escolhaDoJogador === 2) || (escolhaDoComputador === 1 && escolhaDoJogador === 2) || (escolhaDoComputador === 2 && escolhaDoJogador === 1)){
           vitoriasDoComputador++
        }else if ((escolhaDoJogador === 0 && escolhaDoComputador === 2) || (escolhaDoJogador === 1 && escolhaDoComputador === 0) || (escolhaDoJogador === 2 && escolhaDoComputador === 1)){
            vitoriasDoJogador++
        }

        console.log(`${nome}: ${vitoriasDoJogador} X ${vitoriasDoComputador}: PC\n*******************************`);
        contador++;

    } while (contador < partidas);

    if (vitoriasDoComputador > vitoriasDoJogador) {
        console.log(`\nComputador venceu ${vitoriasDoComputador} partidas.\n${nome} won ${vitoriasDoJogador} partidas.\n O Computador Venceu!!
        `);
    } else if (vitoriasDoJogador > vitoriasDoComputador) {
        console.log(`\nComputador venceu  ${vitoriasDoComputador} partidas.\n${nome} ${vitoriasDoJogador} partidas.\n${nome} Venceu!!
        `);
    } else {
        console.log(`\nComputador venceu  ${vitoriasDoComputador} partidas.\n${nome} ${vitoriasDoJogador} partidas.\nEMPATE!
        `);
    }

    do {//Loop de verificação da resposta.
        restart = prompt(`Gostaria de jogar novamente? Digite: "SIM" ou "NAO": `).toLowerCase();
    } while (restart != "sim" && restart != "nao");
    console.clear();

} while (restart === "sim");
