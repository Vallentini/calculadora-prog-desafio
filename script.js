/**Adicionar as entradas: números, operadores e limpar o histórico*/

var entradaNum = document.querySelector("#display");
var operador = "";
var parar = false;
/*função para apagar o histórico: se as entradas forem vazias ou seja, não for add um novo número para uma nova operação, e o usúario clicar no button "AC" onde o id="hystory", o calculo feito e o histórico da conta será apagado*/
function apagarhistorico() {
  entradaNum.value = "";
  document.querySelector("#history").innerHTML = "";
  operador = "";
}
/*função para add o número como uma string */
function numero(string) {
  if (!parar) {
    if (string === '.' && entradaNum.value.indexOf(".") === -1 || string !== '.') {
      entradaNum.value = entradaNum.value + string;
      history.value = entradaNum.value;
    }
  } else {
    if (string === '.' && entradaNum.value.indexOf(".") === -1 || string !== '.') {
      entradaNum.value = "";
      parar = false;
      document.querySelector("#history").innerHTML = "";
      operador = "";

      entradaNum.value = entradaNum.value + string;
    }
  }
}
/*Funçaõ add o operador ao lado da primeira string, não o deixando em cima do número. */
function operador(opera) {
  if (entradaNum.value == "") {
    entradaNum.value = "0";
  }

  if (operador == "") {
    operador = opera;
    entradaNum.value = entradaNum.value + opera;
  } else {
    totaldaconta()
    entradaNum.value = entradaNum.value + opera;
    operador = opera;
    parar=false;
  }
}
/*função para resolver a operção, no primeiro if é para igualar a entrada do usúario, no segundo if é caso for diferente de parar e a string for igual a nulo a string será == 0, então temos o histórico que será apresentado. Por fim o switch case onde resolvera as operações*/
function totaldaconta() {
  if (!parar) {
    numeros = entradaNum.value.split(operador);

    if (numeros[1] == "") {
      entradaNum.value = entradaNum.value + '0';
      numeros[1] = 0;

    }

    document.querySelector("#history").innerHTML = entradaNum.value;

    switch (operador) {
      case "+":
        entradaNum.value = Number(numeros[0]) + Number(numeros[1]);
        break;

      case "-":
        entradaNum.value = numeros[0] - numeros[1];
        break;

      case "*":
        entradaNum.value = numeros[0] * numeros[1];
        break;

      case "/":
        entradaNum.value = numeros[0] / numeros[1];
        break;
    }

    parar = true;
  }
}
