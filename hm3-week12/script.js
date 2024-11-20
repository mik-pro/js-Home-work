function convertToEuro() {
    let totalAmountInEuro = 0;
    
    while (true) {
        
        let amount = prompt("Ақша сомасын енгізіңіз (немесе 'стоп' деп жазып тоқтатыңыз):");
        if (amount.toLowerCase() === 'стоп') {
            break; 
        }
        
        let currency = prompt("Валютаны енгізіңіз (USD, KZT, EUR):").toUpperCase();
        
        
        amount = parseFloat(amount);
        if (isNaN(amount) || amount <= 0) {
            alert("Жарамды сома енгізіңіз.");
            continue;
        }
        
        
        let convertedAmountInEuro = 0;
        
        if (currency === "USD") {
            convertedAmountInEuro = amount * 0.85; 
        } else if (currency === "KZT") {
            convertedAmountInEuro = amount * 0.002; 
        } else if (currency === "EUR") {
            convertedAmountInEuro = amount; 
        } else {
            alert("Қате валютаның коды. USD, KZT немесе EUR таңдаңыз.");
            continue;
        }
        
        
        totalAmountInEuro += convertedAmountInEuro;
        alert(`Бұл сома еуроға: ${convertedAmountInEuro.toFixed(2)} EUR`);
    }
    
   
    alert(`Жалпы еуро сомасы: ${totalAmountInEuro.toFixed(2)} EUR`);
}


convertToEuro();