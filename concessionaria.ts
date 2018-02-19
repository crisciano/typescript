import {Carro} from './carro'

export class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(e: string) {
        this.endereco = e
    }

    public lista( l: Array<Carro>): void{
        this.listaDeCarros = l;
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }
}