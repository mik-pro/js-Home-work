let san =[1,2,3,4,5]
 alert(san)
 let sandar = san.map(num => num **3)
 alert(sandar)
 for (let san of sandar) {
   if (san % 2 == 1) {
    console.log(san);
    
   }
    
 }


let person = +prompt("Студенттердің санын енгізіңіз?") 
let bal = [] 
for (let i = 0; i < person; i++) { 
      let Esep = +prompt(`${i}-ші Студенттің балы `)    
      bal[i]=Esep 
      console.log(`${i}-ші Студент балы  ${Esep}`);
     } 
console.log(bal); 
let sum = bal.reduce((total,num)=>total+num,0) 
console.log("Барлық бал жиындығы "+sum); 
             
let big = bal.filter(sym=>sym>=85) 
console.log(`Жоғары бал  ${big}`)