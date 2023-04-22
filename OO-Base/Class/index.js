import { User } from "./User.js";
import { Admin } from "./Admin.js";

const novoUser = new User("Joao", "joao@gmail.com", "23/08/2005");
const novoAdmin = new Admin("Mly", "mly@email.com", "20-02-2020", )

console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
