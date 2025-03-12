console.log("Kapcsolat");

// general ki addig ket jegyu weletlen szamokat ameddig 13 -al osztahato szamot nem kap

// a szamokat egymas melle irva jelenitse meg
// [10,100]
var szamok = "";
var rand;
do {
    rand = Math.random() * (99-10 + 1) + 10;
    szamok += Math.floor(rand) + " ";
} while (rand % 13 != 0);

console.log(szamok);

// let tomb = new Array();
let tomb = [];

tomb.push(5);

console.log(tomb);

console.log(`az elso elem: ${tomb[0]}` );
console.log(`lista hossza: ${tomb.length}`);
console.log(`tomb utso eleme: ${tomb[tomb.length-1]}`);

tomb[21] = 32;
// console.log(tomb);
// console.log(tomb.Length);

// console.log(parsInt("alma"));

console.log(typeof(21));
console.log(isNaN(parseInt("alma")));

let b;
console.log(typeof(b));

let tomb2 = [2,"alma", 3, " korte", true, "ballz", false];
console.log(tomb2);




// for (let i=0; i < tomb.length; i++)
//     console.log(i);