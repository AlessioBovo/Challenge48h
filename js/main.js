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

function checkEnigme7(numero) {
    if(numero != 4)
    {
        document.getElementById('messagereponse').innerHTML='Bravo, vous avez trouvé la bonne réponse.'
    }
    else
    {
        document.getElementById('messagereponse').innerHTML='Mauvaise réponse. Réesayez.'
    }
    
}
function enigme7Hint(){
    window.alert("Salle des conseillères en fomation")
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

function déchiffr(strchiffr, key) {
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