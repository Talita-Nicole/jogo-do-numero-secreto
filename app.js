let numeroLimite = 10;
let numerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let contador = 1;
console.log(numeroAleatorio);

function exibirTexto(tag, txt){
    let campo = document.querySelector(tag);
    campo.innerHTML = txt;
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Acerte o numero secreto entre 1 e ${numeroLimite}:`);
}

exibirMensagemInicial();

function gerarNumeroAleatorio(){
    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);

   
    if (numerosSorteados.includes(numeroGerado)) {
        if(numerosSorteados.length == numeroLimite){
            numerosSorteados = [];
        }
        return gerarNumeroAleatorio();
    }
    else{
        numerosSorteados.push(numeroGerado);
        return numeroGerado;
    }
}

function rertonarChute(){
    return document.querySelector('input').value;
}


function verificarChute(){
    let chute = rertonarChute();

    if(chute == numeroAleatorio){
        exibirTexto('h1', 'Você acertou!');
        let mensagemTentativas = contador>1? 'tentativas' : 'tentativa';
        let mensagemTxt = `Você descobriu o número secreto em ${contador} ${mensagemTentativas}.`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTexto('p', mensagemTxt);
    }
    else{
        let mensagem;
        if(chute < numeroAleatorio){
            mensagem = 'maior';
        }
        else{
            mensagem = 'menor';
        }
        limparCampo();
        contador++;
        exibirTexto('p', `O número secreto é ${mensagem} que o chute.`);
    }
} 

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function novoJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    console.log(numeroAleatorio);
    contador = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
