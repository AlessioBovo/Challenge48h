
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
    a.innerHTML = ' ';
    a.innerHTML = "<div id='divchange'><div class='row'><div class='col énoncé top_less text-center'><p>Vous êtes bloqués dans le campus car un méchant vous empêche d'en sortir, cause ? </br> Absence non justifiée en attente !  </p></div></div><div class='row'><div class='col énoncé text-center' id='go_down'><p>Afin de trouver son identité, le méchant vous à donner une piste...  </br></br>48,77,71,6e,20,43,65,77,6a,65,6a,61,70</br></br>Résolvez cette piste et vous serez un Hexample ! </p></div></div><div class='row col'><p class='text-center text_enigme2 box'><input type='text' id='rep-01'></input></p><div class='col text-center launch-button'><button type='button' onclick='change_ENIGME_1()' class='btn btn-secondary btn-lg'>Valider</button></div></div></div>";

}

function change_ENIGME_1() {
    let a = document.getElementById('divchange');
    let rep1 = document.getElementById("rep-01");
    if (rep1.value == "Hwqna Cewjejappe") {
        a.innerHTML = ' ';
        a.innerHTML = "<div class='divchange' id ='divchange'><div class='enigme2' id='enigme2'> <div class='row'> <div class='col-12'> <p class='text-center text_enigme2 box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text_enigme2 énoncé box'>Mais !? Ca ne veut rien dire 'Hwqna Cewjejappe'?</br>mais... avec cette clé un empire vous créerez ! Son décalage se trouve dans le 'Challenge 48h' </p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text_enigme2 box'><input type='text' id='rep-02'></input> </p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='change_ENIGME_2();'>Continuer</button> </div></div></div></div></div>";
    } else {
        alert("Mauvaise réponse. Dommage !")
    }
};

function change_ENIGME_2() {
    let a = document.getElementById('divchange');
    let rep1 = document.getElementById("rep-02").value;
    rep1 = rep1.toLowerCase();
    if (rep1 == "laure gianinetti") {
        a.innerHTML = ' ';
        a.innerHTML = "<p class='texte_egnime_3'>Laure c'est donc toi la personne qui nous a enfermé ici ! J'ai l'impression qu'il nous manque encore quelques chose , continuons de chercher des indices.</p><div class='divchange' id='divchange'> <div class='row'> <iframe id='inlineFrameExample' title='Inline Frame Example' width='100 % ' height='500' src='https://my.web-visite.com/F1Lbov98B1/29545100p&357.50h&90.90t'> </iframe> </div> <div class='row'> <div class='text-center'> <p class='texte_egnime_3'>Il vous faudra visiter le campus pour trouver la salle en face de Superman et de noté son chiffre dans un coin de vôtre tête.</br>À noté qu'une chose c'est passé dans cette page, il se trouve dans l'outil du navigateur préféré des développeurs web</br> Vous devrez vous servir d'un outil déjà utilisé précédement</p> </div> </div> <div class='text-center'> <div> <input class='text-center' type='text' id='rep-03'></input> <button type='button' onclick='change_enigme_3()' class='btn btn-secondary btn-lg text-center'>valider</button> </div> </div> </div>";
        console.log('QZLJ');
    }
    else {
        alert("Mauvaise réponse. Dommage !")
    }

};

// Lancement du console log + affichage de l'enigme 3
function change_enigme_3() {

    let a = document.getElementById('divchange');

    let rep1 = document.getElementById("rep-03").value;
    rep1 = rep1.toLowerCase();
    if (rep1 == "jsec") {
        a.innerHTML = ' ';
        a.innerHTML = "<p class='texte_egnime_3'>C'était donc le code jsec que Laure nous à demander. à partir de maintenant il va falloir bien retenir les réponses aux enigmes car elle seront utiles pour la suite.</p><h2 class='txtPendu text-center'>Vous voila face a un pendu.</h2><h2 class='txtPendu text-center'>Petit indice : celle qu'on considère comme la première programmeuse du monde</h2><div class='txtPendu text-center' id='base'> <img class='mort' id='1' src='assets/assetPendu/echec.png'> <img class='mort' id='2' src='assets/assetPendu/echec.png'> <img class='mort' id='3' src='assets/assetPendu/echec.png'> <img class='mort' id='4' src='assets/assetPendu/echec.png'> <img class='mort' id='5' src='assets/assetPendu/echec.png'></div><h3 id='pendu' class='txtPendu text-center'>___ ________</h3><h3 id='tentative' class='txtPendu text-center'></h3> <div class='col txtPendu text-center'> <h3 id='resultat' class='txtPendu text-center'></h3> <input id='valeur' maxlength='1' onchange='VerifValeur(valeur.value,okValues);' onkeypress='this.onchange();' onpaste='this.onchange();' oninput='this.onchange();'> </div> <div class='col text-center launch-button'> <button id='suivant' type='button' class='btn btn-secondary btn-lg launchbutton' onclick='change_enigme_6()'>Suivant</button> <button id='validation' type='button' class='btn btn-secondary btn-lg launchbutton' onclick='RechercheTab(valeur.value,Mot)'>Valider</button> </div></div>";
    } else {
        window.alert("Mauvaise réponse. Dommage !")
    }

}

