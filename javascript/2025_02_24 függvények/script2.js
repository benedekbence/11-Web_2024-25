
function rand(a,b){
    if(a > b){
        let seged = a;
        b = a;
        a = seged;
    }
    return Math.floor(Math.random() * (b-a+1) + a);
}

function tombfeltolt(n){
    let tomb = [];
    for(let i  = 0; i < n; i++){
        tomb.push(rand(10,120) * 50);
    }
    return tomb;
}

function maximum(tomb){
    let maxe = tomb[0];
    for(let i  = 1; i < tomb.length; i++){
        if(maxe < tomb[i]){
            maxe = tomb[i]
        }
    }
    return maxe;
}

function vane(tomb){
    let i = 1;
    while(i < tomb.length-1 && !(tomb[i] > 1000 && tomb[i] > tomb[i-1] && tomb[i] > tomb[i+1])){
        i++;
    }
    return i < tomb.length;
}

function main (){
    let tomb = tombfeltolt(13);
    console.log(tomb);
    let max = maximum(tomb);
    console.log(max)

    let van = vane(tomb);
    console.log(van)
    
}
main();
