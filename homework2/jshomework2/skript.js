// let age = 70;
// let isStudent = false;
// console.log("age<=65");
let course = prompt("Курс нөмірін енгізіңіз (1, 2, 3 немесе 4):"); 
let isAlmaty = prompt("Сіз Алматыдан келдіңіз бе? (я немесе жок)"); 
 
if (course == "1" || course == "2") { 
    if (isAlmaty == "no") { 
        alert("Сізге жатақханадан орын беріледі."); 
    } else if (condition) {
        alert("Сізге жатақхана берілмейді."); 
    } 
} else { 
    alert("Сізге жатақхана берілмейді."); 
} 
 
 
alert("Ойын шарты: әрбір дұрыс жауап үшін 1 ұпай беріледі."); 
 
let surak1 = prompt("Қазақстанның тәуелсіздік алған жылы:"); 
let surak2 = prompt("Қазір оқып жатқан қалаңыз:"); 
 
let score = 0; 
 
if (surak1 == "1991") { 
    score += 1; 
} 
 
if (surak2 == "Almaty") { 
    score += 1; 
} 
 
alert("Сіздің жинаған ұпайыңыз: " + score);

