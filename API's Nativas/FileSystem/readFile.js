const { timeLog } = require("console");
const fs = require("fs");

fs.readFile("loremipsum.txt", (err, data) => {
  if (err) throw err;

  //console.log(data.toString());
});

const texto = fs.readFileSync("loremipsum.txt");

console.log(`Texto ${texto}`);
