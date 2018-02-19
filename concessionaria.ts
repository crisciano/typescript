import { Carro } from './carro'
import { ConcessionariaInterfaces } from './ConcessionariaInterface'

export class Concessionaria implements ConcessionariaInterfaces {
    private endereco: string
    private listaDeCarros: any

    constructor(e: string) {
        this.endereco = e
    }
    public fornecerHorariosDeFuncionamento(): string{
        return 'Segunda à sexta das 08:00 as 18:00 '

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