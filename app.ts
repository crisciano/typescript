// install typeScript           ### npm intall -g typescript 
// inicializando o typeScript   ### tsc -init
// gerar js do typescript       ### tsc "nome do arquivo"
// watch tsc init               ### tsc -w
// watch tsc especifico         ### tsc -w "nome do arquivo"
// debug arquivo js             ### node "nome do arquivo"

console.log("Inicializando js .... ");

class Carro{
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0 

    constructor(m: string, n: number, v: number){
        this.modelo = m
        this.numeroDePortas = n
        this.velocidade = v
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

class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(e: string) {
        this.endereco = e
    }

    public fornecerEndereco() {

    }
    public mostrarListaDeCarros(){

    }
}

class pessoa {
    private nome: string
    private carroPreferido: string
    private carro: string

    constructor(n: string, cp: string, c: string ) {
        this.nome: n
        this.carroPreferido: cp
        this.carro: c
    }
    public dizerNome(){

    }
    public dizerCarroPreferido(){

    }
    public comprarCarro(){

    }
    public dizerCarroQueTem(){
        
    }
}

console.log("Finalizando ts .....");


let carroA = new Carro('ka', 4, 0);
console.log(carroA);