window.addEventListener('DOMContentLoaded', (event) => {
    const elemento = document.querySelector('.deslizar');
    elemento.animate([
        { transform: 'translateX(-100vw)' }, 
        { transform: 'translateX(0)' }
    ], {
        duration: 1500, // Duração da animação em milissegundos
        fill: 'forwards' // Mantém o estilo do último keyframe após a animação
    });
});

/*------------------------------- Título texto introdução -------------------------------*/
var app = document.getElementById('tituloIntroducao');

var titutloIntroducao = new Typewriter(app, {
    loop: false,
    delay: 25
});
    
titutloIntroducao.typeString('O que é desenvolvimento web?')
        .start();

/*------------------------------- Texto introdução -------------------------------*/
var app = document.getElementById('texto');

var textoIntroducao = new Typewriter(app, {
    loop: false,
    delay: 30
});

textoIntroducao.typeString('A programação web é uma área da computação que se concentra na criação de sites e aplicações web, com os programadores desempenhando um papel fundamental, moldando a paisagem digital com sua criatividade e habilidades técnicas.')
    .typeString('<br><br>')
    .pauseFor(2500)
    .typeString('\nAlém do conhecimento técnico, os programadores web devem ser mestres na arte da usabilidade e do design. Afinal, a experiência do usuário é um dos aspectos mais críticos na programação web. Sites e aplicativos precisam ser intuitivos, responsivos e visualmente atraentes para cativar e reter os visitantes. A harmonia entre design e funcionalidade é o que diferencia os sites comuns dos excepcionais.')
    .start();


/*------------------------------- Titulo texto dois -------------------------------*/
var app = document.getElementById('tituloDois');

var tituloDois = new Typewriter(app, {
    loop: false,
    delay: 40
});

tituloDois.typeString('Elementos do desenvolvimento web: ')
    .start();


/*------------------------------- Texto dois -------------------------------*/
var app = document.getElementById('textoDois');

var textoDois = new Typewriter(app, {
    loop: true,
    delay: 50
});

textoDois.typeString('HTML: ')
    .typeString('<br>')
    .typeString('HTML é a sigla para HyperText Markup Language. É uma linguagem de marcação que descreve o conteúdo de uma página web. O HTML é usado para definir o layout de uma página, bem como o conteúdo que será exibido.')
    .pauseFor(2500)
    .deleteAll(10)

    .typeString('CSS: ')
    .typeString('<br>')
    .typeString('CSS é a sigla para Cascading Style Sheets. É uma linguagem de folhas de estilo que é usada para estilizar o conteúdo de uma página web. O CSS é usado para controlar a aparência da página, como a cor, a fonte e o tamanho do texto.')
    .pauseFor(2500)
    .deleteAll(10)

    .typeString('JavaScript: ')
    .typeString('<br>')
    .typeString('JavaScript é uma linguagem de programação que é usada para adicionar interatividade às páginas web. O JavaScript pode ser usado para criar animações, formulários interativos e outros recursos.')
    .pauseFor(2500)
    .deleteAll(10)

    .typeString('Bancos de dados: ')
    .typeString('<br>')
    .typeString('Os bancos de dados são usados para armazenar dados de uma página web. Os dados podem ser usados para criar conteúdo dinâmico, como notícias atualizadas ou listas de produtos.')
    .start();


var imagens = ["https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png", 
                "https://zhangzifan.com/uploads/2019/05/CSS3.jpg", 
                "https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png",
                "https://cdn-icons-png.flaticon.com/512/9850/9850812.png"];
    var indiceImagem = 0;
    var imagem = document.getElementById('imagens');

    function trocarImagem() 
    {
        imagem.src = imagens[indiceImagem];
        indiceImagem = (indiceImagem + 1) % imagens.length;
    }

    setInterval(trocarImagem, 5200);