var http = require("http") // importar el módulo 'fs' para escribir o leer archivos en nodejs
var fs = require("fs")

fs.readFile("./index.html", function (err, html) {
    http.createServer(function (req, res) {
        res.write(html)
        res.end()
    }).listen(8080)
})

// lectura de archivos
/*fs.readFile("./texto.txt", function(err, resp){
    if (err){
        console.log(err);
    }else{
        console.log("archivo leído",resp.toString());
    }
})
console.log("ultima línea de código");*/

// escritura de archivos
/*fs.writeFile("texto_escribir.txt", "Hola Mundo!", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("archivo salvado");
    }
})*/