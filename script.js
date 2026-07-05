// Banco de dados das cartas (JSON)
const cartas = [
    {
        resposta: "Albert Einstein",
        categoria: "PESSOA",
        dicas: {
            1: "Nasci na Alemanha.",
            2: "Fui um físico teórico.",
            3: "Desenvolvi a teoria da relatividade.",
            4: "Ganhei o Prêmio Nobel de Física em 1921.",
            5: "Minha equação mais famosa envolve energia e massa (E=mc²)."
            // Adicione mais dicas até dar 20 se quiser expandir
        }
    }
];

let cartaAtual = cartas[0];
let pontos = 20;

// Gera os botões de 1 a 5 (ou 20 se preencher todas as dicas)
const containerBotoes = document.getElementById("dicas-botoes");
document.getElementById("categoria").innerText = cartaAtual.categoria;

for (let i = 1; i <= Object.keys(cartaAtual.dicas).length; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.id = "btn-" + i;
    btn.onclick = () => revelarDica(i);
    containerBotoes.appendChild(btn);
}

function revelarDica(numero) {
    document.getElementById("dica-exibida").innerText = cartaAtual.dicas[numero];
    document.getElementById("btn-" + numero).disabled = true;
    
    // Perde 1 ponto por cada dica revelada
    if (pontos > 1) {
        pontos--;
        document.getElementById("pontos").innerText = pontos;
    }
}

function fazerPalpite() {
    const palpite = document.getElementById("input-palpite").value.trim().toLowerCase();
    const respostaCerta = cartaAtual.resposta.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (palpite === respostaCerta) {
        resultado.innerText = `🎉 Você acertou! Ganhou ${pontos} pontos!`;
        resultado.style.color = "#4caf50";
    } else {
        resultado.innerText = "❌ Errado! Tente outra dica antes de chutar.";
        resultado.style.color = "#f44336";
    }
}
