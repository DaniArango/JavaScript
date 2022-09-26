//alert("JavaScript funcionando correctamente")
let variableSinValor
let boolean1 = "false"
let boolean2 = "true"
const PI = 3.14
const TAU = 2*PI
const miNombre = 'Daniela'
let miNumeroFav = 21  //Pase de de const a let para convertirlo en cadena
const amoHalloween = true
console.log(miNombre.length)
console.log(typeof miNumeroFav)
console.log("Mi nombre es " + miNombre + " y mi numero favorito es "+ miNumeroFav)
console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase())
console.log("Hola soy un crack".substring(0,5))
miNumeroFav = miNumeroFav.toString()
console.log(typeof miNumeroFav)
const musicafavest = 'clasica'
const templateliteral = `Mi musica favorita para estudiar es la ${musicafavest}`
console.log(templateliteral)

//Arrays

const arrayVacio = []
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9]
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const arrayNumerosPares = [0,2,4,6,8]
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
const holaMundo = ['Hola','Mundo']
const loGuardoTodo = ['hola','que',23,42.33,'tal']
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log(loGuardoTodo.length)
loGuardoTodo.push('Guardandoando')
console.log(loGuardoTodo[5]) 
console.log(loGuardoTodo[1]) 
loGuardoTodo.push('Euralio')
console.log(loGuardoTodo[6])

//Objetos

const coche = {
    marca: 'BMW',
    modelo: 'M3 E30',
    matricula: '0521 SDA ',
}

const casa = {

    codPostal: 46020,
    calle: 'Av Siempre Viva',
    portal: 742,
    piso: 1,
    
}

const FullStackDeveloper = {
    arraylenguajes:['JavaScript','C++','HTML','CSS'],
    arrayproyectos:['proyecto geminis','carta astral','mi página personal'],

}

const perro = {
    nombre:'Coraje',
    raza:'terrier',
    color:'rosa',
    edad:23,
}

const noticia = {
    titulo:'Lo de Petro en la ONU, ¿solo juegos pirotécnicos?',
    cuerpo:'El exministro de Comercio Exterior y dirigente gremial, Jorge Humberto Botero, es escéptico con los resultados concretos del discurso del presidente Petro ante la ONU. Por el contrario, cree que puede ser en unos puntos hasta contraproducente. Y le preocupa la desfinanciación en salud y en defensa',

}

const persona = {
    nombre: 'Daniela',
    apellidos: 'Arango',
    edad: 29

}

console.log(persona.nombre)
console.log(FullStackDeveloper.arraylenguajes[0])

const concierto = {
    grupos: ['Imagine Dragons', 'Epica', 'Fall Out Boys', 'Nightwish'],
}
 
console.log(concierto.grupos)

const led = {
    rojo: 210,
    verde: 113,
    azul: 60,
}
const rgb = [led.rojo, led.verde, led.azul];
console.log(rgb)

const O_Error = {
    codigo: 521,
} 

console.log(O_Error.codigo)

const grupo = {
    integrantes: ['Gianluca', 'Ignazio', 'Piero']
}

console.log(grupo.integrantes[1])

const impresora = {
    tinta: ['rojo','verde','azul']
}
 
const nivelesTinta = impresora.tinta
console.log(nivelesTinta)

