const fs = require("fs");
const assets = ["CSS", "JS", "IMAGES", "FONTS", "LIB"];

function make(dir) {
  dir.forEach((item) => {
    fs.mkdir(`Projeto/Assets/${item}`, { recursive: true }, (err) => {
      if (err) throw err;
      console.log("Diretório Criado com Sucesso:", item);
    });
  });
}

make(assets);
