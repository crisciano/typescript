// install typeScript           ### npm intall -g typescript 
// inicializando o typeScript   ### tsc -init
// gerar js do typescript       ### tsc "nome do arquivo"
// watch tsc init               ### tsc -w
// watch tsc especifico         ### tsc -w "nome do arquivo"
// debug arquivo js             ### node "nome do arquivo"

console.log("Inicializando js .... ");
import { Carro } from './carro'
import { Moto } from './moto'
import { Concessionaria } from './concessionaria'
import { Pessoa } from './pessoa'
console.log("Finalizando ts .....");

// criando objetos do tipo carro
let carroA = new Carro('fusca', 2)
let carroB = new Carro('uno', 2)
let carroC = new Carro('palio', 2)

// criando um array de objetos do tipo carro
// let listaDeCarros: Array<Carro> = [ carroA, carroB, carroC ];
let listaDeCarros: Array<Carro> = [];

// inserindo no os objetos do tipo carro na lista
listaDeCarros.push(carroA)
listaDeCarros.push(carroB)
listaDeCarros.push(carroC)

// instanciando uma concessionaria
let concessionaria = new Concessionaria('telles')

// inserindo a lista de objetos do tipo carro na concessionaria
concessionaria.lista(listaDeCarros)
// console.log(concessionaria.mostrarListaDeCarros());

// instanciando um cliente
let cliente = new Pessoa('cris', 'fusca');

concessionaria.mostrarListaDeCarros()
    .map((carro: Carro) => {
        // console.log(carro);
        if(carro['modelo'] == cliente.dizerCarroPreferido()){ cliente.comprarCarro(carro) }        
    })

// console.log(cliente.dizerCarroQueTem());

let carro = new Carro('fusion', 4);

let moto = new Moto('titan');

console.log(concessionaria.fornecerHorariosDeFuncionamento());


