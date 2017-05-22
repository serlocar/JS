var sCantaor1 = "Pepe 'El Lebrijano'"
var sCantaor2 = 'Juan "El Habichuela"'

oCantaor1 = new String(sCantaor1)


console.log(sCantaor1.length)

let dosCantaores = sCantaor1.concat(sCantaor2)

console.log(dosCantaores)

let aPalabras = dosCantaores.split(" ")

let newCadena = aPalabras.join(" ")

console.log(aPalabras)
console.log(newCadena)
