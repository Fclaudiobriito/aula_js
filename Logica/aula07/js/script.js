let palpites = [];
let tentativas = 0;
let biaNumero;
gerarRandom();

palpite.onkeyup = function(event){
    if(event.key === "Enter"){
        if(tentativas < 5){
            //CHECHA SE O PALPITE JA ESTA NO ARRAY
            checaPalpite(palpite.value);
            //MOSTRA OS PALPITES JA FEITOS
            mostrarPalpites();
            //ZERA O INPUT
            palpite.value = '';
            //CHECA SE ACABOU AS TENTATIVAS
            tentativas == 5 && encerraJogo();
        }
    }
}

function mostrarPalpites(){
    let ps = document.querySelector('.palpites span');
    ps.innerHTML = palpites.toString().replaceAll(',','-');
}

function encerraJogo(){
    palpite.style.display = 'none';
    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'initial';
    resultado.innerHTML = 'Você não acertou, o número era: <span>0</span>';
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'initial';
    bia.src = 'img/derrota.png'; 
}

function checaPalpite(t){
    if(Number(t) >=0 && Number(t) <=100 && t != ''){

        if(palpites.includes(t)){
            alert('Este palpite ja foi dado');
            return;
        }
         //ADICIONA NO ARRAY
        palpites.push(palpite.value);

        (Number(t) == biaNumero) && vitoria();
        //INCREMENTA AS TENTATIVAS
        tentativas++;
    }else{
        alert('Digite um número válido')
    }
}

function restart(){
    palpites = [];
    bia.src = 'img/bia.png';
    tentativas = 0;
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'none';
    let resultado = document.querySelector('.resultao');
    resultado.style.display = 'none';
    let ps = document.querySelector('.palpites span');
    ps.innerHTML = '';
    palpite.style.display = 'initial';
    gerarRandom();
}

function vitoria(){
    palpite.style.display = 'none';
    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'initial';
    resultado.innerHTML = 'Parabéns você acertou, o número era: <span>'+biaNumero+'</span>';
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'initial';
    bia.src = 'img/vitoria.png'; 
}

function gerarRandom()
{
    return biaNumero = Math.floor(Math.random() * 100) + 1;
}