import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


//Cliente 1
const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new ContaCorrente(cliente1, 103);
conta1.depositar(200);
conta1.sacar(100);
const contaS = new ContaSalario(cliente1);
contaS.depositar(1000);
contaS.transferir(10, conta1);
//Output
//conta1.transfere(50, conta2);
console.log(contaS);
//console.log(ContaCorrente.numeroDeContas);

