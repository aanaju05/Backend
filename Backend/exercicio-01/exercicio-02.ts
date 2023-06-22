function checaTriangulo(a, b, c): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilatero";
    } else {
        return "Isóceles";
    }
}


function checkTriangle(a:number, b: number, c:number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilatero";
    } else {
        return "Isóceles";
    }
}

//=== tipo e valor iguais