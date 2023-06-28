enum genders {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function  cinema(movie: string, year: number, gender: string, punctuation?: number): string {
    let points = punctuation ? 'Pontuação:' + punctuation : '';
     return `Filme: ${movie} , lançamento: ${year} , gênero: ${gender}, ${points}`
}

console.log(cinema('o chamado', 2019, genders.TERROR));