(function main () {

	let sumar =  (a, b) => {
    	return Number(a) + Number(b);
	}

	let restar = (a, b) => {
    return a - b;
	}

	let multiplicar = (a, b) => {
		return a * b;
	}

	let dividir = (a, b) => {
		return a / b;
	}
	
	let calcular = (pNum1, pNum2, pOp) => {
		let result = 0;
		switch (pOp) {
			case "S":
			case "s":
				// Suma
				result = sumar(pNum1, pNum2)
				break;
			case "R":
				// Resta
				result = restar(pNum1, pNum2)
				break;
			case "*":
			case "P":
			case "p":
			case "M":
			case "m":			
				// Multiplicacion
				result = multiplicar(pNum1, pNum2)
				break;
			case "D":
				// DivisiÃ³n
				result = dividir(pNum1, pNum2)
				break;		
			default:
				// InstrucciÃ³n no soportada
				result = NaN
				break;
		}
		return result;
    } // Fin de la funciÃ³n calcular

	let mostrarDatos = (pRespuesta) => {
		if (isNaN(pRespuesta)){
			console.log("OperaciÃ³n no soportada");	
		} else {
			console.log(`El resultado es ${pRespuesta}`);	
		}
	}

	let aDatos = [12, 13, 54, 65, 34]
	let msg = ""
	let nResult = 0;
	for (let i = 0; i < aDatos.length; i++) {
		msg += "aDatos[i] +" 
		nResult += aDatos[i];
	}

    let oDatox = {};

    oDatox.num1 = prompt("Escribe un nÃºmero", 25)
    oDatox.num2 = prompt("Escribe otro nÃºmero", 25)
    oDatox.op = prompt("Selecciona <S>uma, <R>esta, <P>roducto o <D>ivision","S")

    let sRespuesta = calcular (oDatox.num1, oDatox.num2, oDatox.op);
	mostrarDatos(sRespuesta);

})();





