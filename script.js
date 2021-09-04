var formularz = document.forma;
//var formularz = document.querySelector('form[name=forma]');
formularz.addEventListener('submit', (cel) => {

    let blad = false;
    let bledy = '';

    if (!formularz.imie.value.match(/^([A-z]{3,})$/g)) {
        bledy = '<p class="blad">imie jest zle<p>';
        blad = true;
    }

    if (!formularz.nazwisko.value.match(/^([A-z]{2,})(\-){0,1}([A-z]{2,})$/g)) {
        bledy += '<p class="blad">nazwisko jest zle<p>';
        blad = true;
    }

    if (blad == true) {
        cel.preventDefault();
        pokazBlad('Wystapil blad', bledy);
    }
    //if (blad) ....
})

function pokazBlad(tytul, tekst) {
    var tytulBledu = document.createElement('h3');
    var tekstBledu = document.createElement('div');
    var divBlad = document.querySelector('#blad');
    tytulBledu.innerText = tytul;
    tekstBledu.innerHTML = tekst;
    formularz.insertBefore(tytulBledu, divBlad);
    formularz.insertBefore(tekstBledu, divBlad);
}
