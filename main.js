

var lancio_dado1 = (Math.floor(Math.random() * 6 ) + 1);
console.log(lancio_dado1);

var lancio_dado2 = (Math.floor(Math.random() * 6 ) + 1);
console.log(lancio_dado2);


if (lancio_dado1 > lancio_dado2) {
    console.log('Vincitore: giocatore 1');
}  else if (lancio_dado2 > lancio_dado1) {
    console.log('Vincitore: giocatore 2');
}  else {
    ('giocatore_uno == giocatore_due')
    console.log('pareggio');
}
