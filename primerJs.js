// let listaSuper= ["pan", "leche","chocolates", "pan lactal", "pescado", "carne", "verduras"]
// // colmentarios de mi codigo 
// let ultimoElem = listaSuper.length - 1

// // listaSuper.push("pollo", "granola")

// // let ultimo = listaSuper.pop()

// // console.log(ultimo)

// // listaSuper.shift()
// // listaSuper.unshift("chocolates", "pan lactal", "pescado")
// let indexPan = listaSuper.indexOf("Pan lactal")
// console.log(indexPan)

// let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan" ] 

// amigos.splice(2, 1, "Emi")
// let amigos2 = amigos

// function existeFelix () {
//     let index = amigos.indexOf("Felix")
//     if(index == -1) {
//         console.log("Que bueno seria tener un felix")
//     } else {
//         console.log("Tengo un amigo felix")
//     }

// }

// let cadena = "Hola mundo"

// let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Emi" ]

// let numeros = [1, 2, 3]

// let amigosnuevos = numeros.map((num, i) => console.log(num * 2))

// let indexOfJuan = amigos.indexOf("Emi")

// console.log(indexOfJuan)

// amigos.forEach(function(elem){
//    if (elem = "")
// })

// for (i =0; i < amigos.length; i++) {
//     console.log(amigos[i])
// }


// console.log("holaaaa")


// let ejer = (((5*3)*12)/12)/3
// console(ejer%)



// let notas = [1, 2, 3, 4, 10 ,5]

// let sumaDeNotas = notas.reduce((total, nota) => total + nota, 10 )

// console.log(sumaDeNotas)

//Objetos

let objetoPersona = {
    nombre: "Agsutina",
    apellido: "Ramos",
    edad: 28,
    saludar: function() {
        console.log("Hola mundo")
    }
}

objetoPersona.nombre = "Maria"

console.log(objetoPersona)

for (let prop in objetoPersona) {
    console.log(prop)
}