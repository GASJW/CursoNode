//throw new Error("Na minha maquina funciona!!!");

function execute() {
  executeTo();
}

function executeTo() {
  throw new Error("Na minha maquina funciona!!!");
}
function init() {
  //Tente executar algo, no caso de erro execute o catch automaticamente
  try {
    execute();
  } catch (e) {
    console.log(`Temos um problema! ${e.message}`);
  }
}

init();
console.log("Depois do Erro");
