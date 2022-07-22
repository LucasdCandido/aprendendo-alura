const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");
console.log(controle)

controle.forEach( (elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent)
  })
})

somar.addEventListener("click", () => { manipulaDados("somar")
});

subtrair.addEventListener("click", () => { manipulaDados("subtrair")
});

function manipulaDados(operacao){
  if (operacao === "subtrair") {
    braco.value = parseInt(braco.value) - 1;
  } else {
    braco.value = parseInt(braco.value) + 1;
  };
};

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