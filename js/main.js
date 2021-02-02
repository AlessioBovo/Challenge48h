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
    let a = document.getElementById('divchange'); 
    a.innerHTML=' ';
    a.innerHTML="<div class='divchange'><div class='row'><div class='col énoncé top_less text-center'><p>Vous êtes bloqués dans le campus car un méchant vous empêche d'en sortir, cause ? </br> Absence non justifiée en attente !  </p></div></div><div class='row'><div class='col énoncé text-center' id='go_down'><p>Afin de trouver son identité, le méchant vous à donner une piste...  </br></br>48,77,71,6e,20,43,65,77,6a,65,6a,61,70</br></br>Résolvez cette piste et vous serez un Hexample ! </p></div></div><div class='row col'><p class='text-center text_enigme2 box'><input type='text' id='rep-01'></input></p><div class='col text-center launch-button'><button type='button' onclick='change_ENIGME_1()' class='btn btn-secondary btn-lg'>Valider</button></div></div></div>";
    console.log("prend en compte")
};


function change_ENIGME_1(){ 
    let a = document.getElementById('divchange');
    let rep1 = document.getElementById("rep-01");
    if (rep1.value == "Hwqna Cewjejappe" ){
        a.innerHTML=' ';
        a.innerHTML="<div class='enigme2' id='enigme2'> <div class='row'> <div class='col-12'> <p class='text-center text_enigme2 box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text_enigme2 énoncé box'>Mais !? Ca ne veut rien dire 'Hwqna Cewjejappe'?</br>mais... avec cette clé un empire vous créerez ! Son décalage se trouve dans le 'Challenge 48h' </p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text_enigme2 box'><input type='text' id='rep-02'></input> </p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='change_ENIGME_2();'>Continuer</button> </div></div></div></div>"; 
    } else {
    alert("Mauvaise réponse. Dommage !")
    }
};

function change_ENIGME_2(){
    let a = document.getElementById('divchange');
    let rep1 = document.getElementById("rep-02");
    rep1 = rep1.toLowerCase();
    if (rep1.value == "laure gianinetti"){
        a.innerHTML=' ';
        a.innerHTML="<div class='enigme2 énoncé' id='enigme2'> <div class='row'> <div class='col-12'> <p class='text-center text_enigme2 box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text_enigme2 énoncé box'>Mais !? Ca ne veut rien dire 'Hwqna Cewjejappe'?</br>mais... avec cette clé un empire vous créerez ! Son décalage se trouve dans le 'Challenge 48h' </p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text_enigme2 box'><input type='text' id='reponse_enigme2'></input> </p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='change_enigme_3();'>Continuer</button> </div></div></div></div>"; 
    } else {
    alert("Mauvaise réponse. Dommage !")
    }

};
