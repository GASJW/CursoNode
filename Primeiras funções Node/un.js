const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.unlink("file2.txt", (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
    console.log("Arquivo Excluído com sucesso!");
  });
});
