// Referências do DOM HTML

const red = document.getElementById('red');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');

const jogarMaquina = document.getElementById('jogarMaquina');
const verificar = document.getElementById('verificar');

// Lógica do jogo

let vetjogador=[], vetmaq=[];

jogar();

red.onclick = ()=>{
    setTimeout(()=>{
        red.style.backgroundColor='#FF0000';
     },500);
    red.style.backgroundColor='#FA8072';
     vetjogador.push(2);
     console.log('Jogador ' + vetjogador);
}
green.onclick = ()=>{
    
    setTimeout(()=>{
        green.style.backgroundColor='#228B22'
     },500);
     green.style.backgroundColor='#7FFF00'
     vetjogador.push(1);
     console.log('Jogador ' + vetjogador);
}

yellow.onclick = ()=>{
    
    setTimeout(()=>{
        yellow.style.backgroundColor='#FFD700'
     },500);
     yellow.style.backgroundColor='#FFFF00'
     vetjogador.push(3);
     console.log('Jogador ' + vetjogador);
}

blue.onclick = ()=>{
    
    setTimeout(()=>{
        blue.style.backgroundColor='#0000FF'
     },500);
     blue.style.backgroundColor='#00BFFF';
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}

function bluePisca(){
    setTimeout(()=>{
        blue.style.backgroundColor='#0000FF'
     },500);
     blue.style.backgroundColor='#00BFFF';
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}




jogarMaquina.onclick = ()=>{
    jogar();
    vetjogador=[];
};

function jogar(){
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('Máquina '+ vetmaq);
}

////////////////////// solução  /////////////////
function verifygame2(){
    tamVet = vetmaq.length;
    let i = 0, resp;
    while (i < tamVet) {
        if (vetjogador[i] != vetmaq[i]) {
           resp=0;
           vetmaq=[];
           break;
        }else{
            resp=1;
        }
        i += 1;
     }
     console.log('Teste de acerto = ' + resp);
     vetjogador=[];
     
}

verificar.onclick=()=>{
    verifygame2();
};