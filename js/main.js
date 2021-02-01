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
}

// Si juste envoie à l'énigme 7
function result_enigme6() {
    let result = document.getElementById('input6').value;
    if (result == 2) {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        a.innerHTML = '<p>Samir</p> ';
    }
    else {
        window.alert('Faux');
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
        window.alert('Faux');
    }
}

// 2 fonctions pour la résolvation de l'enigme 9 amenant à la 10
function result_enigme9F() {
    window.alert('Mauvaise Réponse, essaye encore !');
}

function result_enigme9V() {
    let a = document.getElementById('divchange');
    a.innerHTML = ' ';
    a.innerHTML = "<div class='divchange' id='divchange'> <div class='row'> <iframe id='inlineFrameExample' title='Inline Frame Example' width='100%' height='500' src='https://my.web-visite.com/F1Lbov98B1/29545100p&357.50h&90.90t'> </iframe> </div> <div class='row'> <div class='text-center'> <p>Quel est le numéro de l'extincteur dans le couloir de l'administration ?</p> </div> </div> <div class='row'> <div class='col text-center mx-auto d-block'> <input type='text' id='input10' class=' w-25 text-center'> <button type='button' onclick='result_enigme10()' class='btn btn-secondary btn-lg '>Envoyer !</button> </div> </div> </div>";
}

// Derniere enigme
function result_enigme10() {
    let result = document.getElementById('input10').value;
    if (result == 12) {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        a.innerHTML = "<div class='divchange' id='divchange'> <div class='row'> <div class='text-center'> <p>Veuillez entrer le code JSEC afin de justifier votre présence au cours :</p> </div> </div> <div class='row'> <div class='col text-center mx-auto d-block'> <input type='text' id='inputEnd' class=' w-25 text-center'> <button type='button' onclick='result_end()' class='btn btn-secondary btn-lg '>Envoyer !</button> </div> </div> </div> ";
    }
    else {
        window.alert('Faux');
    }
}

function result_end() {
    let result = document.getElementById('inputEnd').value;
    if (result == 24012) {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        //<faire une nouvelle page pour stopper le compteur
        location.href = 'www.apple.com';
        a.innerHTML = '<p>Message de fin</p> ';
    }
    else {
        window.alert('Faux');
    }
}

