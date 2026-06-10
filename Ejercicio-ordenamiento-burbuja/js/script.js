let listOfNumbers = []

// Se crea un bucle que pide tres números al usuario y los guarda en un array.

for (let i = 0; i < 3; i++) {
    counter = i + 1
    let num = parseFloat(prompt("Ingrese un número" + ' ' + counter + ':'))
    if (isNaN(num)) {

        alert("Valor no válido. Solo se aceptan números.");

        break;

    }
    listOfNumbers.push(num)
}


// Aquí guardo una copia del array original

let OriginalArray = [...listOfNumbers];


let hasChanges

do {
    hasChanges = false

    for (let i = 1; i < listOfNumbers.length; i++) {

        console.log(
            `Comparando posición ${i - 1} (${listOfNumbers[i - 1]}) con posición ${i} (${listOfNumbers[i]})`
        )


        if (listOfNumbers[i - 1] > listOfNumbers[i]) {

            let maxNumberTemporaly = listOfNumbers[i - 1]

            listOfNumbers[i - 1] = listOfNumbers[i]

            listOfNumbers[i] = maxNumberTemporaly

            console.log('Resultado:', [...listOfNumbers])


            hasChanges = true
        }
    }

} while (hasChanges)



// El menor queda al inicio y el mayor al final después de ordenarlo

let smallNumber = listOfNumbers[0];

let largerNumber = listOfNumbers[listOfNumbers.length - 1];

// Muestro los resultados en pantalla

document.write("Arreglo ingresado: [" + OriginalArray.join(", ") + "]<br>");

document.write("Arreglo ordenado (burbuja): [" + listOfNumbers.join(", ") + "]<br>");

// Si el menor y el mayor son iguales, los tres números son idénticos

if (smallNumber === largerNumber) {

    document.write("Los tres números son idénticos. No hay mayor/menor distintos.");

} else {

    document.write("Menor: " + smallNumber + " | Mayor: " + largerNumber);

}

