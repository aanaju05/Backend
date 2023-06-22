function comparaDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }


function compareTwoNumbers(num1: number, num2: number): number {
    let higherNumber;
    let lowerNumber;
  
    if (num1 > num2) {
        higherNumber = num1;
        lowerNumber = num2;
    } else {
        higherNumber = num2;
        lowerNumber = num1;
    }
  
    const diferenca = higherNumber - lowerNumber;
  
    return diferenca 
  }