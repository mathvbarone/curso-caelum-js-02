console.log("===ESCOPO===");

//ES5 - REQUER FUNÇÃO PARA ISOLAR A VARIÁVEL
var escopo1 = "global";

function teste(){
  var escopo2 = "local";
  console.log(escopo1, escopo2);
  return escopo2;
}

teste();

console.log(escopo1);


//ES6 - NÃO REQUER FUNÇÃO PARA ISOLAR A VARIÁVEL, A CHAVE É SUFUCIENTE
{
  let novo = true;
}
