import PromptSync from "prompt-sync"

const prompt = PromptSync();

let partidas; //VARIÁVEL PARA USUÁRIO ESCOLHER QUANTAS RODADAS IRÁ FAZER
let contador = 0; //VARIÁVEL PARA CONTADOR RODAR DENTRO DO LOOP ATÉ ATINGIR O NÚMERO DE RODADAS
let escolhaJogador; //ESCOLHA DO JOGADOR
let vitoriasJogador = 0; //CONTADOR DE VITÓRIAS POR RODADAS DO JOGADOR
let vitoriasComputador = 0; //CONTADOR DE VITÓRIAS POR RODADAS DO PC
const jokenpo = ['PEDRA', 'PAPEL', 'TESOURA']; //LISTA COM OS ELEMENTOS DO JOGO
let restart = "";

let nome = prompt(`Qual é o seu nome? `);//PERGUNTA INTERATIVA BÁSICA

console.log(`\n\n`);

do {//LAÇO PRINCIPAL PARA REINICIAR CASO SEJA DA VONTADE DO PLAYER ENCERRANDO NA LINHA 73
    vitoriasJogador = 0;
    vitoriasComputador = 0;
    contador = 0;

    partidas = +prompt(`Quantas partidas você quer jogar?: `);

    console.log(`\n\n
Ola, ${nome}. Hoje vamos jogar jokenpo.\nAs opções são \n[0]PEDRA \n[1]PAPEL \n[2]TESOURA\nO que você escolhe?
`);

    do {
        do {
            escolhaJogador = +prompt(`A:`);
            if (escolhaJogador != 0 && escolhaJogador != 1 && escolhaJogador != 2) {
                console.log(`digite: \n[0]PEDRA \n[1]PAPEL \n[2]TESOURA `);
            }
        } while (escolhaJogador != 0 && escolhaJogador != 1 && escolhaJogador != 2);

        let escolhaComputador = Math.floor(Math.random() * 3);

        console.log(`\n${nome} escolhe ${jokenpo[escolhaJogador]}\nPC escolhe ${jokenpo[escolhaComputador]}\n`);

        if ((escolhaComputador === 0 && escolhaJogador === 2) || (escolhaComputador === 1 && escolhaJogador === 0) || (escolhaComputador === 2 && escolhaJogador === 1)) {
            vitoriasComputador++;
        }  else if ((escolhaJogador === 0 && escolhaComputador === 2) || (escolhaJogador === 1 && escolhaComputador === 0) || (escolhaJogador === 2 && escolhaComputador === 1) ) {
            vitoriasJogador++;
        }
        console.log(`${nome}: ${vitoriasJogador} X ${vitoriasComputador}: PC\n*******************************`);
        contador++;
    } while (contador < partidas);

    if (vitoriasComputador > vitoriasJogador) {
        console.log(`\nO computador ganhou ${vitoriasComputador} partidas.\nVocê ganhou ${vitoriasJogador} rounds.\nO computador é o vencedor!
        `);
    } else if (vitoriasJogador > vitoriasComputador) {
        console.log(`\nO computador ganhou ${vitoriasComputador} partidas.\nVocê ganhou ${vitoriasJogador} rounds.\n${nome} é o vencedor.
        `);
    } else {
        console.log(`\nO computador ganhou ${vitoriasComputador} partidas.\nVocê ganhou ${vitoriasJogador} rounds.\nEmpate!
        `);
    }

    do {//LOOP PARA VERIFICAÇÃO SE A RESPOSTA É A QUE PRECISO
        restart = prompt(`Quer jogar novamente? Digite 'sim' ou 'nao': `).toLowerCase();
    } while (restart != 'sim' && restart != 'nao');
    console.clear();

} while (restart === 'sim');

