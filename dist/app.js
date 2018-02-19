"use strict";
// install typeScript           ### npm intall -g typescript 
// inicializando o typeScript   ### tsc -init
// gerar js do typescript       ### tsc "nome do arquivo"
// watch tsc init               ### tsc -w
// watch tsc especifico         ### tsc -w "nome do arquivo"
// debug arquivo js             ### node "nome do arquivo"
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Inicializando js .... ");
var carro_1 = require("./carro");
var moto_1 = require("./moto");
var concessionaria_1 = require("./concessionaria");
var pessoa_1 = require("./pessoa");
console.log("Finalizando ts .....");
// criando objetos do tipo carro
var carroA = new carro_1.Carro('fusca', 2);
var carroB = new carro_1.Carro('uno', 2);
var carroC = new carro_1.Carro('palio', 2);
// criando um array de objetos do tipo carro
// let listaDeCarros: Array<Carro> = [ carroA, carroB, carroC ];
var listaDeCarros = [];
// inserindo no os objetos do tipo carro na lista
listaDeCarros.push(carroA);
listaDeCarros.push(carroB);
listaDeCarros.push(carroC);
// instanciando uma concessionaria
var concessionaria = new concessionaria_1.Concessionaria('telles');
// inserindo a lista de objetos do tipo carro na concessionaria
concessionaria.lista(listaDeCarros);
// console.log(concessionaria.mostrarListaDeCarros());
// instanciando um cliente
var cliente = new pessoa_1.Pessoa('cris', 'fusca');
concessionaria.mostrarListaDeCarros()
    .map(function (carro) {
    // console.log(carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
// console.log(cliente.dizerCarroQueTem());
var carro = new carro_1.Carro('fusion', 4);
var moto = new moto_1.Moto('titan');
console.log(concessionaria.fornecerHorariosDeFuncionamento());
