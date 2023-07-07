"use strict";
function cpfValidation(cpf) {
    if (typeof cpf !== 'string') {
        return false;
    }
    let splitCpf = cpf.replace(/[\s-]*/igm, '');
    if (!splitCpf ||
        splitCpf.length !== 11 ||
        splitCpf === "00000000000" ||
        splitCpf === "11111111111" ||
        splitCpf === "22222222222" ||
        splitCpf === "33333333333" ||
        splitCpf === "44444444444" ||
        splitCpf === "55555555555" ||
        splitCpf === "66666666666" ||
        splitCpf === "77777777777" ||
        splitCpf === "88888888888" ||
        splitCpf === "99999999999") {
        return false;
    }
    let sum = 0;
    let restForFirstDv;
    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(splitCpf.substring(i - 1)) * (11 - i);
    }
    restForFirstDv = sum % 11;
    restForFirstDv = 11 - restForFirstDv;
    console.log(restForFirstDv);
}
let result = cpfValidation('145.382.206-20');
if (result) {
    console.log('cpf invalido');
}
//# sourceMappingURL=exercicio17.js.map