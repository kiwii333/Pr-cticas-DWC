
let video = document.querySelector('video')
let body = document.querySelector('body')
const lento = document.getElementById('lento')

const muy_rapido = document.getElementById('muy_rapido')



function click_lento (evento){
    if(evento.type =='click'){
        video.currentTime/2
    }
}

function click_rapido (evento){
    if(evento.type =='click'){
        video.currentTime*1.5
    }
}

function click_muy_rapido (evento){
    if(evento.type =='click'){
        video.currentTime*1.5
    }
}

document.getElementById('lento').onclick = click_lento()
document.getElementById('rapido').onclick = click_rapido()
document.getElementById('muy_rapido').onclick = click_muy_rapido()


