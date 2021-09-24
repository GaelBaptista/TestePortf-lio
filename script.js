function subirTela(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}

function decidirBotaoScroll() {
    if(window.scrollY === 0) {
        //ocultar bortao
        document.querySelector('.scrollbutton').style.display = 'none' ;

    } else {
        //mostra botao
        document.querySelector('.scrollbutton').style.display = 'block' ;

    }
}

window.addEventListener('scroll', decidirBotaoScroll);