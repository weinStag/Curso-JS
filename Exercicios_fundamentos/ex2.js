// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados

function triangulo (lado1, lado2, lado3) {
    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        if(lado1 == lado2 && lado2 == lado3)
            return 'Equilátero'
        else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3)
            return 'Isósceles'        
        else
            return 'Escaleno'
    }else{
        return 'Não é um triângulo'
    }
}

console.log(triangulo(1, 50, 1))
console.log(triangulo(2, 2, 2))
console.log(triangulo(2, 3, 3))
console.log(triangulo(2, 3, 4))
