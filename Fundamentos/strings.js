const teste = 'Cod3r'

console.log(teste.charAt(4))
console.log(teste.charAt(5))

console.log(teste.charCodeAt(3))
//codigo unicode do indice 3 de teste

console.log(teste.indexOf('3'))
//indice do '3'

console.log(teste.substring(1))
//imprime do indice para frente

console.log(teste.substring(0, 3))
//vai de 0 até 3 sem incluir o indice 3

console.log('Udemy '.concat(teste).concat("!").concat(`!`))
console.log('Udemy ' + teste + '!')
//exemplos de concatenação

console.log(teste.replace(3, 'e'))
//função replace 

console.log('Ana,Maria,Pedro'.split(','))
//split to array based on condition -> (',')

const ableble = 'Ana,Maria,Pedro'.split(',')

console.log(ableble)