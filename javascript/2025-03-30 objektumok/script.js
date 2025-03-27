


const auto = {
    rendszam: "HH-II-125",
    tulaj: "Kis Pista",
    km: 12345,
    szin: "zold"

}
const auto2 = {
    rendszam: "HH-II-126",
    tulaj: "Kis Juli",
    km: 12345,
    szin: "piros"

}
auto.tulja = "Pista Kis"
console.log(auto);
console.log(auto2);
auto2.tulajlanykorineve = "Nagy Juli";

const autosok = [];
autosok.push(auto);
autosok.push(auto2);
console.table(autosok);

const diakok = [
    {
        om: "234223133",
        nev: "Jani",
        // haviAtlagok: [4.6, 4.4, 3.8, 4.0, 2.4, 4.9, 2.6, 3.9, 4.6]
        tantargy:{
            matmatika : 4.6,
            irodalom : 4.9,
            tortenelem : 3.1
        }
    },
    {
        om: "23422312336",
        nev: "Csilla",
        // haviAtlagok: [2.4, 4.9, 2.6, 3.9, 4.6, 4.9, 2.6, 3.9, 4.4]
        tantargy:{
            matematika : 4.3,
            irodalom : 4.0,
            tortenelem : 3.7
        },
        // emailgen : function(tt){
        //     return this.tantargy[tt];
        // }
        emailgen : function()
        {
            const om = this.om;
            const n = this.nev;
            return n[0]+n[1]+n[2]+n[0]+n[1]+n[2] + "@valami.hu"
        }
    }
]
// let ossz;
// for (let i = 0; i < diakok.length; i++) {
//     ossz = 0;
//     for (let j = 0; j < diakok[i].haviAtlagok.length; j++) {
//         ossz += diakok[i].haviAtlagok[j]
//     }
//     console.log( ossz / diakok[i].haviAtlagok.length);
// }

console.log(diakok[1].emailgen());





