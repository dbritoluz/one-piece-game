const botaoRolar = document.getElementById("botao-rolar");
const listaBando = document.getElementById("lista-tripulacao");
const areaEscolha = document.querySelector(".escolha");
const listaEscolhidos = document.querySelector("#lista-escolhidos");
const statusJogador = document.querySelector(".status");
let somaPoder = 0;
let confrontoAtual = 0;
const totalConfrontos = 3;

let bandoInimigoAtual = null;
let ultimoResultado = null;

listaBando.style.display = "none";

const bandos = [
    {
        nomeBando: "Chapéus de Palha",
        membros: [
            {
                nome: "Luffy",
                poder: 88,
                cargo: "capitao"
            },
            {
                nome: "Zoro",
                poder: 81,
                cargo: "imediato"
            },
            {
                nome: "Sanji",
                poder: 78,
                cargo: "normal"
            },
            {
                nome: "Chopper",
                poder: 66,
                cargo: "normal"
            },
            {
                nome: "Nami",
                poder: 65,
                cargo: "normal"
            },
            {
                nome: "Usopp",
                poder: 64,
                cargo: "normal"
            },
            {
                nome: "Jimbe",
                poder: 73,
                cargo: "normal"
            },
            {
                nome: "Brook",
                poder: 71,
                cargo: "normal"
            },
            {
                nome: "Franky",
                poder: 69,
                cargo: "normal"
            },
            {
                nome: "Robin",
                poder: 67,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas Kid",
        membros: [
            {
                nome: "Eustass Kid",
                poder: 85,
                cargo: "capitao"
            },
            {
                nome: "Killer",
                poder: 77,
                cargo: "imediato"
            },
            {
                nome: "Heat",
                poder: 66,
                cargo: "normal"
            },
            {
                nome: "Wire",
                poder: 65,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas das Feras",
        membros: [
            {
                nome: "Kaido",
                poder: 93,
                cargo: "capitao"
            },
            {
                nome: "King",
                poder: 83,
                cargo: "imediato"
            },
            {
                nome: "Queen",
                poder: 79,
                cargo: "normal"
            },
            {
                nome: "Jack",
                poder: 76,
                cargo: "normal"
            },
            {
                nome: "Who's-Who",
                poder: 72,
                cargo: "normal"
            },
            {
                nome: "Sasaki",
                poder: 70,
                cargo: "normal"
            },
            {
                nome: "Black Maria",
                poder: 68,
                cargo: "normal"
            },
            {
                nome: "Ulti",
                poder: 71,
                cargo: "normal"
            },
            {
                nome: "Page One",
                poder: 67,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas Rocks",
        membros: [
            {
                nome: "Rocks D. Xebec",
                poder: 100,
                cargo: "capitao"
            },
            {
                nome: "Edward Newgate",
                poder: 95,
                cargo: "imediato"
            },
            {
                nome: "Charlotte Linlin",
                poder: 90,
                cargo: "normal"
            },
            {
                nome: "Kaido",
                poder: 88,
                cargo: "normal"
            },
            {
                nome: "Shiki",
                poder: 91,
                cargo: "normal"
            },
            {
                nome: "Captain John",
                poder: 83,
                cargo: "normal"
            },
            {
                nome: "Ochoku",
                poder: 84,
                cargo: "normal"
            },
            {
                nome: "Silver Axe",
                poder: 81,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas do Barba Branca",
        membros: [
            {
                nome: "Edward Newgate",
                poder: 97,
                cargo: "capitao"
            },
            {
                nome: "Marco",
                poder: 86,
                cargo: "imediato"
            },
            {
                nome: "Ace",
                poder: 82,
                cargo: "normal"
            },
            {
                nome: "Jozu",
                poder: 80,
                cargo: "normal"
            },
            {
                nome: "Vista",
                poder: 79,
                cargo: "normal"
            },
            {
                nome: "Izo",
                poder: 74,
                cargo: "normal"
            },
            {
                nome: "Thatch",
                poder: 75,
                cargo: "normal"
            },
            {
                nome: "Blamenco",
                poder: 71,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas do Barba Negra",
        membros: [
            {
                nome: "Marshall D. Teach",
                poder: 92,
                cargo: "capitao"
            },
            {
                nome: "Shiryu",
                poder: 84,
                cargo: "imediato"
            },
            {
                nome: "Kuzan",
                poder: 90,
                cargo: "normal"
            },
            {
                nome: "Jesus Burgess",
                poder: 79,
                cargo: "normal"
            },
            {
                nome: "Van Augur",
                poder: 77,
                cargo: "normal"
            },
            {
                nome: "Avalo Pizarro",
                poder: 80,
                cargo: "normal"
            },
            {
                nome: "Catarina Devon",
                poder: 78,
                cargo: "normal"
            },
            {
                nome: "Sanjuan Wolf",
                poder: 76,
                cargo: "normal"
            },
            {
                nome: "Laffitte",
                poder: 75,
                cargo: "normal"
            },
            {
                nome: "Doc Q",
                poder: 73,
                cargo: "normal"
            },
            {
                nome: "Vasco Shot",
                poder: 74,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas da Big Mom",
        membros: [
            {
                nome: "Charlotte Linlin",
                poder: 92,
                cargo: "capitao"
            },
            {
                nome: "Katakuri",
                poder: 84,
                cargo: "imediato"
            },
            {
                nome: "Smoothie",
                poder: 80,
                cargo: "normal"
            },
            {
                nome: "Cracker",
                poder: 78,
                cargo: "normal"
            },
            {
                nome: "Perospero",
                poder: 77,
                cargo: "normal"
            },
            {
                nome: "Snack",
                poder: 75,
                cargo: "normal"
            },
            {
                nome: "Oven",
                poder: 74,
                cargo: "normal"
            },
            {
                nome: "Daifuku",
                poder: 73,
                cargo: "normal"
            },
            {
                nome: "Compote",
                poder: 72,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas do Ruivo",
        membros: [
            {
                nome: "Shanks",
                poder: 94,
                cargo: "capitao"
            },
            {
                nome: "Benn Beckman",
                poder: 88,
                cargo: "imediato"
            },
            {
                nome: "Lucky Roux",
                poder: 83,
                cargo: "normal"
            },
            {
                nome: "Yasopp",
                poder: 82,
                cargo: "normal"
            },
            {
                nome: "Limejuice",
                poder: 77,
                cargo: "normal"
            },
            {
                nome: "Bonk Punch",
                poder: 76,
                cargo: "normal"
            },
            {
                nome: "Monster",
                poder: 74,
                cargo: "normal"
            },
            {
                nome: "Building Snake",
                poder: 75,
                cargo: "normal"
            },
            {
                nome: "Hongo",
                poder: 73,
                cargo: "normal"
            }
        ]
    },

    {
        nomeBando: "Piratas Roger",
        membros: [
            {
                nome: "Gol D. Roger",
                poder: 101,
                cargo: "capitao"
            },
            {
                nome: "Silvers Rayleigh",
                poder: 94,
                cargo: "imediato"
            },
            {
                nome: "Kozuki Oden",
                poder: 90,
                cargo: "normal"
            },
            {
                nome: "Scopper Gaban",
                poder: 89,
                cargo: "normal"
            },
            {
                nome: "Crocus",
                poder: 73,
                cargo: "normal"
            },
            {
                nome: "Sunbell",
                poder: 78,
                cargo: "normal"
            },
            {
                nome: "Seagull Guns Nozdon",
                poder: 77,
                cargo: "normal"
            }
        ]
    }
];

const equipeJogador = {
    capitao: null,
    imediato: null,
    normais: [],
    qtd: 0
};

const equipeInimiga = {
    capitao: null,
    imediato: null,
    normais: []
}

botaoRolar.addEventListener("click", function () {
    sortearBando();
    
    botaoRolar.style.display = "none";
})

document.getElementById("botao-proximo").addEventListener("click", function(){
    guardarResumoConfronto();
    iniciarNovoConfronto();
});

document.getElementById("botao-reiniciar").addEventListener("click", function(){
        reiniciarJogo();
});

function sortearBando(){
    const random = Math.floor(Math.random() * bandos.length);

    const bandoSorteado = bandos[random];

    mostraBando(bandoSorteado);
}

function mostraBando(bando){
    const nomeBando = document.getElementById("nome-bando");

    nomeBando.innerHTML = "";
    nomeBando.innerHTML = `<h1>${bando.nomeBando}<h1>`;

    listaBando.style.display = "block";
    listaBando.innerHTML = "";

    bando.membros.forEach(membro => {
        
        const personagem = document.createElement("button");

        personagem.classList.add("personagem");

        personagem.innerHTML = `<span class="nome">${membro.nome}</span>
            <span class="poder">${membro.poder}</span>`;
        
            
        personagem.addEventListener("click", function () {
            escolherPersonagem(membro);
        });

        if(membro.cargo == "capitao" && equipeJogador.capitao != null){
            personagem.disabled = true;
        }

        if(membro.cargo == "imediato" && equipeJogador.imediato != null){
            personagem.disabled = true;
        }

        if(membro.cargo == "normal" && equipeJogador.normais.length >= 2){
            personagem.disabled = true;
        }

        if(equipeJogador.normais[0] && membro.nome == equipeJogador.normais[0].nome){
            personagem.disabled = true;
        }

        const jaEscolhido =
        (equipeJogador.capitao && equipeJogador.capitao.nome === membro.nome) ||
        (equipeJogador.imediato && equipeJogador.imediato.nome === membro.nome) ||
        equipeJogador.normais.some(normal => normal.nome === membro.nome);

        if (jaEscolhido) {
            personagem.disabled = true;
        }
        
        listaBando.appendChild(personagem);

    });

}

function escolherPersonagem(membro){

    if(membro.cargo == "capitao"){
        equipeJogador.capitao = membro;
    }

    if(membro.cargo == "imediato"){
        equipeJogador.imediato = membro;
    }

    if(membro.cargo == "normal"){
        equipeJogador.normais.push(membro);
    }

    equipeJogador.qtd += 1;
    somaPoder += membro.poder;
    adicionaConves(membro);
    adicionaEscolhido(membro);

    if(equipeJogador.capitao != null && equipeJogador.imediato != null && equipeJogador.normais.length == 2){
        listaBando.style.display = "none";
        const botaoProxFase = document.createElement("button");
        botaoProxFase.classList.add("proxima-fase");
        botaoProxFase.innerHTML = "<h1>Prosseguir</h1>";
        areaEscolha.appendChild(botaoProxFase);

        botaoProxFase.addEventListener("click", function (){
            document.getElementById("escolhas").classList.add("oculto");

            document.getElementById("tela-simulacao").classList.remove("oculto");

            iniciarSimulacao();
        });
    
    }else{
        botaoRolar.style.display = "block";
        listaBando.style.display = "none";
    }
}

function adicionaConves(membro){
    let slot;

    console.log(equipeJogador.normais.length);

    if(membro.cargo == "capitao"){
        slot = document.querySelector(".cima");
    }
    else if(membro.cargo == "imediato"){
        slot = document.querySelector(".direita");
    }else if(equipeJogador.normais.length == 1){
        slot = document.querySelector(".esquerda");
    }else if(equipeJogador.normais.length == 2){
        slot = document.querySelector(".tras");
    }

    slot.innerHTML = `<span class="poder-slot">${membro.poder}</span>
                    <span class="nome-slot">${membro.nome}</span>`;
}

function adicionaEscolhido(membro){
    const escolhido = document.createElement("div");
    escolhido.classList.add("escolhido");
    escolhido.innerHTML = `<span class="nome-escolhido">${membro.nome}</span>
                    <span class="poder-escolhido">${membro.poder}</span>`;
    listaEscolhidos.appendChild(escolhido);

    let media = Math.ceil(somaPoder/equipeJogador.qtd);

    statusJogador.innerHTML = `<span>Score: <strong id="score">${media}</strong></span>
                <span><strong id="qtd-escolhidos">${equipeJogador.qtd}</strong>/4</span>`;
}

function iniciarSimulacao(){

    confrontoAtual = 0;
    ultimoResultado = null;

    document.querySelectorAll(".resumo-confronto").forEach(resumo => {
        resumo.remove();
    });

    document.getElementById("botao-proximo").classList.add("oculto");
    document.getElementById("botao-reiniciar").classList.add("oculto");

    iniciarNovoConfronto();
}

function iniciarNovoConfronto(){
    confrontoAtual++;

    document.getElementById("botao-proximo").classList.add("oculto");
    document.getElementById("botao-reiniciar").classList.add("oculto");

    // Apaga somente os detalhes do confronto anterior.
    // Os resumos ficam fora de #lista-confrontos.
    document.getElementById("lista-confrontos").innerHTML = "";

    // O cabeçalho principal agora passa a representar o novo confronto.
    document.getElementById("placar-jogador").textContent = "0";
    document.getElementById("placar-inimigo").textContent = "0";

    bandoInimigoAtual = escolherBandoInimigo();

    montarEquipeInimiga(bandoInimigoAtual);

    document.getElementById("nome-inimigo").textContent =
        bandoInimigoAtual.nomeBando;

    const normaisJogador = [...equipeJogador.normais]
        .sort((a, b) => b.poder - a.poder);

    const normaisInimigo = [...equipeInimiga.normais]
        .sort((a, b) => b.poder - a.poder);

    const confrontos = [
        {
            tipo: "capitao",
            jogador: equipeJogador.capitao,
            inimigo: equipeInimiga.capitao,
            vencedor: null
        },

        {
            tipo: "imediato",
            jogador: equipeJogador.imediato,
            inimigo: equipeInimiga.imediato,
            vencedor: null
        },

        {
            tipo: "normal_forte",
            jogador: normaisJogador[0],
            inimigo: normaisInimigo[0],
            vencedor: null
        },

        {
            tipo: "normal_fraco",
            jogador: normaisJogador[1],
            inimigo: normaisInimigo[1],
            vencedor: null
        }
    ];

    // Decide os vencedores dos quatro duelos.
    confrontos.forEach(confronto => {

        const diferencaPoder =
            confronto.jogador.poder - confronto.inimigo.poder;

        let chanceJogador = 50 + (diferencaPoder * 2);

        if(chanceJogador > 99){
            chanceJogador = 99;
        }

        if(chanceJogador < 1){
            chanceJogador = 1;
        }

        const sorteio = Math.random() * 100;

        if(sorteio < chanceJogador){
            confronto.vencedor = "jogador";
        }
        else{
            confronto.vencedor = "inimigo";
        }
    });

    setTimeout(() => {
        mostrarConfrontos(confrontos);
        revelarVencedores(confrontos);
    }, 500);
}

function mostrarConfrontos(confrontos){
    const lista = document.getElementById("lista-confrontos");

    confrontos.forEach((confronto, index) => {
        const div = document.createElement("div");

        div.classList.add("confronto");

        div.id = `confronto-${index}`;

        setTimeout(() => {
            div.innerHTML = `
                <div class="lado jogador">

                    <span class="poder-confronto">
                        ${confronto.jogador.poder}
                    </span>

                    <span class="nome-confronto jogador-nome">
                        ${confronto.jogador.nome}
                    </span>

                </div>

                <span class="vs">vs</span>

                <div class="lado inimigo">

                    <span class="nome-confronto inimigo-nome">
                        ${confronto.inimigo.nome}
                    </span>

                    <span class="poder-confronto">
                        ${confronto.inimigo.poder}
                    </span>

                </div>
            `;
            lista.appendChild(div);
        }, index * 1000);
    });
}

function revelarVencedores(confrontos){

    const tempoConfrontos = confrontos.length * 1000;

    let placarJogador = 0;
    let placarInimigo = 0;

    confrontos.forEach((confronto, index) => {

        setTimeout(() => {

            const div =
                document.getElementById(`confronto-${index}`);

            if(confronto.vencedor === "jogador"){

                const nome =
                    div.querySelector(".jogador-nome");

                placarJogador++;

                document
                    .getElementById("placar-jogador")
                    .textContent = placarJogador;

                nome.innerHTML += `
                    <span class="win"> WIN</span>
                `;
            }

            else{

                const nome =
                    div.querySelector(".inimigo-nome");

                placarInimigo++;

                document
                    .getElementById("placar-inimigo")
                    .textContent = placarInimigo;

                nome.innerHTML = `
                    <span class="win">WIN</span>
                    ${nome.innerHTML}
                `;
            }

            if(index === confrontos.length - 1){

                if(
                    placarJogador === 2 &&
                    placarInimigo === 2
                ){

                    setTimeout(() => {
                        desempateCapitaes();
                    }, 1000);

                }

                else if(placarJogador > placarInimigo){

                    setTimeout(() => {
                        finalizarConfronto("jogador");
                    }, 1000);

                }

                else{

                    setTimeout(() => {
                        finalizarConfronto("inimigo");
                    }, 1000);

                }
            }

        }, tempoConfrontos + index * 1000);

    });
}

function desempateCapitaes(){

    const jogador =
        equipeJogador.capitao;

    const inimigo =
        equipeInimiga.capitao;


    const diferenca =
        jogador.poder - inimigo.poder;


    let chanceJogador =
        50 + (diferenca * 2);


    if(chanceJogador > 99){
        chanceJogador = 99;
    }

    if(chanceJogador < 1){
        chanceJogador = 1;
    }

    const desempate = {
        tipo: "desempate",

        jogador: jogador,

        inimigo: inimigo,

        vencedor: ""
    };

    const sorteio = Math.random() * 100;

    if(sorteio < chanceJogador){
        desempate.vencedor = "jogador";
    }
    else{
        desempate.vencedor = "inimigo";
    }

    setTimeout(() => {
        mostrarDesempate(desempate);
    }, 1000);
}

function mostrarDesempate(desempate){

    const lista =
        document.getElementById("lista-confrontos");

    const titulo =
        document.createElement("div");

    titulo.classList.add("titulo-desempate");

    titulo.textContent = "DESEMPATE";

    lista.appendChild(titulo);


    const div =
        document.createElement("div");

    div.classList.add(
        "confronto",
        "confronto-desempate"
    );

    div.innerHTML = `
        <div class="lado jogador">

            <span class="poder-confronto">
                ${desempate.jogador.poder}
            </span>

            <span class="nome-confronto jogador-nome">
                ${desempate.jogador.nome}
            </span>

        </div>

        <span class="vs">vs</span>

        <div class="lado inimigo">

            <span class="nome-confronto inimigo-nome">
                ${desempate.inimigo.nome}
            </span>

            <span class="poder-confronto">
                ${desempate.inimigo.poder}
            </span>

        </div>
    `;

    lista.appendChild(div);


    setTimeout(() => {

        if(desempate.vencedor === "jogador"){

            document
                .getElementById("placar-jogador")
                .textContent = "3";

            document
                .getElementById("placar-inimigo")
                .textContent = "2";

            div
                .querySelector(".jogador-nome")
                .innerHTML +=
                `<span class="win"> WIN</span>`;

        }

        else{

            document
                .getElementById("placar-jogador")
                .textContent = "2";

            document
                .getElementById("placar-inimigo")
                .textContent = "3";

            const nome =
                div.querySelector(".inimigo-nome");

            nome.innerHTML =
                `<span class="win">WIN</span> ${nome.innerHTML}`;
        }


        setTimeout(() => {

            finalizarConfronto(
                desempate.vencedor
            );

        }, 1000);

    }, 1500);
}

function escolherBandoInimigo(){
    const random = Math.floor(Math.random() * bandos.length);

    return bandos[random];
}

function montarEquipeInimiga(bando){
    const capitao = bando.membros.find(
        membro => membro.cargo === "capitao"
    );

    const imediato = bando.membros.find(
        membro => membro.cargo === "imediato"
    );

    const normais = bando.membros
        .filter(membro => membro.cargo === "normal")
        .sort((a, b) => b.poder - a.poder)
        .slice(0, 2);

    equipeInimiga.capitao = capitao;
    equipeInimiga.imediato = imediato;
    equipeInimiga.normais = normais;
}

function guardarResumoConfronto(){
const placarJogador =
        document.getElementById("placar-jogador").textContent;

    const placarInimigo =
        document.getElementById("placar-inimigo").textContent;

    const nomeInimigo =
        document.getElementById("nome-inimigo").textContent;


    const partida =
        document.querySelector(".partida");

    const listaConfrontos =
        document.getElementById("lista-confrontos");


    // O cabeçalho atual é sempre o elemento
    // imediatamente antes da lista de confrontos
    const cabecalhoAtual =
        listaConfrontos.previousElementSibling;


    const resumo =
        document.createElement("div");

    resumo.classList.add("linha-partida");


    resumo.innerHTML = `
        <div class="time">
            <span class="sigla">VOCÊ</span>
            <strong>Sua Tripulação</strong>
        </div>

        <div class="placar">
            <span>${placarJogador}</span>
            <span>-</span>
            <span>${placarInimigo}</span>
        </div>

        <div class="time adversario">
            <strong>${nomeInimigo}</strong>
        </div>
    `;


    // coloca o resumo ANTES do cabeçalho atual
    partida.insertBefore(
        resumo,
        cabecalhoAtual
    );
}


function finalizarConfronto(vencedor, placarJogador, placarInimigo){
    const botaoProximo =
        document.getElementById("botao-proximo");

    const botaoReiniciar =
        document.getElementById("botao-reiniciar");

    // Guarda os dados da rodada que acabou.
    // O resumo só é inserido na tela quando o jogador clicar
    // em "Próximo confronto".
    ultimoResultado = {
        nomeInimigo: bandoInimigoAtual.nomeBando,
        placarJogador: placarJogador,
        placarInimigo: placarInimigo
    };

    if(vencedor === "jogador"){

        if(confrontoAtual < totalConfrontos){
            botaoProximo.classList.remove("oculto");
        }
        else{
            botaoReiniciar.textContent = "Jogar novamente";
            botaoReiniciar.classList.remove("oculto");
        }
    }
    else{
        botaoReiniciar.textContent = "Reiniciar";
        botaoReiniciar.classList.remove("oculto");
    }
}

function reiniciarJogo(){
    confrontoAtual = 0;

    somaPoder = 0;
    bandoInimigoAtual = null;
    ultimoResultado = null;

    document.querySelectorAll(".resumo-confronto").forEach(resumo => {
        resumo.remove();
    });

    // limpa equipe
    equipeJogador.capitao = null;

    equipeJogador.imediato = null;

    equipeJogador.normais = [];

    equipeJogador.qtd = 0;

    // limpa adversário
    equipeInimiga.capitao = null;

    equipeInimiga.imediato = null;

    equipeInimiga.normais = [];

    // limpa lista dos escolhidos
    listaEscolhidos.innerHTML = "";

    // reseta score lateral
    statusJogador.innerHTML = `
        <span>
            Score:
            <strong id="score">0</strong>
        </span>

        <span>
            <strong id="qtd-escolhidos">0</strong>/4
        </span>
    `;

    // restaura as bolinhas
    document.querySelector(".cima").innerHTML = "Ca";

    document.querySelector(".direita").innerHTML = "Rw";

    document.querySelector(".esquerda").innerHTML = "Lw";

    document.querySelector(".tras").innerHTML = "4th";

    // reseta o painel do bando
    document.getElementById("nome-bando")
        .innerHTML = "<h1>Escolhendo...</h1>";

    listaBando.innerHTML = "";

    listaBando.style.display = "none";

    // remove botão Prosseguir antigo
    const botaoProxFase =
        document.querySelector(".proxima-fase");

    if(botaoProxFase){
        botaoProxFase.remove();
    }

    // reseta simulação
    document.getElementById("lista-confrontos").innerHTML = "";

    document.getElementById("placar-jogador").textContent = "0";

    document.getElementById("placar-inimigo").textContent = "0";

    document.getElementById("botao-proximo").classList.add("oculto");

    document.getElementById("botao-reiniciar").classList.add("oculto");

    // troca as telas
    document.getElementById("tela-simulacao").classList.add("oculto");

    document.getElementById("escolhas").classList.remove("oculto");

    // volta o botão de rolar
    botaoRolar.style.display = "block";
}