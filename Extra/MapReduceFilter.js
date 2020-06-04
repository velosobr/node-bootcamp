const numeros = [3, 4, 7, 1, 9, 7]

function dobro(num) {
  return num * 2
}

const resultado = numeros.map(dobro)

console.log(resultado);

const array = [
  {nome: '....', preco: 23.66, desconto: 0.2},
  {nome: '....', preco: 120.99, desconto: 0.3},
  {nome: '....', preco: 3567.67, desconto: 0.5},
  {nome: '....', preco: 10.80, desconto: 0.1},
  {nome: '....', preco: 27.43, desconto: 0.05},
  {nome: '....', preco: 12355.33, desconto: 0.15},
]

function aplicarDesconto(produto) {
  return produto.preco * (1 - produto.desconto)
}

const segundoResultado = array.map(aplicarDesconto)

console.log(segundoResultado);


