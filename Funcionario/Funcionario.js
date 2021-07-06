export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        
        if(this.constructor == Funcionario){
            throw new Error("Classe Abstrata");
        }
    }
}