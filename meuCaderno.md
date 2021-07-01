# Aula01 - Conhecendo o problema do cliente
## Relembrando o projeto:  
- Não é sempre necessário que os atributos sejam declarados, pois podem ser iniciados dentro do construtor;  
```
export class ContaPoupanca{
    constructor(saldo, cliente, agencia){
        this.saldo = saldo;
        this.cliente = cliente;
        this.agencia = agencia;
    }
}
```