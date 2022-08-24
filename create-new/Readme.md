# create vs new 💢

Para entendermos como funciona a herança de protótipo no JavaScript, é fundamental entender, praticar, como funciona o *this* e o *bind*, mas essa não é a forma como os objetos são criados nesse modelo, então vamos dar uma olhada, porque isso pode ser feito de duas formas, ou com o operador `new` ou com o `object.create`

---


📜 **A criação de objetos com `Object.create()` é a forma mais indicada para trabalhar com o modelo de protótipo. As funções construtoras com `new` estão mais próximas, e sejam as mais conhecidas, sintaticamente falando, do conceito de classes. Embora hoje em dia o uso de classes esteja bastante consolidado, a programação com protótipos e as funções construtoras não estão depreciadas e ainda são utilizadas. É comum que se use mais `new`!**


---

## `new()`

Provavelmente o mais conhecido na criação de um objeto na linguagem de JS, e assim vamos testar em um objeto padrão para usarmos de protótipo ao de new…

```jsx
/* Função base para exibição de informações 
e um novo objeto de dois métodos que criaremos... */

function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}
```

**A forma padrão do new, cria uma nova versão de um objeto literal de User, sendo com  o método e assim pode usar publicamente suas propriedades que foram puxadas para o novo objeto criado, desta forma:**

```jsx
/* Usando de que um constructor de new Object()*/

var novoUser = new User("Joao", "joao@gmail.com");
console.log(novoUser.exibirInfos());
```

### Resultado no console:

```jsx
/* Joao, joao@gmail.com */
```

---

## `create()`

**O método call, também muito conhecido, basicamente forma que usamos para chamar diretamente ao objeto todos os seus valores como padrão em uma função básica, e assim logo indicamos que a mesma, deve ser criada a base de um protótipo de User…**

**E depois chamamos ela no console…**

```jsx
/* Usando método de create call()*/

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
```

**O parâmetro de role chamado na função, é para que entendermos a que objeto ela esta sendo chamado, de admin. E assim, podemos ver ainda que no console do navegador ele indica que ele é um protótipo de User, como indicamos anteriormente, obtivemos o mesmo resultado de `new`.**

### Resultado no console:

```jsx
/* 
Joao, joao@gmail.com
Admin
/*
```

---