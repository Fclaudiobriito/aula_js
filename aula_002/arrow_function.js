//método padrão de arrow function 
const soma = (n1, n2) =>{
    let resultados = n1 + n2;
    console.log(resultados); 

    return resultados
}

//soma(15, 23);

//método simplificado para arrow function
const soma2 = (n1, n2) => n1 + n2;
//console.log(soma2(15,20));



const media = (n1, n2) => {
    let resultado = soma2(n1, n2)/2;
    console.log(resultado);
}

//media(25, 15)

const media2 = (n1, n2) => soma(n1, n2)/2;
console.log(media2(25,15));

//A diferença de arrow function para função normal é apenas que no modelo simplificado não precisamos usar o return 