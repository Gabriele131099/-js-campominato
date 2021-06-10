var arrayNum = []
var arrayUtente = []
var nCasuale = 16;
var score = 0;
for (var i = 0; i < nCasuale; i++) {
    arrayNum.push(Math.floor(Math.random()*nCasuale)) 
}
document.getElementById("arrayNum").innerHTML = arrayUtente + " </br> " + arrayNum + " </br> " + "score: " + score

function gioca() {
    var x=100

    while (x>0) {
        var utenteNumero = prompt("inserisci un numero")
        if (arrayNum.includes(utenteNumero)) {
            alert("perso" + sconto) 
            break;  
        } else if (arrayUtente.includes(utenteNumero)) {
            alert("il numero è gia presente")
            
        } else {
            arrayUtente.push(utenteNumero)
            score += 15
            x-=16
        }
    }
    alert("Il tuo punteggio è " + score)
    document.getElementById("arrayNum").innerHTML = arrayUtente + " </br> " + arrayNum + " </br> " + "score: " + score
    
}