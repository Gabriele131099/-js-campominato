var arrayNum = []
var arrayUtente = []
var nCasuale = 16;
for (var i = 0; i < 16; i++) {
    arrayNum.push(Math.floor(Math.random()*nCasuale))
    
}
var x=100
while (x>0) {
    var utenteNumero = prompt("inserisci un numero")
    if ( arrayUtente.includes(utenteNumero)) {
        alert("Hai perso , ri prova sarai più sfortunato ")
    } else {
        arrayUtente.push(utenteNumero)

    }
    x-=16
}