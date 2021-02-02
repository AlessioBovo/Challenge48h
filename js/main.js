
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


//fonctions pour le pendu :
let okValues ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function VerifValeur(lettre,tab){
    let bool = false;
    for (const valeur in tab) {
        bool = lettre == tab[valeur];
        if (bool){
            break
        }
    }
    if(!bool){
        valeur.value=''
    }
}
let echec = 1
let Mot ='ada lovelace';
let MotVide = ['_','_','_',' ','_','_','_','_','_','_','_']
function RechercheTab(lettre,tab) {
    tentative.innerHTML = tentative.innerHTML+' '+lettre
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
            validation.style.display='none'
            valeur.style.display='none'
            resultat.style.display='inline'
            resultat.innerHTML='Vous avez perdu, je pensais que vous auriez au moins trouvez ça...'
            suivant.style.display='inline'
        }
    } else {
        for (const valeur in tab) {
            bool = lettre == tab[valeur];
            if (bool) {
               MotVide[valeur] = lettre
                bool = false
            }
        }
        for (const valeur in MotVide){
        var motComplet =MotVide.toString().replace(/([,])/g,'')
        }
        if(motComplet ==Mot){
            validation.disabled = 'true'
            validation.style.display='none'
            valeur.style.display='none'
            resultat.style.display='inline'
            resultat.innerHTML='Vous avez gagné, vous pouvez passer a la suite'
            suivant.style.display='inline'
        }
        pendu.innerHTML = motComplet;
    }
}
function next(){
    divchange.innerHTML="";
    divchange.innerHTML=""//mettre le innerHTML de l'enigme suivante
}

//chiffrages

function hex2a(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)  {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

function BinToDec(Binary){
    let decimal = 0;
    var bin = Binary.toString()
    for (const binaryKey in bin) {
        decimal = decimal + parseInt(bin[binaryKey]) * Math.pow(2,(bin.length-binaryKey-1))
    }
    return decimal
}

function DecToBin(Decimal){
    let Bin ='';
    let puissance =1;
    while(Decimal > Math.pow(2,puissance)){
        puissance++;
    }
    while(puissance>0){
        if(Decimal-(Math.pow(2,(puissance-1)))>=0){
        Decimal = Decimal-(Math.pow(2,(puissance-1)))
        puissance--;
        Bin=Bin+'1';
    }else {
            Bin = Bin + '0';
            puissance--;
        }
    }
    return Bin;
}