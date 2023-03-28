
function writeCards(name3, value){
    const namesmessage = [];
    for (let i = 0; i < name3.length; i++){
        namesmessage.push(`Thank you, ${name3[i]}, for the wonderful ${value} gift!`);
    }
    
    return namesmessage
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");



let number10 = 10
function countDown(number10){
    let i = 0
    while (number10 >= i) {
    console.log(number10--);
}
    return number10
}

