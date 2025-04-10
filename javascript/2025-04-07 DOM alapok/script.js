
function elsoora(){
    let foDiv = document.getElementById("foDiv")
    document.body.style.backgroundColor = "darkblue";
    foDiv.style.backgroundColor = "black";
    foDiv.style.color = "white";
    foDiv.style.width = "200px";
    
    let lorembekezd = document.getElementById("loremp");
    console.log(lorembekezd);

    const szoveg = lorembekezd.innerHTML;
    lorembekezd.innerHTML = "ez egy <br>bekezdes";
    // lorembekezd.innerText = "ez egy <br>bekezdes";
}
function keretezes(){
    let borderesek = document.querySelectorAll(".border");
    console.log(borderesek);
    for (let i = 0; i < borderesek.length; i++) {
        borderesek[i].style.borderTop = "1px solid white"
        borderesek[i].style.borderLeft = "3px dashed green"
        borderesek[i].style.borderbottom = "6px solid red"
        
    }
}
function masodikora(){
    // let div = document.querySelector("div");
    // div.style.backgroundColor = "green";
    let divek = document.querySelectorAll("div");
    console.log(divek);


    for (let i = 0; i < divek.length; i++) {
        divek[i].style.margin = "auto";
        divek[i].style.width = "50%";
        divek[i].style.backgroundColor = "yellow"
        divek[i].style.color = "black"
        divek[i].style.borderRadius = "10px"
    }
    let img = document.querySelector("img")
    document.querySelector("#foDiv").style.padding = "10px";
    img.title = "ceca";
    img.ertek = "értek";
    console.log(img);
    
    

    
}
function masodfoku(){
    let a = document.getElementById("aSzam");
    let b = document.getElementById("bSzam");
    let c = document.getElementById("cSzam");

    

}
function Belepes(){
    let inputok = document.querySelectorAll("input");
    for (let i = 0; i < inputok.length; i++) {
        console.log(inputok[i].value);
    }
}



function main(){
    elsoora();
    masodikora();




}
main();