let student = +prompt("Студенттер санын енгізіңіз: ");
let i = 0;
 let san = 1;


while (san <= student) {
    let sum = +prompt(san+"студенттің бағасын енгізіңіз: ");
    i += sum;
    san++;
}


let x = i / student;


alert("Студенттердің бағаларының орташа мәні:"+x);