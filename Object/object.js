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

const admin = {
    nome: "João",
    email: "joaovictorpfr@gmail.com",
    nascimento: "23/08/2005",
    role: "estudante",
    criarCurso() {
        console.log("Criado")
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();