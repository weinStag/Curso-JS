// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

const calcular = function (a, b){
    console.log('\nnúmero 1: '+ a)
    console.log('número 2: '+ b)
    console.log('soma: ' + (a + b))
    console.log('subtração: ' + (a - b))
    console.log('multiplicação: ' +(a * b))
    console.log('divisão: ' + (a / b))
}

calcular(1, 2)
calcular(3, 6)