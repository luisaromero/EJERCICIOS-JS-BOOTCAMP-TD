
let numberUsedNumbers = []

let countOfTried = 0

const secretNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById('historial').innerHTML


//Hacemos un for para que se pregunte máximo 3 veces por el intento de adivinar el número
//Se sale antes de este cuando adivina el user o bien se cumple el max de 3 intentos

for (let i = 0; countOfTried < 3; i++) {
    let userNumber = parseInt(prompt(`${countOfTried + 1}/3 . Ingresa un Número del 1 al 10`));


    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {

        alert("Valor no válido. Solo se aceptan números del 1 al 10.");
        continue;

    }

    if (numberUsedNumbers.includes(userNumber)) {

        alert('Ya has escogido este número.')
        continue;

    }

    numberUsedNumbers.push(userNumber)
    countOfTried++
    document.getElementById('historial').innerHTML = `Números Intentados por el participante: ${numberUsedNumbers}`

    if (secretNumber === userNumber) {
        alert(` ¡Felicidades ! El número secreto era : ${secretNumber}`);
        break;

    } else {
        alert(`Incorrecto , Te quedan ${3 - countOfTried} intento(s).`);
    }

}

if (countOfTried === 3 && !numberUsedNumbers.includes(secretNumber)) {
    alert(`¡Se acabaron los intentos! El número secreto era: ${secretNumber}`);
}

//Colocamos el número secreto aunque no haya adivinado al final de los intentos máximos

document.getElementById('result').innerHTML = `El nuḿero secreto era : ${secretNumber}`

