function boasVindas(nome = "", horario = ""){

    if(horario >= 6 && horario<12){
        
        document.write(`<h1>Bom dia, seja bem vindo ${nome}</h1>`);
    }else if(horario >= 12 && horario <18){
        document.write(`<h1>Boa tarde, seja bem vindo ${nome}</h1>`);
    } else{
        document.write(`<h1>Boa noite, seja bem vindo ${nome}</h1>`);
    }
}

boasVindas("João", 10);
boasVindas("Claudio", 14);
boasVindas("Paula", 23);

function calcValor(energia = "", porcen = ""){
    return ((energia * porcen)/100)+energia;

}

document.write(`<h1>O valor a ser pago esse mês ${calcValor(237, 23)}</h1>`);

function aumentoSalario(salario= "", aumento = ""){
return ((salario * aumento)/100);

}

let impacto = aumentoSalario(3750, 10)* 5 + aumentoSalario(1300, 15) + aumentoSalario(1300, 10) + aumentoSalario(2200, 5);

document.write(`<h1>O impacto na empresa é de ${impacto}</h1>`);

function calcNota(teorica, pratica1, pratica2){
    return ((teorica*2) + pratica1 + pratica2)/4;
}

document.write(`<h1>A media do aluno é ${calcNota(8, 3, 7)}</h1>`)

let manha = 0
let tarde = 0
let noite = 0

function estacionamento(hora){
    if(hora >= 5 && hora < 12){
        manha++
    }else if(hora >=12 && hora < 18){
        tarde++
    }else(){
        noite++
    } 
}