"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(n, cp) {
        this.nome = n;
        this.carroPreferido = cp;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
