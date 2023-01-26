class Lista {
    constructor() {
        this.tarefa = document.getElementById('tarefa');
        this.botaoAdicionar = document.getElementById('adicionar')
        this.apaga = document.getElementById('numero')
        this.botaoRemover = document.getElementById('remover')
        this.lista = document.getElementById('lista')
        this.formularioAdd = document.getElementById('add')
        this.formularioRemov = document.getElementById('remov')
        this.verificar()
        this.indice = 0
        this.estado = false
    }
    adicionar() {
        this.indice += 1
        this.lista.innerHTML += `<p id= '${this.indice}'>${this.indice} - ${this.tarefa.value}</p>`
    }
    remover() {
        this.apagap = document.getElementById(`${this.apaga.value}`)
        this.apagap.remove()
    }
    
    verificar() {
        this.botaoAdicionar.addEventListener("click", (event) => {
            event.preventDefault();
            this.estado = false;
            this.validar();

        });
        
        this.botaoRemover.addEventListener("click", (event) => {
            event.preventDefault();
            this.estado = true;
            this.validar();
        });
    }
    validar() {
        if (this.estado === false) {
            this.adicionar()
        } else {
            this.remover()
        }
    }
}

const teste = new  Lista();
