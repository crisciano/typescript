// install typeScript           ### npm intall -g typescript 
// inicializando o typeScript   ### tsc -init
// gerar js do typescript       ### tsc "nome do arquivo"
// watch tsc init               ### tsc -w
// watch tsc especifico         ### tsc -w "nome do arquivo"
// debug arquivo js             ### node "nome do arquivo"

console.log("Inicializando js .... ");
import { Carro } from './carro'
import { Concessionaria } from './concessionaria'
import { Pessoa } from './pessoa'
console.log("Finalizando ts .....");

let carroA = new Carro('fusca', 2)
let carroB = new Carro('uno', 2)
let carroC = new Carro('palio', 2)

// let listaDeCarros: Array<Carro> = [ carroA, carroB, carroC ];
let listaDeCarros: Array<Carro> = [];

listaDeCarros.push(carroA)
listaDeCarros.push(carroB)
listaDeCarros.push(carroC)

let concessionaria = new Concessionaria('telles')

concessionaria.lista(listaDeCarros)

console.log(concessionaria.mostrarListaDeCarros());