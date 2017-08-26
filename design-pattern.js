console.log("===DESIGN PATTERN===");

//MODULE PATTERN - IIFE
var app = (function(){
  var meuGA = {count: 0};

  meuGA.clique = function(){
    return meuGA.count += 1;
  }

  meuGA.limpa = function(){
    return meuGA.count = 0;
  }
  //API

  //ESCOLHE O QUE SERÁ RETORNADO
  return {
    clique: meuGA.clique,
    limpa: meuGA.limpa
  };

})();
