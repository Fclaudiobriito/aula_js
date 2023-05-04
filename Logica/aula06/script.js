function boasVindas()
{
    document.write("<h1>Ola pessoal</h1>");
}

function boasVindasComNome(nome)
{
    document.write(`<h1>Olá, meu nome é ${nome}</h1>`);
}

function boasVindasComNome2(nome = "")
{
    document.write(`<h1>Olá, meu nome é ${nome}</h1>`);
}

function boasVindasComNome3(nome = "", idade = "")
{
    document.write(`<h1>Olá, meu nome é ${nome} e minha idade é ${idade}</h1>`);
}

function hoje(){
    return new Date();
}

function dobrarValor(valor){
    return valor * 2;
}

boasVindas();
boasVindasComNome("Claudio");
boasVindasComNome2();
boasVindasComNome3("Claudio", 24);
boasVindasComNome(`gleidson hoje é ${hoje()}`);

document.write(`<h1>O dobro de 2 é ${dobrarValor(2)}</h1>`);
document.write(`<h1>O dobro de 5 é ${dobrarValor(5)}</h1>`);
document.write(`<h1>O dobro de 10 é ${dobrarValor(10)}</h1>`);