function soma(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

soma(200)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch(() => {
    console.log("Erro ao calcular a soma");
  });
