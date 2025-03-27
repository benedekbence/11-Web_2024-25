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

function main(szoveg){
    const darabolt =  szovegdarab(szoveg, ";");
    

    let objectlista = adatokszortir(darabolt);
    console.table(objectlista);
}
main(szoveg);