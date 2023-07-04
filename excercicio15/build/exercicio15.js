"use strict";
function validateRenovation(dateBirth, dateIssue) {
    let formatDateBirth = new Date(dateBirth);
    let dateBirthYear = formatDateBirth.getFullYear();
    let today = new Date();
    let currentYear = today.getFullYear();
    let formatDateIssue = new Date(dateIssue);
    let dateIssueYear = formatDateIssue.getFullYear();
    let age = currentYear - dateBirthYear;
    let issueYears = currentYear - dateIssueYear;
    if (age <= 20 && issueYears >= 5) {
        return true;
    }
    else if (age > 50 && issueYears > 15) {
        return true;
    }
    else {
        return false;
    }
}
console.log(validateRenovation('04/23,1993', '04/45/1994'));
//# sourceMappingURL=exercicio15.js.map