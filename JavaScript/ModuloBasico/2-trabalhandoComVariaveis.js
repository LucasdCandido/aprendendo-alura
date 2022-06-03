const idadeComprador = 21;
const estaAcompanhado = true;
let passagemComprada = false;
const destino = 'Rio de Janeiro';
const listaDeDestino = [
  'São Paulo',
  'Rio de Janeiro',
  'Recife'
];
const destinoExiste = false;

console.log('Destinos possiveis: ');
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
while(contador<3) {
  if (listaDeDestino[contador] == destino){
    destinoExiste = true;
    break
  }else{
    console.log('Destino não existe');
  }
  contador ++;
};

console.log('Destino existente: ', destinoExiste);

if(podeComprar && destinoExiste) {
  console.log('Boa Viagem');
}else{
  console.log('Desculpe tivemos um erro!');
};

for(let cont = 0 ; cont < 3 ; cont++){
  if(listaDeDestino[contador] == destino){
    destinoExiste = true;
    break;
  };

}