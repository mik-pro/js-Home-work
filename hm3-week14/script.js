// 1 Тапсырма
let person = {
    name: "Asan",
    age: "15",
    country: "Kazakstan",
    grades: {
       math: 85,
       english: 90,
       science: 80,
    },
    address: {
       city: "Almaty",
       street: "Abaya",
    },
    names: "Miras",
    age: "21",
    grados: {
       math: 90,
       english: 100,
       science: 80,
    },
    addres: {
       city: "Almaty",
       street: "Suranchi batyr"
    }
  }
  let {name,age,math,city}=person
 console.log("-Натиже\nEsimi:"+person.name);
 console.log("Matematika bagasy:"+person.grades.math);
 console.log("Qalasy:"+person.address.city);
 console.log("Memleketi "+person.country);
 
 
 console.log("-Натиже\nEsimi:"+person.names);
 console.log("Matematika bagasy:"+person.grados.math);
 console.log("Qalasy:"+person.addres.city);
 console.log("Memleketi "+person.country);
 
 // 2 Тапсырма
  const classA = ["Амина","Адил","Алина"]
  const classB = ["Берык","Бакыт","Баян"]
  classA.unshift("Директор")
  classB.push("Мугалым")
 
 
  const qosu = [...classA,...classB]
  console.log(qosu);
  
  
  
 
 
 
 
 
 
 
 