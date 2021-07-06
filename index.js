import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js";

const gerente = new Gerente("rex", 5000, 1234567);
gerente.cadastrarSenha(444333);

const diretor = new Diretor("renexei", 10000, 9876321);
diretor.cadastrarSenha(664433)

const estaLogado = SistemaAutenticacao.login(gerente, "444333");
console.log(estaLogado);


