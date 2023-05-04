let produtos = ["Vodka", "Limão", "Gelo"];
let lista = document.querySelector("#lista");

for(let i = 0; i < produtos.length;i++){
    lista.innerHTML += `<li class="list-group-item"> 
                            ${produtos[i]}
                        </li>`;
}

function adicionarProduto(){
    if(produtos.value !=""){
        produtos.push(produto.value);
        lista.innerHTML += `<li class="list-group-item"> 
                            ${produto.value}
                            </li>`;
        produto.value = ""
        
    }else{
        alert("Digite um produto")
    }
}

function acharButao(){
    if(event.key === "Enter" && produtos.value != ""){
        adicionarProduto();
    }else{
        alert("Digite um produto")
    }
}