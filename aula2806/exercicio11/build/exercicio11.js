"use strict";
var sector;
(function (sector) {
    sector["marketing"] = "Marketing";
    sector["vendas"] = "Vendas";
    sector["financeiro"] = "Financeiro";
})(sector || (sector = {}));
let employees = [
    { name: "Marcos", payroll: 2500, sector: sector.marketing, presencial: true },
    { name: "Maria", payroll: 1500, sector: sector.vendas, presencial: false },
    { name: "Salete", payroll: 2200, sector: sector.financeiro, presencial: true },
    { name: "João", payroll: 2800, sector: sector.marketing, presencial: false },
    { name: "Josué", payroll: 5500, sector: sector.financeiro, presencial: true },
    { name: "Natalia", payroll: 4700, sector: sector.vendas, presencial: true },
    { name: "Paola", payroll: 3500, sector: sector.marketing, presencial: true }
];
function filtreEmployees(employees) {
    return employees.filter(people => people.sector === sector.marketing && people.presencial);
}
console.log(filtreEmployees(employees));
//# sourceMappingURL=exercicio11.js.map