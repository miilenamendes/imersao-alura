var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")


var valorEmDolarNumero = parseFloat(valorEmDolarTexto)


var valorEmReal = valorEmDolarNumero * 5.65
var valorEmRealDecimal = valorEmReal.toFixed(2)



alert(valorEmRealDecimal)