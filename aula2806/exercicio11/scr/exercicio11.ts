enum sector {
	marketing ="Marketing",
	vendas ="Vendas",
	financeiro ="Financeiro",
}

let employees = [
	{ name: "Marcos", payroll: 2500, sector: sector.marketing, presencial: true },
	{ name: "Maria" ,payroll: 1500, sector: sector.vendas, presencial: false},
	{ name: "Salete" ,payroll: 2200, sector: sector.financeiro, presencial: true},
	{ name: "João" ,payroll: 2800, sector: sector.marketing, presencial: false},
	{ name: "Josué" ,payroll: 5500, sector: sector.financeiro, presencial: true},
	{ name: "Natalia" ,payroll: 4700, sector: sector.vendas, presencial: true},
	{ name: "Paola" ,payroll: 3500, sector: sector.marketing, presencial: true }
];

type people = {
    name: string,
	payroll: number,
	sector: string,
	presencial: boolean,
}


function filtreEmployees(employees: people[]): people[] {
    
     return employees.filter(people => people.sector === sector.marketing && people.presencial);
}

console.log(filtreEmployees(employees)); 
