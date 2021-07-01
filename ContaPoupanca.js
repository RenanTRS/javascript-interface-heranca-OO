import {Cliente} from "./Cliente.js";

export class ContaPoupanca{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this.cliente = cliente;
        this._agencia = agencia
    }

    /*Acessores*/
    get saldo(){
        return this._saldo;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    get cliente(){
        return this._cliente;
    }

    set agencia(novaAgencia){
        this._agencia = novaAgencia;
    }
    get agencia(){
        return this._agencia;
    }
    
    /*Métodos*/
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
    transfere(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}