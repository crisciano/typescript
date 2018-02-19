"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(e) {
        this.endereco = e;
    }
    Concessionaria.prototype.lista = function (l) {
        this.listaDeCarros = l;
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
