class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.dono = null;
  }

  atribuirDono(dono) {
    this.dono = dono;
    dono.veiculo = this;
  }
}

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.veiculo = null;
  }

  adicionarVeiculo(veiculo) {
    this.veiculo = veiculo;
    veiculo.atribuirDono(this);
  }
}

// Função modificada para lidar com referências cíclicas
function clonarObjeto(obj, visitados = new Map()) {
  if (visitados.has(obj)) {
    return visitados.get(obj);
  }

  const newObj = {};

  // Armazenar objeto visitado no mapa
  visitados.set(obj, newObj);

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = clonarObjeto(obj[key], visitados);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const pessoa1 = new Pessoa("João", 30);
const carro1 = new Veiculo("Toyota", "Corolla");

// Criar uma referência cíclica entre a pessoa e o veículo
pessoa1.adicionarVeiculo(carro1);

console.log("=== Pessoa 1 ===");
console.log(pessoa1);

console.log("=== Carro 1 ===");
console.log(carro1);

try {
  console.log("=== Pessoa 1 Clonada ===");
  const pessoa1Clonada = clonarObjeto(pessoa1);
  console.log(pessoa1Clonada);
} catch (e) {
  console.error("Erro ao clonar objeto:", e);
}
