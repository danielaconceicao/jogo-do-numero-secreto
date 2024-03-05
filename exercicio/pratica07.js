/*let carro = {
    modelo: 'ford',
    cor: 'prata',
    ano: 2018,
    banco: 'couro'
}

for(let chave in carro){
    console.log(carro.ano)
}*/

function Carro(modelo, marca, ano, dono){//função construtora
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.dono = dono;
}

var meuCarro = new Carro('ford-ka', 'ford', 2022, 'jose');
meuCarro.cor = 'azul'
console.log(meuCarro.cor)