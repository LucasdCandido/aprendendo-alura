function tocaSom(num){
  let sons = document.querySelectorAll('audio');
  sons[num].play();
}




const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom; 