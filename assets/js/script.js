const pacman = document.getElementById("pacman");
const eye = document.querySelector("#pacman img");
pacman.style.overflow = "hidden";
eye.src ="./assets/img/eye.png";
eye.alt = "oeil de pacman";
eye.width = 50
//information de pacman à sa position d'origine
console.dir(pacman);
let posLeft = 0;
let posUp = 0;

function bruitPorte(){
    //console.log("son");
    const mp3 = new Audio("./assets/audio/DOORWood_Porte qui claque 4 (ID 1501)_LS.mp3");
    mp3.play();
}

document.body.addEventListener(
    "keyup",
    function (event) {

        //console.dir(event);
        //"ArrowLeft" "ArrowRight" "ArrowUp" "ArrowDown" => event.code

        switch (event.code) {
            case "ArrowLeft":
                //console.log("touche left");
                if (pacman.offsetLeft >0) {
                    posLeft = pacman.offsetLeft - 50;
                    pacman.style.left = posLeft + "px";
                }else{bruitPorte();}
                break;
            case "ArrowRight":
                //console.log("touche right");
                //console.log(pacman.offsetLeft);
                if (pacman.offsetLeft <350) {
                    posLeft = pacman.offsetLeft + 50;
                    pacman.style.left = posLeft + "px";
                }else{bruitPorte();}
                //information de pacman à sa position après déplacement
                //console.dir(pacman);
                break;
            case "ArrowUp":
                //console.log("touche up");
                if (pacman.offsetTop >0) {
                    posTop = pacman.offsetTop - 50;
                    pacman.style.top = posTop + "px";
                }else{bruitPorte();}
                break;
            case "ArrowDown":
                //console.log("touche down");
                if (pacman.offsetTop <550) {
                    posTop = pacman.offsetTop + 50;
                    pacman.style.top = posTop + "px";
                }else{bruitPorte();}
                break;
            default:
                break;
        }
    }
);