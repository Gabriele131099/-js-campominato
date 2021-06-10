var arrayNum = []
var arrayUtente = []
var nCasuale = 16;
for (var i = 0; i < 16; i++) {
    arrayNum.push(Math.floor(Math.random()*nCasuale)) 
}
var x=100
var score = 0;
while (x>0) {
    var utenteNumero = prompt("inserisci un numero")
    if ( arrayUtente.includes(utenteNumero)) {
        alert("Il numero è già presente") 
    } if (arrayNum.includes(utenteNumero)) {
        alert("hai perso")
        break;
    } else {
        arrayUtente.push(utenteNumero)
        score += 15
    }
    x-=16
}
alert("Il tuo punteggio è " + score)