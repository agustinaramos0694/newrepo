
//               0       1       2          3          4
let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"] 

amigos.indexOf("Pepe") // nos devuelve el índice 1.

coleccionRandom=["Hola", 22, true, null, function(){console.log("hello")}, ["hola", "chau"]] // Este Arreglo tiene distintos tipos de datos.

coleccionRandom[4]
coleccionRandom[4]()
coleccionRandom[5] 
coleccionRandom[5][0] 

// slice() clonar arreglos.

//split()
let arr = "uno dos tres"
let arr2 = arr.split(" ")
let join  = arr2.join(" y ")