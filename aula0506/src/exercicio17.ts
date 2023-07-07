//DV= digitos verificadores

function cpfValidation(cpf: string): boolean {
//console.log(typeof cpf);
if ( typeof cpf !== 'string') {
    return false;
}
//função para retirar ponto e hífen 
/*let splitCpf: any = cpf.replace("-",".").replace(/\./E,"").split("");*/

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
    splitCpf === "99999999999"
    ) { return false;
}

//calculo do primeiro DV
let sum = 0;
let restForFirstDv: number;

for(let i:number = 1; i <= 9; i++) {
   sum = sum + parseInt(splitCpf.substring(i-1)) * (11 - i); 
}
//console.log(sum);
restForFirstDv = 11 - (sum % 11);

//console.log(restForFirstDv)
if (restForFirstDv >= 10) {
    restForFirstDv = 0; //este é o penúltimo DV [9]
}
}

//modulo= %

/*console.log(splitCpf)
console.log(typeof splitCpf)*/


/*let result = cpfValidation('145.382.206-20');

if (result) {
    console.log('cpf invalido');
}*/
