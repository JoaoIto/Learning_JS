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
}
