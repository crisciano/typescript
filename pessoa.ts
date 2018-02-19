import { Carro } from './carro'

export class Pessoa{
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor (n: string, cp: string) {
        this.nome = n
        this.carroPreferido = cp
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro

    }

    public dizerCarroQueTem(): any{
        return this.carro
    }

}