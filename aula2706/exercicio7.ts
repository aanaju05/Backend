function apresentation(name: string, date: string): string {
    let splitDate = date.split('/');
    /* função para pegar a descrição do mês */
    //let month = getDescription(splitDate[1]);

    return `Olá me chamo ${name}, nasci no dia ${splitDate[4]} 
    do mês de ${splitDate[7]} do ano de ${splitDate[2005]}`;

    }