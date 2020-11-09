/*
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


//primo esercizio creare oggetto
var student = {
  "nome" : "Francesca",
  "cognome": "Giorno",
  "età" : 24,
};

 for ( var key in student){
   console.log(student[key]);
 }

//secondo esercizio
//arrey di oggetti

var students = [
{
  "nome" : "Francesco",
  "cognome": "Totti",
  "età" : 44,
},

{
  "nome" : "Daniele",
  "cognome": "De Rossi",
  "età" : 37,
},

{
  "nome" : "Radja",
  "cognome": " Naingolann",
  "età" : 32,
},

{
  "nome" : "Edin",
  "cognome": "Dzeko",
  "età" : 34,
},

];

//ciclo for + stampa per ognuno nome e cognome
for( var i = 0; i < students.length; i++){

  console.log( "nome studente: " + student[i].nome);
  console.log( "cognome studente: " + student[i].cognome);
}


//terzo esercizio
//nuovo oggetto
 var newStudent ={

 };

 //aggiungere 3 promp e uso push per farinserire  nome cognome ed età
 newStudent.nome =prompt("nome dello studente: ");
 newStudent.cognome =prompt("cognome dello studente: ");
 newStudent.età = parseInt(prompt("nome dello studente: "));

students.push(newStudent);
console.log(students);
