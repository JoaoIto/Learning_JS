/* Função base para exibição de informações 
e um novo objeto de dois métodos que criaremos... */

function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}

/* Usando de que um constructor de new Object()*/

var novoUser = new User("Joao", "joao@gmail.com");
console.log(novoUser.exibirInfos());

/* ---------------------------------------------------------------- */