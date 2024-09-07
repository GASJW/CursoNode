import { EventEmitter } from "events";

class Evento extends EventEmitter {}
const meuEvento = new Evento();

//preparando o assinante - subscriber
meuEvento.on("seguranca", (x, y) => {
  console.log(`Executando o evento 'seguranca': ${x} ${y}`);
});

//emissor - publisher
meuEvento.emit("seguranca", "userAdmin", "Alterou Salário");

meuEvento.on("Encerrar", (dados) => {
  console.log("Assinante: " + dados);
});

meuEvento.emit("Encerrar", "Encerrando a execução da importação dos dados!");
