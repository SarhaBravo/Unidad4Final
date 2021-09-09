window.onload = init;

function init() {
    var sound = new Howl ({
        src: ["../asserts/audios/sound.mp3"],
    });

    var playMusic = document.getElementById("playMusic");

    playMusic.addEventListener("click", function(){
        sound.play();
    })
}
