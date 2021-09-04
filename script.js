var elementyH2 = document.querySelectorAll("h2");
elementyH2[0].innerText = "Cześć";
var b = 10;

function zmien() {
    //var b = 5;
    elementyH2[0].innerText = "Własnie się zmieniłem";
    b = 7;
};

function a() {
    //var b = 5;
    var b = 6;
    b = b* b;
    console.log('w funkcji a, b ma wartosc:' + b);
    console.log(document);
}

function test() {
    //let x = 5;
    for(let x = 0; x<100; x++) {
        console.log(x);
    };
    console.log(x);
}

test();
console.log(x);

if (x == 5)
    console.log('hej');

if (x == 6)
    console.log('hej');


/*
a();
console.log(b);
 */



