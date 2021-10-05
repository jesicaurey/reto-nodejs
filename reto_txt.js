var fs = require("fs")
var http = require("http")

// Reto 1.1
let numeros = ""
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        if (i != 50) {
            numeros = numeros + i + "\n"
        } else {
            numeros = numeros + i
        }
    }
}

// crear o escribir un archivo con los nros pares del 1 al 50.
fs.writeFile("pares.csv", numeros, function (err) {
    if (err) {
        console.log(err); // a veces el archivo no existe y aquí se ejecuta como error
    } else {
        console.log("archivo salvado");
    }
});

// Reto 1.2
// Leer el archivo 'pares.csv' multiplicar cada línea por 2
fs.readFile("pares.csv", function (err, resp) {
    if (err) {
        return console.log(err);
    }
    let pares = resp.toString()
    let paresArray = pares.split("\n")
    let paresPor2 = ""
    for (i of paresArray) {
        paresPor2 = paresPor2 + i * 2 + "\n"
    }
    //salvar en un archivo 'pares_por_dos.csv'
    fs.writeFile("pares_por_dos.csv", paresPor2, function (err) {
        if (err) {
            return console.log(err)
        } else {
            console.log("Pares por dos salvados")
        }
    });
});

// Reto 2
// Leer archivo 'pares_por_dos.csv' creado anteriormente
fs.readFile("pares_por_dos.csv", function (err, resp) {
    if (err) {
        return console.log(err)
    }
    // crear una tabla en el navegador en el que se muestre su posición en el archivo y cada nro obtenido
    http.createServer(function (req, res) {
        let tabla = "<table><tr><td>Posicion</td><td>Valor</td></tr>"
        let numerosFinal = resp.toString().split("\n")
        for (i in numerosFinal) {
            tabla = tabla + "<tr><td>" + i + "</td><td>" + numerosFinal[i] + "</td></tr>"
        }
        tabla = tabla + "</table>"
        res.write(tabla)
        res.end()
    }).listen(8080)
})