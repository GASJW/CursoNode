const http = require("http");
const { readFile } = require("fs");
const { win32 } = require("path");

const host = "127.0.0.1";
const port = "3000";
const url = `http://${host}:${port}`;

let conteudo = "";

readFile("index.html", (err, data) => {
  if (err) throw err;
  conteudo = data;
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(conteudo);
});

server.listen(port, host, () => console.log(`Servidor Rodando em ${url}`));

const start = process.platform == "win32" ? "start" : "xdg-open";

require("child_process").exec(start + " " + url);
