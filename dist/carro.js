"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(m, n) {
        this.velocidade = 0;
        this.modelo = m;
        this.numeroDePortas = n;
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
exports.Carro = Carro;
