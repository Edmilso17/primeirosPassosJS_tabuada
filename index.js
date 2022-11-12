let numeroDigitado = prompt ('Tabuada do numero:');

let multiplicando = 0;
let multiplicador = 1;

let produto = `Tabuada do: ${numeroDigitado}\n`;

while (multiplicando < 10){
    multiplicando = multiplicando + 1;
    multiplicador = numeroDigitado * multiplicando;
    produto = `${produto} \n ${numeroDigitado} x ${multiplicando} = ${multiplicador}`;
}

alert(produto);