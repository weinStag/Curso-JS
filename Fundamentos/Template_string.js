const nome = 'Vinicius'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//Expressoes....
console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)