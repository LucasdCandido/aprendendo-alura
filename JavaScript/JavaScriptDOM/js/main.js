const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach( (elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatistica(evento.target.dataset.peca)
  })
});

// somar.addEventListener("click", () => { manipulaDados("somar")
// });

// subtrair.addEventListener("click", () => { manipulaDados("subtrair")
// });

function manipulaDados(operacao, controle){
  const peca = controle.querySelector("[data-contador]")


  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  };
};

function atualizaEstatistica(peca) {
  console.log(pecas[peca])

  estatistica.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}

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