// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capitalInicial, taxa, tempo) => capitalInicial + (capitalInicial * taxa * tempo)

const jurosCompostos = (capitalInicial, taxa, tempo) => capitalInicial * (1 + taxa) ** tempo

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2).toFixed(2));