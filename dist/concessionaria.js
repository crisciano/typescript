"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(e) {
        this.endereco = e;
    }
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'Segunda à sexta das 08:00 as 18:00 ';
    };
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
