oFlight = {
    airline: "Oceanic",
    number: "815",
    departure: {
        claveIATA: "SYD",
        time: new Date(2004, 09, 22, 14, 55),
        ciudad: "Sydney"
    },
    arrival: {
        claveIATA: "LAX",
        time: new Date(2004, 09, 23, 10, 42),
        ciudad: "Los Angeles"
    },
    mostrar: function() {
        //console.log(oFlight);
        for (let key in this) {
            if (typeof this[key] == "function") {
                continue
            } else if (typeof this[key] == "object") {
                console.log(key.toUpperCase())
                let obj = this[key]
                for (let key in obj) {
                    console.log(
                        key.toUpperCase() + " : " + obj[key]);
                }
            } else {
                console.log(key.toUpperCase() + " : " + this[key]);

            }
        }
    }
}

oFlight.mostrar()

// let a = "airline"
// console.log(oFlight[a])
// console.log(oFlight.airline)
// console.log(oFlight["airline"])

// let b = "departure"
// let c = "ciudad"
// console.log(oFlight[b][c])
// console.log(oFlight.departure.ciudad)
// console.log(oFlight["departure"]["ciudad"])


oVuelo = {
    airline: "Oceanic",
    number: "815",
    departure: "Sydney",
    arrival: "Los Angeles",
    mostrar: function() {
        for (let key in this) {
            if (typeof this[key] != "function") {
                console.log(key.toUpperCase() + " : " + this[key]);
            }
        }
    }
}