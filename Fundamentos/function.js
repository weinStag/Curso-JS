//Armazenando função em variavel
const imprimir_soma = function (a, b) {
    console.log(a + b)
}
imprimir_soma(2, 3)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => a + b
console.log(soma(3, 3))

//Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir = a => console.log(a)
imprimir("yay")