function change_enigme_6() {
    let a = document.getElementById('divchange');
    a.innerHTML = ' ';
    a.innerHTML = "<div class='divchange' id='divchange'> <div class='row'> <iframe id='inlineFrameExample' title='Inline Frame Example' width='100%' height='500' src='https://my.web-visite.com/F1Lbov98B1/29545100p&357.50h&90.90t'> </iframe> </div> <div class='row'> <div class='text-center'> <p>Et si on allait donner un petit coup d'oeil dans le bureau pédagogique ? Pour obtenir le premier chiffre du code JSEC demandé par Laure, il vous suffira de compter le nombre de plantes et de convertir le résultat en binaire !</p> </div> </div> <div class='row'> <div class='col text-center mx-auto d-block'> <input type='text' id='input6' class=' w-25 text-center'> <button type='button' onclick='result_enigme6()' class='btn btn-secondary btn-lg '>Commencer</button> </div> </div> </div>";
}
// function enigm_4() {
//     divchange.innerHTML = " ";
//     divchange.innerHTML = "<div class='divchange' id='divchange'><h2 class='txtPendu text-center'>Vous voila face a un pendu.</h2><h2 class='txtPendu text-center'>Petit indice : celle qu'on considère comme la première programmeuse du monde</h2><div class='txtPendu text-center' id='base'> <img class='mort' id='1' src='assets/assetPendu/echec.png'> <img class='mort' id='2' src='assets/assetPendu/echec.png'> <img class='mort' id='3' src='assets/assetPendu/echec.png'> <img class='mort' id='4' src='assets/assetPendu/echec.png'> <img class='mort' id='5' src='assets/assetPendu/echec.png'></div><h3 id='pendu' class='txtPendu text-center'>___ ________</h3><h3 id='tentative' class='txtPendu text-center'></h3> <div class='col txtPendu text-center'> <h3 id='resultat' class='txtPendu text-center'></h3> <input id='valeur' maxlength='1' onchange='VerifValeur(valeur.value,okValues);' onkeypress='this.onchange();' onpaste='this.onchange();' oninput='this.onchange();'> </div> <div class='col text-center launch-button'> <button id='suivant' type='button' class='btn btn-secondary btn-lg launchbutton' onclick='next()'>Suivant</button> <button id='validation' type='button' class='btn btn-secondary btn-lg launchbutton' onclick='RechercheTab(valeur.value,Mot)'>Valider</button> </div></div></div>"
//     //mettre le innerHTML de l'enigme pendu
// }


// Si juste envoie à l'énigme 7
function result_enigme6() {
    let result = document.getElementById('input6').value;
    if (result == 2) {
        let a = document.getElementById('divchange');
        a.innerHTML = ' ';
        a.innerHTML = "<div class='row'> <object data='https://my.web-visite.com/F1Lbov98B1/29545100p&4.86h&84.47t' id='WebVisiteYnov' type='text/html' width='100%' height='400'></object> <div class='col énoncé text-center'> <p>Il serait peut etre temps que prendre son envol. Pour ce faire il faudrait retrouver ses tickets. On fait référence a la convention de Varsovie. Mais de quel article ?</p> <p id='messagereponse'></p> <input type='text' id='input7'> <button type='button' class='btn btn-secondary btn-lg' onclick='checkEnigme7()'>Envoyer</button> <button type='button' class='btn btn-secondary btn-lg' onclick='enigme7Hint()'>indice</button> </div> </div> <div class='row'> <div class='col text-center launch-button'> </div> </div> ";
    }
    else {
        window.alert('Mauvaise Réponse, essaye encore ! ');
    }
}

// Si juste envoie à l'énigme 9
function result_enigme8() {
    let result = document.getElementById('input8').value;
    result = result.toLowerCase();
    if (result == 'noire') {
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
        a.innerHTML = "<div class='divchange' id='divchange'> <div class='row'> <div class='text-center'> <p>Veuillez entrer le code JSEC afin de justifier votre présence au cours :</p> </div> </div> <div class='row'> <div class='col text-center mx-auto d-block'> <input type='text' id='inputEnd' class=' w-25 text-center'> <button type='button' onclick='result_end()' class='btn btn-secondary btn-lg '>Envoyer !</button> </div> </div> </div> ";
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
        location.href = '../victory.html';
    }
    else {
        window.alert('Mauvaise Réponse, essaye encore !');
    }
}





