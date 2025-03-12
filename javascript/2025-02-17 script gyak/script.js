console.log("Kapcsolat")
var adatok = ["bela", 4.6, 1234, "csilla", 4.7,748, "jozsi", 3.5, 938, "jani", 3.87, 1473, "kata", 4.3, 1002]

var atlagok = [];
for (let i = 1; i < adatok.length; i += 3) {
    atlagok.push(adatok[i]);
}

for (let i = 0; i < atlagok.length; i ++) {
    let mini = i;
    for (let j = mini; j < atlagok.length; j ++) {
        if(atlagok[j] < atlagok[mini]){
            // mini = j;
            let csere = atlagok[j];
            atlagok[j] = atlagok[mini];
            atlagok[mini] = csere
        }
    }
}
console.log(atlagok);





var ossz = 0;
var db = 0;
var van = false;
for (let i = 1; i < adatok.length; i += 3) {
    db++;
    ossz += adatok[i];
}

var van = false;
var i = 1;
while(i<adatok.length && (adatok[i] !== 5)){
    i+=3;
}
if(i<adatok.length){
    van = true;
}

var maxi = 1;
for (let i = 1; i < adatok.length; i += 3) {
    if(adatok[i] >adatok[maxi] ){
        maxi = i
    }
}

var mini = 2;
for (let i = 5; i < adatok.length; i += 3) {
    if(adatok[i] < adatok[mini] ){
        mini = i
    }
}

var tanulok = 0;
for (let i = 2; i < adatok.length; i += 3) {
    if(adatok[i] < 1000)
        tanulok++;
}

//1
console.log("ossz atlag: " + (ossz / db));
//2
console.log("van e kituno tanulo: " + van);
//3
console.log("legjobb tanulo: " + adatok[maxi-1]);
//4
console.log("legkevesebbet hianyzott faszarc: " + adatok[mini-2]);
//5
console.log("1000 alatt: " + tanulok)



