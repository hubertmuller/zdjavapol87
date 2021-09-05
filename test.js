//ten program nalezy przetranspilowac przy pomocy:
// tsc test.ts - pojawi sie wtedy plik test.js
console.log('czesc tu typecript');
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.powitanie = function (imie) {
        console.log('Witaj ' + imie);
    };
    return Test;
}());
var x = 5;
var test = new Test();
test.powitanie('Janek');
