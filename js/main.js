// Timer réglé sur 20 min. TODO : innerhtml page défaite si arrivé à zero.
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            timer = 0;
            window.alert('Le temps est écoulé, vous allez être noté absent !')
            setTimeout('document.location.reload();', 500);
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


// Si juste envoie à l'énigme 7
function result_enigme6() {
    let result = document.getElementById('input6').value;
    if (result == 2) {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        a.innerHTML = "<div class='row'> <object data='https://my.web-visite.com/F1Lbov98B1/29545100p&4.86h&84.47t' id='WebVisiteYnov' type='text/html' width='100%' height='400'></object> <div class='col énoncé text - center'> <h3>Enigme numéro : 7 </h3> <p>Il serait peut etre temps que prendre son envol. Pour ce faire il faudrait retrouver ses tickets. On fait référence a la convention de Varsovie. Mais de quel article ?</p> <p id='messagereponse'></p> <input type='text'> <button type='button' onclick='checkEnigme7()'>Soumettre</button> <button type='button' onclick='enigme7Hint()'>indice</button> </div> </div> <div class='row'> <div class='col text - center launch - button'> <button type='button' onclick='launchgame()' class='btn btn - secondary btn - lg launchbutton'>Commencer</button> </div> </div> ";
    }
    else {
        window.alert('Mauvaise Réponse, essaye encore ! ');
    }
}
// Si juste envoie à l'énigme 9
function result_enigme8() {
    let result = document.getElementById('input8').value;
    if (result == 'Noire') {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        a.innerHTML = "<div class='divchange' id='divchange'> <div class='row'> <iframe id='inlineFrameExample' title='Inline Frame Example' width='100 % ' height='500' src='https://my.web-visite.com/F1Lbov98B1/29545100p&357.50h&90.90t'> </iframe> </div> <div class='row'> <div class='text-center'> <p>Où se trouve le flamant rose en peluche dans l'administration ?</p> </div> </div> <div class='row text-center'> <div class='col-3'> <button type='button' onclick='result_enigme9F()' class='btn btn-secondary btn-lg '>Bureau de Vanille</button> </div> <div class='col-3'> <button type='button' onclick='result_enigme9V()' class='btn btn-secondary btn-lg '>Bureau de Stéphanie</button> </div> <div class='col-3'> <button type='button' onclick='result_enigme9F()' class='btn btn-secondary btn-lg '>Dans le hall d'entrée</button> </div> <div class='col-3'> <button type='button' onclick='result_enigme9F()' class='btn btn-secondary btn-lg '>Dans la salle de réunion</button> </div> </div> </div>";
    }
    else {
        window.alert('Mauvaise Réponse, essaye encore !');
    }
}

// 2 fonctions pour la résolvation de l'enigme 9 amenant à la 10
function result_enigme9F() {
    window.alert('Mauvaise Réponse, essaye encore !');
}

function result_enigme9V() {
    let a = document.getElementById('divchange');
    a.innerHTML = ' ';
    a.innerHTML = "<div class='divchange' id='divchange'> <div class='row'> <iframe id='inlineFrameExample' title='Inline Frame Example' width='100 % ' height='500' src='https://my.web-visite.com/F1Lbov98B1/29545100p&357.50h&90.90t'> </iframe> </div> <div class='row'> <div class='text-center'> <p>Quel est le numéro de l'extincteur dans le couloir de l'administration ?</p> </div> </div> <div class='row'> <div class='col text-center mx-auto d-block'> <input type='text' id='input10' class=' w-25 text-center'> <button type='button' onclick='result_enigme10()' class='btn btn-secondary btn-lg '>Envoyer !</button> </div> </div> </div>";
}

// Derniere enigme
function result_enigme10() {
    let result = document.getElementById('input10').value;
    if (result == 12) {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        a.innerHTML = "<div class='divchange' id='divchange'> <div class='row'> <div class='text - center'> <p>Veuillez entrer le code JSEC afin de justifier votre présence au cours :</p> </div> </div> <div class='row'> <div class='col text - center mx - auto d - block'> <input type='text' id='inputEnd' class=' w - 25 text - center'> <button type='button' onclick='result_end()' class='btn btn - secondary btn - lg '>Envoyer !</button> </div> </div> </div> ";
    }
    else {
        window.alert('Mauvaise Réponse, essaye encore !');
    }
}

function result_end() {
    let result = document.getElementById('inputEnd').value;
    if (result == 24012) {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        //<faire une nouvelle page pour stopper le compteur
        location.href = 'www.apple.com';
    }
    else {
        window.alert('Mauvaise Réponse, essaye encore !');
    }
}
    


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
