/*
CONSEGNA
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

/*
1. Chiedere e salvare nome
2. Chiedere e salvare cognome
3. Chiedere e salvare colore preferito
4. Salvare anno corrente
5. Pubblicare nome, cognome, colore prerito e anno corrente
*/


const name = prompt('Inserisci nome');

const surname = prompt('Inserisci cognome');

const color = prompt('Inserisci colore preferito');

console.log(name, surname, color);

const year = 23;

document.getElementById('dati').innerHTML = name + surname + color + year;
