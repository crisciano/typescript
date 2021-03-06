"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = require("./veiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(m) {
        var _this = _super.call(this) || this;
        _this.modelo = m;
        return _this;
    }
    Moto.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 20;
    };
    return Moto;
}(veiculo_1.Veiculo));
exports.Moto = Moto;
