var print=document.getElementById("print");
var arrayNum = [];
var arrayUser = [];


//Funzione, verifica se l'elelmento è presente all'interno dell'array
function checkArray(array, element) {
  for ( var x = 0 ; x < array.length ; x++){
    if(element === array[x]){
      return true;
    }
  }
  return false;
}
while(arrayNum.length<16){
    var numRandom = (Math.floor(Math.random()*100)+1);
    if(!(checkArray(arrayNum, numRandom))){
        arrayNum.push(numRandom);
    }
}

//Funzione,accetta il numero inserito dall'utente se e solo se è un numero, altrimenti ripete la richiesta
function nUtente(message){
    var num = parseInt(prompt(message));
    while(isNaN(num)){
        var num = parseInt(prompt("Attenzione il valore deve essere numerico"));
    }
    return num;
}
var score =0
// array user , richiesta numeri utenti 
while(arrayUser.length<84){
    var nUtente = nUtente("Inserisci il numero");
    if(!(checkArray(arrayNum, nUtente))){
        if(!(checkArray(arrayUser, nUtente))){
            arrayUser.push(nUtente);
             score += 15

        }else{
            alert("il numero gia è stato inserito")
            nUtente = nUtente("Inserisci il numero");
        }
    }else{
        break
    }
}


print.innerText += score;



// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// generiamo 16 numeri => creo funzione => while array.length < 16, 
// perché di volta in volta pusho nell'array il numero generato, solo se non è già presente
// --- 
//     0. while listNum.length <= 16
//     1.      genero un numero randomico
//     2.      if num not in array then, lo pusho nell'array listNum

// ora listNum contiene 16 numeri NON duplicati.
