require("./subdirectory/sub.js");
console.log("------------------------------");
console.log(`Nome do Arquivo:`, __filename);
console.log(`Diretório do Arquivo:`, __dirname);
//console.log(`Prâmetros de execução:`, process.env); //Biblioteca inteira
console.log(`Sistema Operacional:`, process.env.OS);
console.log(`Usuário do sistema:`, process.env.USERNAME);
console.log(`Idioma:`, process.env.LANG);
console.log(`Nome do Servidor:`, process.env.COMPUTERNAME);

switch (process.argv[2]) {
  case "-a":
    console.log("Execute a rotina principal");
    break;
  case "-i":
    console.log("Execute instalção");
    break;
  case "-q":
    console.log("Encerrando Aplicação");
    process.exit(); //Interrompe imediatamente o código
    break;
  default:
    console.log("Parâmetro inválido");
}
console.log(`Ambiente do Servidor:`, process.platform);
