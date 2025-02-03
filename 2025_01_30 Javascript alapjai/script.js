console.log("kapcsolat");

var a = 12;
var s = "13";
var sz = '15';
var b = true;

console.log(a);
console.log(s);
console.log(sz);
console.log(b);

// matematikai operátorok: +-*/%
// logikai operátorok: && || 
// bitenkénti operátorok: & | ^
// szöveges operátor: konkatenálás-összefűzés +

console.log(s + b);
console.log(a + b); //true 1, false 0
console.log(a === s); // == értékvizsgálat, === érték+típus vizsgálat
console.log(a + s);
console.log(a + parseInt(s));

// vezerlo szerkezet
//  Szekvencia - utasitasok sorozata
//  Szelekcio - elagazas(ok)
//  Iteráció - ciklus(ok)

/*Elágazás*/

if (a === s) {
    console.log(`${a} =? ${s} A két érték egyenlő!`)
}
else {
    console.log(`${a} =? ${s} A két érték nem egyenlő!`)
}

// switch (a){
//     case 1: console.log("valami1")
// }

// Ciklus

// Számlálós - for
// elöl tesztelős - while
// hatul tesztelos - do while

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i);
var j = 100;
while (j < 110) {
    console.log(j);
    j++;
}

var k = 0;
var szamok = "";
do {
    k++;
    szamok += k + " ";
} while (k < 1010) 
    console.log(szamok);
    