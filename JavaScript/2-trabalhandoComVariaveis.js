const idadeComprador = 21;
const estaAcompanhado = true;
let passagemComprada = false;
const destino = 'Rio de Janeiro';
const listaDeDestino = [
  'São Paulo',
  'Rio de Janeiro',
  'Recife'
];

console.log('Destinos possiveis: ');
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
while(contador<3) {
  if (listaDeDestino[contador] == destino){
    console.log(`Temos ${destino}!`);
    break
  }else{
    console.log('Destino não existe');
  }
  contador ++;
};