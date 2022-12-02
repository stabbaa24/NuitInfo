'use strict';
let message = 'JavaScript is ok :)';
console.log(message);

function onLoad() {
    console.log( 'In onLoad() function…');
    hadSex()
}

function hadSex() {
    let i = 1;
    let img;
    let score = document.getElementById('score');
    console.log(i);
    document.getElementById('sex').addEventListener('click', async function (e) {
        img = document.getElementById("sex");

        if (i != 50) {
            if(i%2==0) {
                img.src = "../img/forbid.png";
                score.innerText = i;
                let audio = new Audio("../music/sound.mp3");
                audio.oncanplaythrough = function(){
                    audio.play();
                }

                audio.onended = function(){
                    audio.pause();
                }
            }

            else {
                img.src = "../img/bed.png";
                score.innerText = i;
            }
            i = i + 1;
        } else {
            let audio = new Audio("../music/succes.mp3");
            audio.oncanplaythrough = function(){
                audio.play();
            }

            audio.onended = function(){
                audio.pause();
            }

            document.getElementById("popUp").style.display = "block";
        }

    });

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



