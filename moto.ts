import { Veiculo } from './veiculo'

export class Moto extends Veiculo{
    constructor(m: string){
        super()
        this.modelo = m
    }

    public acelerar(): void{
        this.velocidade = this.velocidade + 20
    }
}