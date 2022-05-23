let mario = document.getElementById("mario");
let gul=document.getElementById("gul");
function jump() {
    if (mario.classList != "jump") {
        mario.classList.add("jump");

        mario.classList.add("jump");
        setTimeout(function () {
            mario.classList.remove("jump");
        }, 300)
    }
}
let isAlive=setInterval(function(){
   
let marioTop=parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
let gulLeft=parseInt(window.getComputedStyle(gul).getPropertyValue("left"));

if (gulLeft<50 && gulLeft>10 && marioTop>=150){
    alert(' GAME OVER ')
}
},30)

document.addEventListener("keydown", function (event) {
    jump();

});