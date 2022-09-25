const prod1 = {}
prod1.nome = 'celular'
prod1.preco = 4998.0
prod1['Desconto'] = 0.40
console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

//exemplo json
'{ "nome": "camisa", "preco": 79.90}'

console.log(prod2)