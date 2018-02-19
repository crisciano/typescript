"use strict";
// install typeScript           ### npm intall -g typescript 
// inicializando o typeScript   ### tsc -init
// gerar js do typescript       ### tsc "nome do arquivo"
// watch tsc init               ### tsc -w
// watch tsc especifico         ### tsc -w "nome do arquivo"
// debug arquivo js             ### node "nome do arquivo"
console.log("Inicializando js .... ");
var Carro = /** @class */ (function () {
    function Carro(m, n, v) {
        this.velocidade = 0;
        this.modelo = m;
        this.numeroDePortas = n;
        this.velocidade = v;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(e) {
        this.endereco = e;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
    };
    return Concessionaria;
}());
var pessoa = /** @class */ (function () {
    function pessoa(n, cp, c) {
        this.nome;
        n;
        this.carroPreferido;
        cp;
        this.carro;
        c;
    }
    pessoa.prototype.dizerNome = function () {
    };
    pessoa.prototype.dizerCarroPreferido = function () {
    };
    pessoa.prototype.comprarCarro = function () {
    };
    pessoa.prototype.dizerCarroQueTem = function () {
    };
    return pessoa;
}());
console.log("Finalizando ts .....");
var carroA = new Carro('ka', 4, 0);
console.log(carroA);
