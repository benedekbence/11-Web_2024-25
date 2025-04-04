// console.log(adatok);

function szovegdarab(szoveg , kar1 ){
    let darabolt = [];
    let text = "";
    for (let i = 0; i < szoveg.length; i++) {
        text += szoveg[i];
        if(szoveg[i] == kar1 ){
            darabolt.push(text);
            text = "";
        }
    }
    darabolt.push(text);
    return darabolt;
}

// function Szovegfeldolgoz(szoveg){
//     let darabolt = szovegdarab(szoveg, ";");
//     console.log(darabolt)
// }
function adatokszortir(darabolt){
    let jeloltekadat = [];
    for (let i = 0; i < darabolt.length; i++) {
        let adatok = szovegdarab(darabolt[i], " ")
        jeloltekadat.push = ({
            kerulet : adatok[0],
            szavdarab : adatok[1],
            kepviseloker : adatok[2],
            kepviselovez : adatok[3],
            adatok : adatok[4]
            
        })
    }
    return jeloltekadat;
}

function f3(lista){
    let vezetek = "Valaki";
    let kereszt = "Valami";

    
    let i = 0;
    while (i< lista.length && !(vezetek === lista[i].kepviselovez && kereszt === lista[i].kepviseloker)) {
        i++;
    }
    if (i < lista.length) {
        console.log(lista[i].szavdarab);
    }
    else console.log("nincs ilyen kepviselo");
}

function arany(ossz,n){
    
    return (n / ossz).toFixed(2);
}

function f4(lista,n){
    let ossz = 0;
    for (let i = 0; i < lista.length; i++) {
        ossz += lista[i].szavdarab;
    }
    console.log("ennyi az arany" + arany(ossz, n));

}
function f5(lista,n){
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].adatok != "-") {
            console.log(lista[i].adatok + "" + arany(lista[i].szavdarab,n) );
        }
        
    }
}

function main(szoveg){
    const n = 12345;
    const darabolt =  szovegdarab(szoveg, ";");
    

    let objectlista = adatokszortir(darabolt);
    console.table(objectlista);

    f3(objectlista);
    
    f4(objectlista,n);

    f5(objectlista, n)
}