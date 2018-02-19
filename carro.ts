export class Carro{
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0 

    constructor(m: string, n: number){
        this.modelo = m
        this.numeroDePortas = n
    }
    public acelerar(): void{
        this.velocidade = this.velocidade + 10;
    }
    public parar(): void{
        this.velocidade = 0;
    }
    public velocidadeAtual(): number{
        return this.velocidade;
    }
}