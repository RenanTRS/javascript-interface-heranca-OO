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

# Aula02 - Herança
## Herança:
- ```extends``` Serve para herdar dados e outra conta;  
```
import { Conta } from "./Conta.js";
export class ContaCorrent extends Conta{
}
```
- ```super()``` Serve para referenciar (chamar algo) a classe mãe;  
```
constructor(cliente, agencia){
	super(0, cliente, agencia);
}
```