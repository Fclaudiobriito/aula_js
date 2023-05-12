//É maior que 10 ou nao

const maior = (n1,n2) =>{ 
    if(n1 > n2) {
        console.log("O numero", n1, "é maior que o numero", n2);
    }else if(n1< n2){
        console.log("O numero", n2, "é maior que o numero", n1);
    }else {
        console.log("São iguais");
    }
}

maior(142,123);