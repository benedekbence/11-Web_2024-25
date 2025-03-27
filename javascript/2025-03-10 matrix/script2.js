
function randomszam(szam1, szam2) {
    return Math.floor(Math.random() * (szam2 - szam1) + szam1);
}

function tombfeltolt(n, m) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let sor = [];
        for (let j = 0; j < m; j++) {
            if (randomszam(0, 10) > 7) {
                sor.push(randomszam(10, 99));
            } else {
                sor.push(0);
            }
        }
        matrix.push(sor);
    }
    return matrix;
}

function maximum(matrix, n, m) {
    let maxi = 0;
    let maxj = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][maxj] < matrix[i][j]) {
                maxj = j;
                maxi = i;
            }
        }
    }
    return matrix[maxi][maxj];
}

function hanydarab(matrix, szam) {
    let db = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                db++;
            }
        }
    }
    return  db;
}

function vanehetesosztas(matrix){
    let i = 0;
    let j;
    let igaze = false;
    
    while (i < matrix.length && !igaze) {
        j = 0;
        while(j < matrix[i].length && !((matrix[i][j] >=10) && (matrix[i][j] % 7 === 0 ))){
            j++;
        }
        if (j < matrix[i].length) {
            igaze = true;
        }
        i++;
}

    if (j < matrix[i].length) {
        return "van es ezek az indexei " + [i+1,j+1]
    }
    else return "nincsen ilyen szam"

}
function nszernmatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let sor = [];
        for (let j = 0; j < n; j++) {
            sor.push(randomszam(0,10))
        }
        matrix.push(sor);
    }
    return matrix;
}

function atlosatlag(matrix){
    let osszeg1 = 0;
    let osszeg2 = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        osszeg1 += matrix[i][i]
    }

    for (let i = 0; i < matrix.length; i++) {
        osszeg2 += matrix[i][matrix.length - i - 1]
    }
    return  osszeg1 - osszeg2;

    
    
}

function transz(matrix){
    let tmatrix = matrix;
    for (let i = 0; i < matrix.length; i+=2) {
        for (let j = 0; j < matrix[i].length; j++) {
            tmatrix[j][i] = matrix[i][j];
        }
    }
    return tmatrix;
}

function main() {
    let n = randomszam(5, 20);
    let m = randomszam(5, 20);

    let matrix = tombfeltolt(n, m);
    console.table(matrix);

    console.log("\n-----------------------------------------------\n")

    let maxiszam = maximum(matrix, n, m);
    console.log(maxiszam);
    let db = hanydarab(matrix, 0);
    console.log(db);
    console.log(vanehetesosztas(matrix));
    let miau = nszernmatrix(7);
    console.table(miau)
    console.log(atlosatlag(miau));

    let transzponalas = transz(miau);
    console.table(transzponalas )
}
main()