let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do desafio'

function verificarConsole(){
    console.log('O botão foi clicado')
}

function verificarAlerta(){
    alert('Eu amo js')
}

function verificarPrompt(){
    let demo = prompt('Digite uma cidade do Brasil')
    alert(`Estive em ${demo} e lembrei de você`)
}

function verificarSoma(){
    let n1 = Number(prompt('Digite o primeiro numero'))
    let n2 = Number(prompt('Digite o segundo numero'))

    let res = n1 + n2
    alert(res)
}