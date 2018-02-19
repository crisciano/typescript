import { Veiculo } from './veiculo'

export class Carro extends Veiculo{
    private numeroDePortas: number
    constructor(m: string, n: number ){
        super()
        this.modelo = m
        this.numeroDePortas = n
    }
}