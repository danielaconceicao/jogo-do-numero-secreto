/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do numero secreto'
let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Digite um numero entre 1 e 10'
*/
let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Digite um numero entre 1 e 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');

        }else{
            exibirTextoNaTela('p', 'O numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = (parseInt(Math.random()* numeroLimite + 1));
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteado = [];//Dessa forma, não permitimos que os números que já foram sorteados apareçam novamente, a menos que todos os números já tenham sido sorteados.
    }
    if(listaDeNumeroSorteado.includes(numeroEscolhido)){//includes => vai verificar se o elemento ta na lista. Como é uma função ele (abre e fecha parenteses)
        return gerarNumeroAleatorio();//nesse caso ele vai gerar um novo numero, um numero diferente
    }else{
        listaDeNumeroSorteado.push(numeroEscolhido);//adicionando o valor a lista
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}