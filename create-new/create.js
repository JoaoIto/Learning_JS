/* Função base para exibição de informações 
e um novo objeto de dois métodos que criaremos... */

function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}
/* Usando método de create call() em create()*/

function Admin(role) {
  User.call(this, "Joao", "joao@gmail.com");
  this.role = role || "Estudante!"; // Ela recebe resposta do parâmetro, se não atribui o valor padrão de "Estudante"
}

/* Da mesma forma que em new, criamos o objeto, 
  e usamos o prototype do objeto de User(); 
  Assim depois criamos o objeto de admin 
  com o role de admin para caracterizar qual sua função em codigo...*/

Admin.prototype = Object.create(User.prototype);
var novoUser = new Admin("Admin");
console.log(novoUser.exibirInfos());
console.log(novoUser.role);

/* ---------------------------------------------------------------- */