# `Object.setPrototypeOf()`

**Quando nós lidamos com orientação a objetos, é bastante problemático a cópia e repetitividade de código, fazendo com que precisamos usar uma função muito importante que consiga tratar alguns trecho base de código para que consigamos reutilizá-los em outras partes de código.**

---

## Base

**Ela basicamente funciona como a importação de código, ela funciona com dois parâmetros. Sendo que o primeiro funciona de ser aquele que herdará, e logo o segundo parâmetro será aquele que importará a função.**

### Exemplo:

**Vamos colocar isso exemplificando oque acontecerá naquele código já existente. Já temos o código de um objeto de `user` em que ele pega um usuário padrão que tem tudo oque ele deve ser, função de estudante... E ele em si carrega uma função de exibirInfo, consistindo na exibição de suas informações base. Porém, precisamos e devemos utilizar essa função como base para todos os tipos de cargos dos objetos, fazendo com que eles tenham importadas.**

**Para que não precisamos reescrevê-las e usar um péssimo hábito de copiar código, vamos importá-la a partir da função de `Object.setPrototypeOf()`**

```jsx
//Objeto base de usuário...

const user = {
    name: "João", 
    email: "joaovictorpfr@gmail.com",
    nascimento: "23/08/2005",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.name, this.email, );
    }
};

/* Objeto de administrador, que 
tem sua própria função e também apresenta 
a função de exibirInfos() 
que é parte base do objeto de "user";
*/
const admin = {
    nome: "João",
    email: "joaovictorpfr@gmail.com",
    nascimento: "23/08/2005",
    role: "estudante",
    criarCurso() {
        console.log("Criado")
    }
}

// Importando a função...
/* Primeiro parâmetro sendo aquele que é 
oque receberá a função e o segundo 
parâmetro aquele que herdará!
*/
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
```

**Basicamente, o objeto de protótipo faz a função com que seja herdado um objeto um dos outros. Perceba que por exemplo, o objeto de admin não possui nenhuma função base de exibir informações, porém mesmo assim, ele já puxa essa função para que assim mostre, isso herdado a partir do objeto de Object.setPrototypeOf( );**

---
