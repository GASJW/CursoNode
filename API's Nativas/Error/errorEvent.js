const { eventEmitter } = require("events");
const { EventEmitter } = require("stream");
const emitter = new EventEmitter();

const validaObjeto = (a) => {
  if (typeof a !== "object") {
    emitter.emit("error", new Error("Tipo informado inválido"));
  } else {
    console.log("Objeto válido!!!");
  }
};

emitter.addListener("error", (err) => {
  console.log("Evento: " + err.message);
});

let dados = { name: "Deloitte", course: "NodeJS" };

validaObjeto(dados);
validaObjeto(123);
