//ten program nalezy przetranspilowac przy pomocy:
// tsc test.ts - pojawi sie wtedy plik test.js

console.log('czesc tu typecript');

class Test {
    powitanie (imie: string):void {
        console.log('Witaj ' + imie);
    }
}

let x:number = 5;
let test:Test = new Test();
test.powitanie('Janek');
