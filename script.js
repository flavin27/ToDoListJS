class Lista {
    constructor() {
        this.tarefa = document.getElementById('tarefa');
        this.botao = document.getElementById('adicionar')
        this.lista = document.getElementById('lista')
        this.verificar()
        this.indice = 0
    }
    adicionar() {
        this.indice += 1
        this.lista.innerHTML += `<p>${this.indice} - ${this.tarefa.value}</p>`
    }
    verificar() {
        this.botao.addEventListener('click', this.validar.bind(this))
    }
    validar() {
        if (this.tarefa.value === '') {
            window.alert('Digite uma tarefa valida')
        } else {
            this.adicionar()
        }
    }
}

const teste = new  Lista();