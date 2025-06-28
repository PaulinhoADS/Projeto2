// 
// Aluno: Paulo Cesar Leite - RA: 2706512 - ADS turma N12
// Projeto 2 - Disciplina Web Front-End - Professora Juliana Ferri
// arquivo JS com as 3 aplicações - exemplos usados em sala de aula
// Inclui função sairAplicacao com caixa de diálogo personalizada
//

// Altera o texto do título de forma dinâmica utilizando JS (DOM)

let titulo = document.querySelector('h1');
titulo.textContent = "Bem Vindo ao Projeto 2 da disciplina de Front End";

// Mensagem inicial exibida na área dinâmica

let areaInicial = document.getElementById('aplicacao');
areaInicial.innerHTML = `<em>Selecione uma das aplicações acima para começar!</em>`;

// JOGO 1: MÉDIA DE 4 NÚMEROS

// Função chamada ao clicar no botão "Jogo da Média"

function calcularMedia() {
    // Prepara a área para receber os inputs e resultado
    let area = document.getElementById('aplicacao');
    area.innerHTML = "<strong>Jogo da Média</strong><br>Digite 4 números para calcular a média.<br><br>";

    // Cria os campos de entrada e botão de cálculo dentro da área

    area.innerHTML += `
        <input type="number" id="n1" placeholder="1º número"><br><br>
        <input type="number" id="n2" placeholder="2º número"><br><br>
        <input type="number" id="n3" placeholder="3º número"><br><br>
        <input type="number" id="n4" placeholder="4º número"><br><br>
        <button onclick="mostrarMediaResultado()">Calcular Média</button>
        <div id="resultadoMedia" style="margin-top:15px;"></div>
    `;
}

// Função que calcula e mostra a média dos 4 números inseridos

function mostrarMediaResultado() {
    // Obtém os valores dos campos, convertendo para número
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let n4 = Number(document.getElementById('n4').value);

    let resultadoDiv = document.getElementById('resultadoMedia');

    // Validação: verifica se todos os campos foram preenchidos corretamente

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        resultadoDiv.innerHTML = "<span style='color:red;'>Por favor, preencha todos os campos corretamente!</span>";
        return;
    }

    // Calcula a média e exibe o resultado

    let media = (n1 + n2 + n3 + n4) / 4;
    resultadoDiv.innerHTML = "A média dos números digitados é: <strong>" + media + "</strong>";

    // Mostra também no console

    console.log("Média calculada:", media);
}

// JOGO 2: SOMA DE 2 NÚMEROS

// Função chamada ao clicar no botão "Jogo da Soma"

function iniciarJogo() {
    // Prepara a área para receber os inputs e resultado
    let area = document.getElementById('aplicacao');
    area.innerHTML = "<strong>Jogo da Soma</strong><br>Digite 2 números para somar.<br><br>";

    // Cria os campos de entrada e botão de soma dentro da área

    area.innerHTML += `
        <input type="number" id="num1" placeholder="1º número"><br><br>
        <input type="number" id="num2" placeholder="2º número"><br><br>
        <button onclick="mostrarSomaResultado()">Somar Números</button>
        <div id="resultadoSoma" style="margin-top:15px;"></div>
    `;
}

// Função que soma e mostra o resultado dos 2 números inseridos

function mostrarSomaResultado() {
    // Obtém os valores dos campos, convertendo para inteiro
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultadoDiv = document.getElementById('resultadoSoma');

    // Validação: verifica se ambos os campos foram preenchidos corretamente

    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "<span style='color:red;'>Por favor, preencha ambos os campos com números inteiros!</span>";
        return;
    }

    // Calcula a soma e exibe o resultado

    let resultado = num1 + num2;
    resultadoDiv.innerHTML = "A soma dos números é: <strong>" + resultado + "</strong>";

    // Mostra também no console

    console.log("Soma dos números:", resultado);
}

// JOGO 3: NÚMERO SECRETO

// Função chamada ao clicar no botão "Jogo do Número Secreto"

function iniciarNumeroSecreto() {
    // Prepara a área para receber o input e dicas do jogo
    let area = document.getElementById('aplicacao');
    area.innerHTML = `
        <strong>Jogo do Número Secreto</strong><br>
        Tente adivinhar o número secreto entre 1 e 10.<br><br>
        <input type="number" id="chute" placeholder="Digite seu palpite"><br><br>
        <button onclick="verificarChute()">Enviar Palpite</button>
        <div id="mensagemSecreto" style="margin-top:15px;"></div>
    `;

    // Gera um número secreto aleatório entre 1 e 10 e salva como atributo da área

    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    area.setAttribute('data-numero-secreto', numeroSecreto);
    area.setAttribute('data-tentativas', '0');

    // Mensagem inicial usando alert

    alert('Seja bem-vindo ao nosso jogo!');
}

// Função que verifica o palpite do usuário e dá dicas

function verificarChute() {
    // Recupera informações da área da aplicação
    let area = document.getElementById('aplicacao');
    let numeroSecreto = Number(area.getAttribute('data-numero-secreto'));
    let tentativas = Number(area.getAttribute('data-tentativas'));
    let chute = parseInt(document.getElementById('chute').value);
    let mensagem = document.getElementById('mensagemSecreto');

    // Validação: só aceita números entre 1 e 10

    if (isNaN(chute) || chute < 1 || chute > 10) {
        mensagem.innerHTML = "<span style='color:red;'>Digite um número válido entre 1 e 10.</span>";
        return;
    }

    // Atualiza o contador de tentativas

    tentativas++;
    area.setAttribute('data-tentativas', tentativas);

    // Verifica se acertou ou dá dica se errou

    if (chute === numeroSecreto) {
        mensagem.innerHTML = `<span style='color:green;'>Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.</span>`;
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
    } else if (chute > numeroSecreto) {
        mensagem.innerHTML = `O número secreto é menor que ${chute}. Tentativas: ${tentativas}`;
    } else {
        mensagem.innerHTML = `O número secreto é maior que ${chute}. Tentativas: ${tentativas}`;
    }

    // Mostra também no console

    console.log("Número secreto:", numeroSecreto, "Chute:", chute, "Tentativas:", tentativas);
}

// BOTÃO SAIR

// Função chamada ao clicar no botão Sair

function sairAplicacao() {
    // Exibe a caixa de diálogo personalizada
    document.getElementById('dialogo-sair').style.display = 'flex';
}

// Função chamada ao clicar em SIM ou NÃO na caixa de diálogo de saída

function confirmarSair(sim) {
    // Se SIM, tenta fechar a janela
    if (sim) {
        window.open('', '_self', ''); // necessário para alguns navegadores
        window.close();
        // Se não fechar, mostra mensagem
        setTimeout(function() {
            alert("A janela não pôde ser fechada automaticamente. Feche manualmente se desejar.");
        }, 300);
    } else {
        // Se NÃO, apenas esconde a caixa de diálogo
        document.getElementById('dialogo-sair').style.display = 'none';
    }
}