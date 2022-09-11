let largura = 0;
let altura = 0;
let vidas = 1;
let tempo = 61;
let criaMosquitoTempo = 2000;

let nivel = window.location.search.replace('?', '');

if (nivel == 'normal'){
    criaMosquitoTempo -= 1000;
} else if(nivel == 'dificil'){
    criaMosquitoTempo -=1500;
}


function ajustarTamanhoWindow (){
    altura = window.innerHeight - 150;
    largura = window.innerWidth - 150;
    console.log (`Largura: ${largura}, altura: ${altura}`)

}

let criaMosquito = setInterval(function(){
    posicionarMosquito()
}, criaMosquitoTempo)


let cronometro = setInterval(function(){ 
    tempo-=1;

    if (tempo < 0){
        window.location.href="vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);


function posicionarMosquito(){

    existe = document.getElementById('mosquito');
    if (existe){
        existe.remove();

        if (vidas > 3){
            window.location.href="game_over.html"
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        }
    }

        let posicaoX = Math.floor(Math.random() * largura); //posições aleatorias
        let posicaoY = Math.floor(Math.random() * altura);
        posicaoX = posicaoX < 150 ? 150 : posicaoX // posicaoX é menor que 0? Se sim, recebe 0, se não recebe ela mesma
        posicaoX = posicaoX > 1100 ? 1100 : posicaoX 

        posicaoY = posicaoY < 150 ? 150 : posicaoY
        posicaoY = posicaoY > 600 ? 600 : posicaoY

        console.log(`Posicao X = ${posicaoX}, Posicao Y = ${posicaoY}`) 
    
        //criar o documento html
    
        let mosquito = document.createElement('img');
        mosquito.src = "imagens/mosca.png";
    //CSS
        mosquito.className = tamanhoAleatorio() + " " + espelhar();
        mosquito.width, mosquito.height = 50 + 'px';
    
        mosquito.style.position = 'absolute';
        mosquito.style.left = posicaoX + 'px';
        mosquito.style.top = posicaoY + 'px';
        mosquito.id = 'mosquito';
        mosquito.onclick = function (){
            this.remove();
        }
    
    
        document.body.appendChild(mosquito)
    
        //espelho
  
}


function tamanhoAleatorio (){
    let classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function espelhar(){
    let espelho = Math.floor(Math.random()*2);

    switch(espelho){
        case 0:
            return 'espelho1';
        case 1:
            return 'espelho2';
    }
}

ajustarTamanhoWindow();