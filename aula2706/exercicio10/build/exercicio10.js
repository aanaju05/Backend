"use strict";
var genders;
(function (genders) {
    genders["ACAO"] = "a\u00E7\u00E3o";
    genders["DRAMA"] = "drama";
    genders["COMEDIA"] = "com\u00E9dia";
    genders["ROMANCE"] = "romance";
    genders["TERROR"] = "terror";
})(genders || (genders = {}));
function cinema(movie, year, gender, punctuation) {
    let points = punctuation ? 'Pontuação:' + punctuation : '';
    return `Filme: ${movie} , lançamento: ${year} , gênero: ${gender} ${points}`;
}
console.log(cinema('o chamado', 2019, genders.TERROR));
//# sourceMappingURL=exercicio10.js.map