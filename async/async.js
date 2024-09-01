function sum(x) {
  return new Promise((resolve, reject) => {
    if (Number(x) == NaN || Number(x) == undefined || typeof x != "number") {
      reject("Error: Input must be a number");
    }
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

async function main() {
  try {
    const result = await sum(50);
    console.log(`Resultado com Async/Await: ${result}`);
  } catch (error) {
    console.log(`Temos Problemas: ${error}`);
  }
}

main();
