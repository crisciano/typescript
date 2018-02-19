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
var concessionaria_1 = require("./concessionaria");
console.log("Finalizando ts .....");
var carroA = new carro_1.Carro('fusca', 2);
var carroB = new carro_1.Carro('uno', 2);
var carroC = new carro_1.Carro('palio', 2);
// let listaDeCarros: Array<Carro> = [ carroA, carroB, carroC ];
var listaDeCarros = [];
listaDeCarros.push(carroA);
listaDeCarros.push(carroB);
listaDeCarros.push(carroC);
var concessionaria = new concessionaria_1.Concessionaria('telles');
concessionaria.lista(listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
