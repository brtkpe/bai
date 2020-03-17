// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let pole = () => {

    /* Wzor herona
    p = (a+b+c)/2
    P = p * sqrt((p-a)(p-b)(p-c))
    */

    let p = (a + b + c) / 2;
    let p_trojkata = p * Math.sqrt((p - a) * (p - b) * (p - c));

    return `pole trojkata o bokach ${a}, ${b} oraz ${c} wynosi: ${p_trojkata}`;
}
console.log(pole());