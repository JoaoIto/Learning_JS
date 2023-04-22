export class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    /* Atributos definidos nos parãmetros sendo valorizados */
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  /* Método de exibição de informações sendo instanciado */
  exibirInfos() {
    return `O nome do usuário é: ${this.#nome}, com email: ${this.#email}`;
  }

  get nome(){
    return this.#nome;
  }

  set nome(nome){
    this.#nome = nome;
  }

  get email(){
    return this.#email;
  }

  set email(email){
    this.#email = email;
  }

  get nascimento(){
    return this.#nascimento;
  }

  set nascimento(nascimento){
    this.#nascimento = nascimento;
  }

  get role(){
    return this.#role;
  }

  set role(role){
    this.#role = role;
  }

  get ativo(){
    return this.#ativo;
  }

  set ativo(ativo){
    this.#ativo = ativo;
  }
}
