export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo;
    };
    exibirInfos(){
        return `${this.nome}, ${this.email}`;
    };
};

const novoUser = new User("Joao", "joao@gmail.com", "23/08/2005");
console.log(novoUser);
console.log(novoUser.exibirInfos());