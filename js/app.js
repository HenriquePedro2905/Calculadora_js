var total = 0;

function soma(valor){
    return total += valor;
}

function subtracao(valor){
    return total -= valor;
}

function multiplicacao(valor){
    return total *= valor;
}

function divisao(valor){
    return total /= valor;
}

function exponentiation(valor){
    return total **= (valor);
}

function radia(expoente){
    return total **= (1/expoente);
}


function log(){
    return total = Math.log10(total);
}

function clean(){
    return total = 0;
}

function ope(){
    total = 0;
    console.log('soma 9 ' + soma(9));
    console.log('sub 9 ' + subtracao(9));
    console.log('mult 2 ' + multiplicacao(2));
    console.log('div 2 ' + divisao(2));
    console.log('expo 2 ' + exponentiation(2));
    console.log("radia 64 " + radia(64))
}