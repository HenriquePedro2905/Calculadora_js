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
    return total **= valor;
}

function radia(valor, expoente){
    total = valor ** (1/expoente);
    return total;
}

function calculate(valor, a, number){
    let b = true;

    while(b){
        b = (valor >= (10 ** a))
        if(b){
            a += number;
        }
    }
    a -= number;
    return a;
}

function log(valor){
    let a = 0;

    a = calculate(valor, a, 1);
    a = calculate(valor, a, 0.1);
    a = calculate(valor, a, 0.01);
    a = calculate(valor, a, 0.001);
    a = calculate(valor, a, 0.001);
    return Number(a.toFixed(4))
}

function ope(){
    total = 0;
    // console.log('soma 9 ' + soma(9));
    // console.log('sub 9 ' + subtracao(9));
    // console.log('mult 2 ' + multiplicacao(2));
    // console.log('div 2 ' + divisao(2));
    // console.log('expo 2 ' + exponentiation(2));
    console.log("radia 64 " + radia(64))
}