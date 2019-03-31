 Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (a){ return a ? true :false}


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy('falsy');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy ('85')
> isTruthy ('maria')
> isTruthy ('eduardo')
> isTruthy ('@@')
> isTruthy ('!!')
> isTruthy ('aa')
> isTruthy (1000)
> isTruthy ('xx')
> isTruthy ('ma')
> isTruthy (1)

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
?

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
> var carro = {cor : 'preto' , mudacor : function (cor){
... carro.cor = cor;
... return 'agora a cor do carro é' + carro.cor;}
... }


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
> carro.obterCor= function (){ return 'agora a cor do carro é' +' ' + carro.cor}



/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
?

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
> carro.obterMarca = function (){ return 'o modelo do carro é ' +' '+ carro.modelo}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
> carro.obterMarcaModelo = function (){ return 'Esse carro é um ' + ' ' + carro.marca+' '+carro.modelo}


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.lotacao = function (passageiros) {
 var a = 5-(carro.ocupacao  -passageiros) ; 
var total = 5- carro.ocupacao 
if ( passageiros + carro.ocupacao === 5 ){
 carro.ocupacao += passageiros;
 return 'carro lotado'}
else if (passageiros < 5 && carro.ocupacao <5 && carro.ocupacao +passageiros <5  ){
 carro.ocupacao += passageiros;
return 'ja temos ' + carro.ocupacao +' pessoas no carro'} 
else if ( total ===1){
return 'só cabem mais  1  pessoa' }
else if  ( total >= 2){
return 'só cabem mais ' + total + ' pessoas' } }

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
'vermelho'

// Mude a cor do carro para vermelho.
carro.cor = 'azul'

// E agora, qual a cor do carro?
'azul'

// Mude a cor do carro para verde musgo.
carro.cor = 'verde musgo'

// E agora, qual a cor do carro?
'verde musgo'

// Qual a marca e modelo do carro?
'Esse carro é um  ford caminhonete'

// Adicione 2 pessoas no carro.
carro.lotacao (2);

// Adicione mais 4 pessoas no carro.
carro.lotacao (4);

// Faça o carro encher.
carro.lotacao (3);

// Tire 4 pessoas do carro.

carro.desce = function (passageiros) {
carro.ocupacao -= passageiros ; 
return carro.ocupacao ;
}

carro.desce (4)

// Adicione 10 pessoas no carro.
carro.lotacao (10)

// Quantas pessoas temos no carro?
carro.ocupacao //1
```
