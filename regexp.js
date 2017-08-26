console.log("===REG EXP===");

// VALIDAÇÃO DE CEP - ^[0-9]{5}\-?[0-9]{3}$   ou   ^\d{5}\-?\d{3}$
// VALIDAÇÃO DE EMAIL - ^[A-z0-9\.\-]{1,}\@\w+\.[A-z]{2,3}(\.[a-z]{2})?$

//// META CARACTERES
// ^  - INÍCIO DA LINHA
// $ - FIM DA LINHA
// [I-F] - LISTA PERMITIDA
// {n} - QUANTIFICADOR
// \c - ESCAPE
// ? - OPCIONAL
// \w - ALFANUMERICOS
// + - REPETIDOR
// ()- GRUPO
// \d - APENAS NÚMEROS
// \D - NÃO NÚMEROS
// \s - ESPAÇOS
// . - QUALQUER DIGITO


let cep = prompt("Digite o seu CEP:");

//REGEX LITERAL
console.log(cep, /^\d{5}\-?\d{3}$/.test(cep));

console.log(cep, /^[0-9]{5}\-?[0-9]{3}$/.exec(cep));

console.log(cep, cep.match(/^\d{5}\-?\d{3}$/));