//fonctions pour le pendu :
let okValues = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function VerifValeur(lettre, tab) {
    let bool = false;
    for (const valeur in tab) {
        bool = lettre == tab[valeur];
        if (bool) {
            break
        }
    }
    if (!bool) {
        valeur.value = ''
    }
}
let echec = 1
let Mot = 'ada lovelace';
let MotVide = ['_', '_', '_', ' ', '_', '_', '_', '_', '_', '_', '_']
function RechercheTab(lettre, tab) {
    tentative.innerHTML = tentative.innerHTML + ' ' + lettre
    let bool = false;
    for (const valeur in tab) {
        bool = lettre == tab[valeur];
        if (bool) {
            break
        }
    }
    if (!bool) {
        document.getElementById(echec).style.visibility = "visible"
        echec++;
        if (echec > 5) {
            validation.disabled = 'true'
            validation.style.display = 'none'
            valeur.style.display = 'none'
            resultat.style.display = 'inline'
            resultat.innerHTML = 'Vous avez perdu, je pensais que vous auriez au moins trouvez ça...'
            suivant.style.display = 'inline'
        }
    } else {
        for (const valeur in tab) {
            bool = lettre == tab[valeur];
            if (bool) {
                MotVide[valeur] = lettre
                bool = false
            }
        }
        for (const valeur in MotVide) {
            var motComplet = MotVide.toString().replace(/([,])/g, '')
        }
        if (motComplet == Mot) {
            validation.disabled = 'true'
            validation.style.display = 'none'
            valeur.style.display = 'none'
            resultat.style.display = 'inline'
            resultat.innerHTML = 'Vous avez gagné, vous pouvez passer a la suite'
            suivant.style.display = 'inline'
        }
        pendu.innerHTML = motComplet;
    }
}

//chiffrages

function hex2a(hexx) { // hexa vers ascii
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

function BinToDec(Binary) { // binaire vers decimal
    let decimal = 0;
    var bin = Binary.toString()
    for (const binaryKey in bin) {
        decimal = decimal + parseInt(bin[binaryKey]) * Math.pow(2, (bin.length - binaryKey - 1))
    }
    document.getElementById('depart').value = decimal;
}

function DecToBin(Decimal) { // decimal vers binaire
    let Bin = '';
    let puissance = 1;
    while (Decimal > Math.pow(2, puissance)) {
        puissance++;
    }
    while (puissance > 0) {
        if (Decimal - (Math.pow(2, (puissance - 1))) >= 0) {
            Decimal = Decimal - (Math.pow(2, (puissance - 1)))
            puissance--;
            Bin = Bin + '1';
        } else {
            Bin = Bin + '0';
            puissance--;
        }
    }
    document.getElementById('arrive').value = Bin;
}
function showHideYnovWebVisite() {
    let frameWebVisite;
    frameWebVisite = document.getElementById('WebVisiteYnov');
    console.log(frameWebVisite);
    frameWebVisite.style.display == 'block' ? frameWebVisite.style.display = 'none' : frameWebVisite.style.display = 'block';
    console.log('done');
}


//Vérifie si la réponse de l'énigme est juste,
function checkEnigme7() {
    numero = document.getElementById('input7').value;
    if (numero == 4) {
        document.getElementById('messagereponse').innerHTML = 'Bravo, vous avez trouvé la bonne réponse.';
        enigme_8();
    }
    else {
        document.getElementById('messagereponse').innerHTML = 'Mauvaise réponse. Réesayez.';
    }

}
//
function enigme7Hint() {
    window.alert("Salle des conseillères en fomation")
}


function enigme_8() {
    let id = document.getElementById('divchange')
    id.innerHTML = "";
    id.innerHTML = " <div class='row'> <iframe id='inlineFrameExample' title='Inline Frame Example' width='100%' height='400' src='https://my.web-visite.com/F1Lbov98B1/29545100p&357.50h&90.90t'> </iframe> </div> <div class='row'> <div class='text-center'> <p>Allons chercher Vanille ! J'aimerai bien voir de quelle couleur sont ses chaussures aujourd'hui ! Indice cadeau : elle est en pause.</p><br><p>Ecrivez la couleur des chaussures et garder le code Hexadécimal (un seul suffira)</p></div> </div> <div class='row'> <div class='col text-center mx-auto d-block'> <input type='text' id='input8' class=' w-25 text-center'> <button type='button' onclick='result_enigme8()' class='btn btn-secondary btn-lg '>Envoyer !</button> </div> </div>"
}

function crypt(strchiffr, key) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let locationLettre;

    for (let i = 0; i < strchiffr.length; i++) {
        if (strchiffr.charAt(i) == ' ') {
            result += ' '
        }
        else {
            locationLettre = alphabet.indexOf(strchiffr.charAt(i))
            // console.log(locationLettre)
            result += alphabet.charAt((locationLettre + key) % 26)
            //console.log( alphabet.charAt((locationLettre+key) %26) );
        }
    }
    console.log(result);
    return result;
}

function dechiffr(strchiffr, key) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let locationLettre;
    key = 26 - (key % 26)
    for (let i = 0; i < strchiffr.length; i++) {
        if (strchiffr.charAt(i) == ' ') {
            result += ' '
        }
        else {
            locationLettre = alphabet.indexOf(strchiffr.charAt(i))
            // console.log(locationLettre)
            result += alphabet.charAt((locationLettre + key) % 26)
            //console.log( alphabet.charAt((locationLettre+key) %26) );
        }
    }
    console.log(result);
    return result;
}