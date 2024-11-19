let name = prompt("студент атынды жаз!")
let language = prompt("кай тылде сойлейсыз? English,Kazak,Russia")

if (language=="English") {
    function hello(compareWords) {
        
        return name==language     
}
alert(`Hello ${name} how are you?`)
}else if (language=="Kazak") {
        alert(`Асалаумагалейкум ${name} уй ыш аманба?`)
}else if (language=="Russia") {
        alert(`${name} привет как дела?`)
}else{
         alert(`${name} сен кате жаздын кайта жаз`)
}
       
