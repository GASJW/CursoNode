console.time("contador");

console.log("Exibindo uma mensagem no console!");

//erro
//console.error(new Error("Exibindo mensagem de erro: Temos Problemas!!!"));

const carros = ["GM", "FIAT", "FORD", "VW", "RENAULT", "HONDA", "HYUNDAI"];

console.table(carros);
//const console = require("node:console");

const dados = { name: "Guilherme Augusto", empresa: "Deloitte Brasil" };

console.table(dados);

console.count("Processo");
console.count("Processo");
console.count("Processo");

console.log("Resetando o processo");

console.countReset("Processo");

console.count("Processo");

console.timeEnd("contador");

console.time("contadordoFor");
for (let index = 0; index < 100; index++) {
  //console.log("-");x
}
console.timeEnd("contadordoFor");

console.assert(true, "Faça algo");

console.assert(false, "Ih rapaz %s, que pena", "Não funcionou");

//console.clear();
