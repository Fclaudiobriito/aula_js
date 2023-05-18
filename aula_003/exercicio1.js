//comparar numeros 

const comparar = (n1, n2) =>{
    if (n1 < n2){
        console.log(`O numero ${n1} é menor que ${n2}`);
    }else if (n1 === n2){
        console.log(`Os numeros são iguais`);
}else{
    console.log(`O numero ${n1} é maior que ${n2}`);
}
}

comparar(20, 40);

comparar(20, 20);

comparar(20, 3);
