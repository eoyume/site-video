const video = document.querySelector('#filme')
const stop = document.querySelector('#btSp')
const iniciar = document.querySelector('#btPy')
const parar = document.querySelector('#btPs')
const avancar = document.querySelector('#btAv')
const retroceder = document.querySelector('#btRt')
const pula10 = document.querySelector('#pula10')
const volta10 = document.querySelector('#volta10')


stop.addEventListener('click', terminar)
iniciar.addEventListener('click', inicio)
parar.addEventListener('click', congelar)
avancar.addEventListener('click', acelerar)
retroceder.addEventListener('click', desacelerar)

function desacelerar(){

    video.playbackRate -= 0.1

}


function acelerar(){

    video.playbackRate += 0.1

}

function congelar(){
    
    video.pause()

}


function terminar(){

    video.pause()
    video.currentTime = 0

}

function inicio(){ 
    video.play ()
    video;playbackRate = 1
}


