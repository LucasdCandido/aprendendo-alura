// const Livro = {
//   nome: 'React Native',
//   editora: 'Casa do Codigo',
//   paginas: 185,
//   anunciar: function() {
//     console.log('A Alura indica o livro' + this.nome + '!')
//   }
// }
// Livro.anunciar()

// const Livro = function(nome, editora, paginas){
//   gNome = nome,
//   gEditora = editora,
//   gPaginas = paginas

//   this.getName = function(){
//     return gNome
//   }
//   this.getEditora = function(){
//     return gEditora
//   }
//   this.getPaginas = function(){
//     return gPaginas
//   }
// }

// const GraphQL = new Livro('GrapgQL', 'Casa dp Codigo', 143);
// console.log(GraphQL.getName())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

// const nome = 'Alura'
// const temp = new String(nome)

// console.log(temp.toString())

class Livro {
  constructor (nome, editora, paginas) {
    this.nome = nome
    this.editora = editora
    this.paginas = paginas
  }
  anunciarTitulo(){
    console.log(`Titulo: ${this.nome}`)
  }
  descreverTitulo(){
    console.log(`${this.nome} é um livro da editoria ${this.editora} e tem ${this.paginas} paginas`)
  }
}

const NodeJS = new Livro('Primeiros passos com o NodeJS', 'Casa do codigo', 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

class LivroColecao extends Livro {
  constructor(nome, nomeColecao){
    super(nome)
    this.nomeColecao = nomeColecao
  }
  descreverColecao(){
    console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
  }
}

const LogicaDeProgramacao = new LivroColecao('Logica de programação', 'Comece a programar')
LogicaDeProgramacao.descreverColecao()