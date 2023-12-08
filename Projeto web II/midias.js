function abrirMenu()
{
    document.getElementById('menuLateral').style.width = "250px";
}

function fecharMenu(){
    document.getElementById('menuLateral').style.width = "0px";

}


var app = document.getElementById('tituloMidias');

var titutloMidias = new Typewriter(app, {
    loop: false,
    delay: 25
});
    
titutloMidias.typeString('Mídias: ')
    .start();

/************************************************************************* */
var app = document.getElementById('textoMidias');
var textoMidias = new Typewriter(app, {
    loop: true,
    delay: 30
});

textoMidias.typeString('Para criar um site para web com HTML e CSS, é necessário aprender os conceitos básicos dessas linguagens. Alguns conceitos importantes de HTML incluem: ')
    .typeString('<br>')
    .typeString('<br>')
    .typeString('Elementos: Os elementos HTML são as partes básicas de um site. Cada elemento tem um propósito específico, como definir um cabeçalho, um parágrafo ou uma imagem.')
    .pauseFor(2500)
    .deleteAll(10)
    .typeString('Classes e IDs: As classes e IDs HTML são identificadores que podem ser usados para estilizar elementos.')
    .pauseFor(2500)
    .deleteAll(10)
    .typeString('Alguns conceitos importantes de CSS incluem: <br><br>')
    .pauseFor(2500)
    .typeString(' Propriedades: As propriedades CSS são usadas para alterar a aparência de um elemento. Por exemplo, a propriedade color define a cor de um elemento.')
    .pauseFor(2500)
    .deleteAll(10)
    .typeString('Valores: Os valores CSS são as informações que são usadas para definir uma propriedade. Por exemplo, o valor red da propriedade color define a cor vermelha.')
    .pauseFor(2500)
    .deleteAll(10)
    .start();



// Função para formatar a data como DD/MM/YYYY
function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function atualizarDataRodape() {
    const elementoDataRodape = document.getElementById('dataRodape');
    if (elementoDataRodape) {
        const dataAtual = new Date();
        const dataFormatada = formatarData(dataAtual);
        elementoDataRodape.textContent = `Data: ${dataFormatada}`;
    }
}

atualizarDataRodape();

setInterval(atualizarDataRodape, 1000); 