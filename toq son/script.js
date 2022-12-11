let result = document.getElementById("reult")
for (let number = 1; number <= 100; number++) {

    let aPrimerNum = true;
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            aPrimerNum = false;
            break;
        }
        if (aPrimerNum == true) {
           console.log(`${number} toq son`)
           break
        }
    }
}   