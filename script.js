class Lista {
    constructor() {
        this.tarefa = document.getElementById('tarefa');
        this.botaoAdicionar = document.getElementById('adicionar')
        this.apaga = document.getElementById('numero')
        this.botaoRemover = document.getElementById('remover')
        this.lista = document.getElementById('lista')
        this.formulario = document.getElementById('formulario')
        this.verificar()
        this.indice = 0
        this.estado = false
    }
    adicionar() {
        this.indice += 1
        this.lista.innerHTML += `<p id= '${this.indice}'>${this.indice} - ${this.tarefa.value}</p>`
    }
    remover() {
        this.apaga.innerHTML = ''
        this.estado = false
    }
    verificar() {
        this.botaoAdicionar.addEventListener("click", (event) => {
            event.preventDefault();
            this.validar();
        });

        this.botaoRemover.addEventListener("click", (event) => {
            event.preventDefault();
            this.validar();
            this.estado = true;
        });
    }
    validar() {
        if (this.tarefa.value === '' ) {
            window.alert('Digite uma tarefa valida')
        } else if (this.estado === false) {
            this.adicionar()
        } else {
            this.remover()
        }
    }
}

const teste = new  Lista();