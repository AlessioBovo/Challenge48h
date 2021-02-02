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
};

function showHideYnovWebVisite()
{
    let frameWebVisite;
    frameWebVisite = document.getElementById('WebVisiteYnov');
    console.log(frameWebVisite);
    frameWebVisite.style.display == 'block' ? frameWebVisite.style.display = 'none' : frameWebVisite.style.display = 'block';
    console.log('done');
}

function change_enigme7()
{
    let id = document.getElementById('divchange')
    id.innerHTML() = '<div class="row"> <object data="https://my.web-visite.com/F1Lbov98B1/29545100p&4.86h&84.47t" id="WebVisiteYnov" type="text/html" width="100%" height="400"></object> <div class="col énoncé text-center"> <h3>Enigme numéro : 7 </h3> <p>Il serait peut etre temps que prendre son envol. Pour ce faire il faudrait retrouver ses tickets. On fait référence a la convention de Varsovie. Mais de quel article ?</p> <p id="messagereponse"></p> <input type="text"> <button type="button" onclick="checkEnigme7()">Soumettre</button> <button type="button" onclick="enigme7Hint()">indice</button> </div> </div> <div class="row"> <div class="col text-center launch-button"> <button type="button" onclick="launchgame()" class="btn btn-secondary btn-lg launchbutton">Commencer</button> </div> </div>'
}

//Vérifie si la réponse de l'énigme est juste,   
function checkEnigme7() {
    numero = document.getElementById('input7').value
    if(numero == 4)
    {   
        document.getElementById('messagereponse').innerHTML='Bravo, vous avez trouvé la bonne réponse.'
        enigme_8()
    }
    else
    {
        document.getElementById('messagereponse').innerHTML='Mauvaise réponse. Réesayez.'
    }
    
}
//
function enigme7Hint(){
    window.alert("Salle des conseillères en fomation")
}


function enigme_8() {
    let id = document.getElementById('divchange')
    id.innerHTML= "";
    id.innerHTML = " <div class='row'> <iframe id='inlineFrameExample' title='Inline Frame Example' width='100%' height='400' src='https://my.web-visite.com/F1Lbov98B1/29545100p&357.50h&90.90t'> </iframe> </div> <div class='row'> <div class='text-center'> <p>Allons chercher Vanille ! J'aimerai bien voir de quelle couleur sont ses chaussures aujourd'hui ! Indice cadeau : elle est en pause.</p><br><p>Prenez la couleur et garder le code Hexadécimal (un seul suffira)</p></div> </div> <div class='row'> <div class='col text-center mx-auto d-block'> <input type='text' id='input8' class=' w-25 text-center'> <button type='button' onclick='result_enigme8()' class='btn btn-secondary btn-lg '>Envoyer !</button> </div> </div>"
}

function crypt(strchiffr, key) {
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    let result ='';
    let locationLettre;

    for (let i = 0; i < strchiffr.length; i++) {
        if(strchiffr.charAt(i)==' ')
        {
            result+=' '
        }
        else
        {
            locationLettre=alphabet.indexOf(strchiffr.charAt(i))
            // console.log(locationLettre)   
            result+=alphabet.charAt((locationLettre+key) %26) 
            //console.log( alphabet.charAt((locationLettre+key) %26) );
        }
    }       
    console.log(result);
    return result;
}

function dechiffr(strchiffr, key) {
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    let result ='';
    let locationLettre;
    key = 26-(key%26)
    for (let i = 0; i < strchiffr.length; i++) {
        if(strchiffr.charAt(i)==' ')
        {
            result+=' '
        }
        else
        {
            locationLettre=alphabet.indexOf(strchiffr.charAt(i))
            // console.log(locationLettre)   
            result+=alphabet.charAt((locationLettre+key) %26) 
            //console.log( alphabet.charAt((locationLettre+key) %26) );
        }
    }       
    console.log(result);
    return result;
}