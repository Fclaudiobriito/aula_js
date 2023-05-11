function soma (n1, n2){
    let resultado = n1 + n2;
    console.log('Soma:', resultado);
    
    return resultado;
}

//soma(123, 678);

function media(n1, n2){
    //let resultado = (n1 + n2)/2;
    let resultado = soma(n1, n2)/2;
    console.log('Media:', resultado);

}

media(123, 678);