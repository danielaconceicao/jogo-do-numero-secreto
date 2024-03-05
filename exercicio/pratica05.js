/*
Calculando o IMC   
function imc(peso, altura){
    let res = peso / (altura * altura);
    return res.toFixed(2);
}

let calcularImc = imc(65, 1.7);
console.log(calcularImc);
*/

/*
Calculando o fatorial de um numero

function calcularFatorial(numero){
    //verifica se o numero é  0 ou 1
    if(numero === 0 || numero === 1){
        return 1; //se sim, vai retornar 1, pq o fatorial de 0 e 1 é 1
    }

    let fatorial = 1 //Se fatorial não fosse inicializado, o loop for precisaria verificar se i é igual a 0 ou 1 em cada iteração. Isso seria ineficiente e desnecessário, pois o fatorial de 0 e 1 sempre será 1. Ao definir fatorial como 1 antes do loop, o código evita a necessidade de realizar essa verificação repetidamente, tornando-o mais eficiente.
    
    for(let i = 2; i <= numero; i++){
        //Isso significa que o loop começará a iterar a partir de 2.
        fatorial *= i;

   }

   return fatorial;
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);


Iteração 1: i = 2, fatorial = 1 * 2 = 2 // o loop comecou com 2 pq definimos isso
Iteração 2: i = 3, fatorial = 2 * 3 = 6
Iteração 3: i = 4, fatorial = 6 * 4 = 24
Iteração 4: i = 5, fatorial = 24 * 5 = 120
*/

/*
conversor de moeda

function converterDolarEmReal(valorEmDolar){
    let cotacao = 4.96;
    let valorEmReal = valorEmDolar * cotacao;
    return valorEmReal.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'});
}

let valorEmDolar = 350;
let valorEmReal = converterDolarEmReal(valorEmDolar); //valorEmReal recebe o converterDolarEmReal para armazenar o valor convertido em real e usá-lo posteriormente no código.

console.log(`Transfomando o seu valor de ${valorEmDolar} dolar em real fica ${valorEmReal}`);

 */


/*
Calculando a area e o perimetro de uma sala

function calculandoAreaEPerimetro(base, altura){
    let area = base * altura;
    let perimetro = 2 * (base + altura);

    console.log(`Area retangular da sala: ${area}`);
    console.log(`Perimetro da sala ${perimetro}`);
}

let base = 20;
let altura = 50;
calculandoAreaEPerimetro(base, altura);

*/

/*
function calcularAreaEPerimetroSalaCircular(raio){
    let area = Math.PI * (raio**2);
    let perimetro = 2 * Math.PI * raio;

    console.log(`Area sala circular: ${area.toFixed(2)}`);
    console.log(`Perimetro sala circular: ${perimetro.toFixed(2)}`);
}

let raio = 3;
calcularAreaEPerimetroSalaCircular(raio);

*/

function tabuada(numero){

    for (let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`)
    }
}

    let numero = 4
    tabuada(numero)
    