let sandar = []
while (true) {
    let san =+ prompt("сан енгыз")
    if (san === 0) {
        break;
    }else if (san % 2==0) {
        sandar.unshift(san)
    }else{
         sandar.push(san)
    }
}
console.log(sandar);
console.log("массив узындыгы",sandar.length);








