const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");


somar.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) - 1;
});



// let ultima_posicao_conhecida = 0;
// let ticking = false;

// function mostraPosicao (posicao_scrol) {
//   console.log(posicao_scrol)
// };

// window.addEventListener("scroll", function(e) {
//   ultima_posicao_conhecida = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function(){
//       mostraPosicao(ultima_posicao_conhecida);
//       ticking = false;
//     })

//     ticking = true;
//   }
// })