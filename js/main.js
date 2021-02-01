// Timer réglé sur 20 min. TODO : innerhtml page défaite si arrivé à zero.
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

function launchgame() {
    var fiveMinutes = 60 * 20,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    
    // initialisation du projet coté egnime 3
    let b = document.getElementById('debut');
    b.innerHTML=' ';
    b.innerHTML="<button type='button' onclick='changeHTML()' class='btn btn-secondary btn-lg launchbutton'>Deverouiller l'énigme 3</button>";
}

function changeHTML(){
    let a = document.getElementById('debut');
    console.log('QZLJ');
    a.innerHTML=' ';  

    a.innerHTML="<p class='texte_egnime_3'>Il vous faudra visiter le campus pour trouver la salle en face de Superman et de noté son chiffre dans un coin de vôtre tête.</br>A noté qu'une chose c'est passé dans cette page, il se trouve dans l'outils du navigateur préféré des développeurs web</p>";
};

