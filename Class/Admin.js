import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo);
    };
};

const novoAdmin = new Admin("Mly", "mly@gmail.com", "16/01/2005");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());