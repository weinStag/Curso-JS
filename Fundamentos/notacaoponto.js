console.log(Math.ceil(5.12))

const produto = {}
produto.nome = 'Bola'
console.log(produto.nome)

function OBJETO(nome){
    this.nome_do_objeto = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const objeto_1 = new OBJETO('cadeira')
const objeto_2 = new OBJETO('calça')

console.log(objeto_1.nome_do_objeto)
console.log(objeto_2.nome_do_objeto)
objeto_1.exec()