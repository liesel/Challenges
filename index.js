// Função que simula operação assíncrona
function asyncOperation(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

// Função que cria um objeto com uma referência ao intervalo
function createSpecialObject() {
  const obj = {
    intervalId: null
  };

  obj.intervalId = setInterval(() => {
    asyncOperation(() => {
      console.log("Operação assíncrona concluída");
    });
  }, 1000);

  return obj;
}

// Função que inicia o processo
function startProcess() {
  const objects = [];

  setInterval(() => {
    const newObj = createSpecialObject();
    objects.push(newObj);

    console.log("Quantidade de objetos criados: ", objects.length);
  }, 2000);
}

startProcess();
