let gameseq = [];
let userseq = [];
let btn = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
    let randomindex = Math.floor(Math.random() * btn.length);
    let randomcolour = btn[randomindex];
    let randombtn = document.querySelector(`.${randomcolour}`);
    gameseq.push(randomcolour);
    console.log(gameseq);
    btnflash(randombtn);
    
}
function anscheck(indx){
    // console.log("curr level", level);
    if(userseq[indx]===gameseq[indx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over! <b>Score: ${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.color="white";
        },1000);
        reset();
    }
}
function btnpress(){
    console.log(this);
    let btn =this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    //console.log(usercolor);
    userseq.push(usercolor);
    anscheck(userseq.length-1);


}
let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}