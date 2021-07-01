import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";

//Cliente 1
const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente(101, cliente1);
conta1.depositar(200);


//Cliente 2
const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente(102, cliente2);
conta2.depositar(50);

const cliente3 = new Cliente("Rex", 66355323);
const conta3 = new ContaCorrente(103, cliente3);
const contap3 = new ContaPoupanca(200, cliente3, 103);

//Output
//conta1.transfere(50, conta2);
//console.log(conta1);
//console.log(ContaCorrente.numeroDeContas);

