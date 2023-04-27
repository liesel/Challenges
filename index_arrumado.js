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

// Função para limpar o intervalo e remover a referência ao objeto
function clearSpecialObject(obj) {
  clearInterval(obj.intervalId);
}

// Função que inicia o processo
function startProcess() {
  const objects = [];

  setInterval(() => {
    const newObj = createSpecialObject();
    objects.push(newObj);

    // Limpa e remove o objeto mais antigo após um certo período
    if (objects.length > 5) {
      const removedObj = objects.shift();
      clearSpecialObject(removedObj);
    }

    console.log("Quantidade de objetos criados: ", objects.length);
  }, 2000);
}

startProcess();
