class Lista {
    constructor() {
        this.tarefa = document.getElementById('tarefa');
        this.botao = document.getElementById('adicionar')
        this.lista = document.getElementById('lista')
        this.verificar()
    }
    adicionar() {
        this.lista.innerHTML += `<p>${this.tarefa.value}</p>`
    }
    verificar() {
        this.botao.addEventListener('click', this.adicionar.bind(this))
    }
}

const teste = new  Lista();