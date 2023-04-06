import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        /* Herdando a partir de um super, da classe de User, (classe mãe)
        Eles são herdados tantos os atributos e seus métodos, que são já
        especificados no próprio super...*/
        super(nome, email, nascimento, role, ativo);
    };
};

const novoAdmin = new Admin("Mly", "mly@gmail.com", "16/01/2005");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());