var header = document.getElementById('header');
var menu = document.getElementById('menu');
var conteudo = document.getElementById('conteudo');
var showsidebar = false;
var radio = document.querySelector('.manual-btn')
var cont = 1

function togglesidebar() {

    showsidebar = !showsidebar;
    console.log(showsidebar);
    if (showsidebar) {
        menu.style.marginLeft = '-10vw';
        menu.style.animationName = 'showsidebar';
        conteudo.style.filter = 'blur(2px)';
    }
    else {
        menu.style.marginLeft = '-100vw';
        menu.style.animationName = '';
        conteudo.style.filter = '';
    }

    window.addEventListener('resize', function (_event) {
        if (window.innerWidth > 768 && showsidebar) {
            togglesidebar();
        }
    });

}

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 5000);

function proximaimg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true

}