function randomszam() {
    let rand = Math.floor(Math.random() * 2);
    return rand;
}

function hanydarab(matrix, szam) {
    let db = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == szam) {
                db++;
            }
        }
    }
    return db;
}

function matrixfeltolt(sor, oszlop) {
    let matrix = [];
    for (let i = 0; i < sor; i++) {
        let st = [];
        for (let j = 0; j < oszlop; j++) {
            st.push(randomszam());
        }
        matrix.push(st);
    }
    return matrix;
}
function maxi1 (lista){
    let maxi = 0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[maxi] < lista[i]){
            maxi = i;
        }
    }
    return maxi;
}

function melyiklegtobb(matrix) {
    let lista = [];
    for (let i = 0; i < matrix.length; i++) {
        let db = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 1){
                db ++;
            }
        }
        lista.push(db)
    }
    return maxi1(lista);
}

function main() {
    // let matrix = [[]];

    // matrix.push = [2,2,4,6,1];
    // console.log(matrix);

    let matrix = matrixfeltolt(10, 11);
    console.table(matrix);
    console.log(hanydarab(matrix, 1));
    const index = melyiklegtobb(matrix);
    console.log(index + 1);
    
}
main();