// JavaScript
var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var texto = document.querySelector('.textoEsquerda');

setInterval(function() {
    texto.textContent = randomString(50);
}, 100);

function randomString(length) {
    var result = '';
    for (var i = 0; i < length; i++) {
        result += charSet[Math.floor(Math.random() * charSet.length)];
    }
    return result;
}
