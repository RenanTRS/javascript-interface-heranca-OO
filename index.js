import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Cliente } from "./Cliente.js";
import { SistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js";

const gerente = new Gerente("rex", 5000, 1234567);
gerente.cadastrarSenha(444333);

const diretor = new Diretor("renexei", 10000, 9876321);
diretor.cadastrarSenha(664433)

const cliente = new Cliente("Renan", 32452, 223311)

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 444333);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "664433");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, 223311);
//console.log(diretor.autenticar("664433"));
console.log(gerenteEstaLogado, diretorEstaLogado);
console.log(clienteEstaLogado);