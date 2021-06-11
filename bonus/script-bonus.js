var print=document.getElementById("print");
var arrayNum = [];
var arrayUser = [];
//Funzione, verifica se l'elelmento è presente all'interno dell'array
function isInArray(array, element) {
    for ( var x = 0 ; x < array.length ; x++){
        if(element === array[x]){
            return true;
        }
    }
    return false;
}
//creo array numeri casuali
while(arrayNum.length<16){
    var numRandom = (Math.floor(Math.random()*100)+1);
    if(!(isInArray(arrayNum, numRandom))){
        arrayNum.push(numRandom);
    }
}
arrayNum.sort()
//Funzione,accetta il numero inserito dall'utente se e solo se è un numero, altrimenti ripete la richiesta
function nUtente(message){
    var num = parseInt(prompt(message));
    while(isNaN(num)){
        var num = parseInt(prompt("Attenzione il valore deve essere numerico"));
    }
    return num;
}
// array user , richiesta numeri utenti 
var score = 0
var flag = false
function gioca() {

    var difficoltà = parseInt(prompt("scegli una difficolta fra 0 e 2"))
    switch (difficoltà) 
    {
    case 0:
        var diff = 100-16;
        var bonusScore = 1
        print.innerHTML+="Difficoltà Bassa </br>"
        break;
    case 1:
        var diff = 80 - 16;
        var bonusScore = 1.3
        print.innerHTML+="Difficoltà Media </br>"
        break;

    case 2:
        var diff = 50-15;
        var bonusScore = 1.8
        print.innerHTML+="Difficoltà Alta </br>"
        break;
    }
    while(arrayUser.length<diff){
        var numbUser = nUtente("Inserisci il numero");
        if(!(isInArray(arrayNum, numbUser))){
            if(!(isInArray(arrayUser, numbUser))){
                arrayUser.push(numbUser);
                score += 15
                flag = true

            }else{
                alert("il numero gia è stato inserito")
                numbUser = nUtente("Inserisci il numero");
            }
        }else{
            alert("hai persoooooo")
            break
        }
    }  
    if (!flag) {
        print.innerHTML +="HAI VINTO </br>Il tuo punteggio è : "+  + score*bonusScore  + "</br> I tuoi numeri sono: " + arrayUser + "</br> Le mine hanno i seguenti numeri: " + arrayNum;k
    
    } else {
        print.innerHTML +="HAI PERSO </br>Il tuo punteggio è : "+  + score*bonusScore  + "</br> I tuoi numeri sono: " + arrayUser + "</br> Le mine hanno i seguenti numeri: " + arrayNum;k
    
    }
}
