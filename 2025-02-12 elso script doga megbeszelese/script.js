console.log("Kapcsolat");


// haromszog szerkesztesi lehetosege (barmely ket oldal > a harmadiknal)
var a = 5;
var b = 2;
var c = 7;

if(a+b > c && a+c > b && b+c > a){
    console.log("1) lehet")
}
else{
    console.log("1) nem lehet")
}
// ora : perc : masodperc
var masodperc = 7385;

var ora = Math.floor(masodperc / 3600);
var perc = Math.floor((masodperc - ora * 3600) / 60);
var sec = (masodperc-ora*3600) - perc * 60;

console.log(`2) ${ora}óra : ${perc}perc : ${sec}másdoperc`)


// szokoz nelkul kiiratni

var szoveg = "gezus kek az eg";
var szoveg1 = "";

for(let i = 0; i < szoveg.length; i++){
    if(szoveg[i] != " "){
        szoveg1+=szoveg[i];
    }    
}

console.log("3) " + szoveg1)

//tomb <-- randommal

var tomb = [];
for(let i = 0; i < szoveg.length; i++){
    let rnd = Math.floor(Math.random() * 21 - 10);
    tomb.push(rnd)
}

// maximum szam kivalasztasa

var maxi = 0;
for(let i = 0; i < tomb.length; i++){
    if(tomb[i] > tomb[maxi])
        maxi = i;
}

console.log("legnagyobb random szam indexe: " + (maxi+1));