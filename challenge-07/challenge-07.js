/*
Crie um array com 5 items (tipos variados).
*/
var arr =  ['gabriel', 10, null, ['eduardo'], undefined ]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem ( pushArray) {
 arr.push ( pushArray ); }

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['computador', 22,null])

[ 'gabriel',
  10,
  null,
  [ 'eduardo' ],
  undefined,
  'alan',
  12,
  [ 'computador', 22, null ] ]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
var lastPosition = arr[7]
console.log ('o segundo elemento do segundo array '+lastPosition[1] )

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
arr.length
8

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
arr[7].length

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?
while (count % 2 === 0 && count >= 10 ){
... console.log(count)
... count = count -2}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
while (--count % 2 === 1 && count >= 10 ){
... console.log(count--)}


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?
for (var count = 100; count <= 120 && count%2 === 0 ;count=count+ 2){
... console.log(count)}


console.log( 'Números ímpares entre 111 e 125:' );
// ?
for (var count = 111; count <= 125 && count%2 === 1 ;count=count+ 2){
... console.log(count)}

