import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            throw new Error("Classe Abstrata");
        }
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        /*Método Abstrato*/
        throw new Error("Método Abstrato");
    }
    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }
    
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
    transferir(valor, conta){
        const valorSacado = sacar(valor);
        conta.depositar(valorSacado);
    }
}