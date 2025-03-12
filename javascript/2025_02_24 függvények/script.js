//let a;
function ertekekMegadasa(){
    let a = 13;
    let b = 19;
    console.log(`${a}, ${b}`);
}

function randomSzam(a , b){
    if(b<a){
        let c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random()*(b-a+1)+a);
}

function tombgeneralas(n){
    var tomb = [];
    for(let i = 0 ; i < n ; i++){
        tomb.push(randomSzam(-10,10));
    }
    return tomb;
}

function atlagszamit(tomb){
    let ossz = 0;
    for(let i = 0 ; i < tomb.length ; i++){
        ossz += tomb[i]
    }
    return ossz / tomb.length;
}

function maximum(tomb){
    let maxi = tomb[0];
    for(let i = 0 ; i < tomb.length ; i++){
        if(tomb[maxi] < tomb[i]){
            maxi = i;
        }
    }
    return maxi + 1;
}

function nullavane(tomb){
    let i = 0;
    let n = tomb.length;
    while(i<n && !(tomb[i] == 0)){
        i++;
    }
    return i<n;
}

function csere(mini,j,tomb){
    let seged = tomb[mini];
    tomb[mini] = tomb[j];
    tomb[j] =  seged;
}

function rendezes(tomb){
    for(let i = 0 ; i < tomb.length ; i++){
        let mini = i;
        for(let j = mini ; i < tomb.length ; i++){
            if(tomb[mini] > tomb[j]){
                mini = j;
            }
        }
        csere(mini,j,tomb)
    }
    
}

// fv - tört, logikai, egész-index, stb
function main(){
    console.log("Függvény belső magja");
    ertekekMegadasa();   
    // Tömbfeltöltés - visszaadja a feltöltött tömböt
    let tomb = tombgeneralas(13)
    let rnd = randomSzam(-10,10); 
    console.log(rnd);
    console.log(tomb);
    let atlag = atlagszamit(tomb)
    console.log(atlag)

    let maxi = maximum(tomb)
    console.log(maxi)

    let vane = nullavane(tomb);
    console.log(vane)

    rendezes(tomb)
    console.log(tomb)
}

main();