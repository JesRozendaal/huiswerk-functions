// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(mail) {
    const startDomain = mail.indexOf("@");
    const domainName = mail.substring(startDomain + 1);
    return domainName;
}

const domain = getEmailDomain("n.eeken@novi-education.nl");
const domain2 = getEmailDomain("t.mellink@novi.nl");
const domain3= getEmailDomain("a.wiersma@outlook.com");

console.log(domain);
console.log(domain2);
console.log(domain3);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {
    const findDomain = email.indexOf("@");
    const findDomainName = email.substring(findDomain +1);

    if (findDomainName === "novi-education.nl") {
        return "Student";
    }
    else if (findDomainName === "novi.nl") {
        return "Medewerker";
    }
    else {
        return "Extern";
    }
}

const type = typeOfEmail("n.eeken@novi-education.nl");
const type2 = typeOfEmail("t.mellink@novi.nl");
const type3 = typeOfEmail("novi.nllaapjes@outlook.com");
const type4 = typeOfEmail("a.wiersma@outlook.com");

console.log(type);
console.log(type2);
console.log(type3);
console.log(type4);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (emailadres) {
    const containsMonkeyTail = emailadres.includes("@");
    const containsComma = emailadres.includes(",");
    const findDot = emailadres.lastIndexOf(".");

    const dotAtEnd = findDot !== emailadres.length -1;

    return containsMonkeyTail && !containsComma && dotAtEnd;
}
// Hier kun je de uitkomst van de expressie meteen teruggeven:
// return containsMonkeyTail && !containsComma && dotAtEnd;
// ik had een if-statement

const validEmail = checkEmailValidity("n.eeken@novi.nl");
const validEmail2 = checkEmailValidity("tessmellink@novi.nl");
const validEmail3 = checkEmailValidity("n.eekenanovi.nl");
const validEmail4 = checkEmailValidity("n.eeken@novinl.");
const validEmail5 = checkEmailValidity("tessmellink@novi,nl");

console.log(validEmail);
console.log(validEmail2);
console.log(validEmail3);
console.log(validEmail4);
console.log(validEmail5);