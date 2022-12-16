// **Iteración #1: Usa includes SI**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

console.log("ITERATION#1---------------------------");

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (const producto of products) {
    
    if (producto.includes("Camiseta")) {
        console.log("Elementos que contienen CAMISETA : ", producto);
    }
};


// **Iteración #2: Condicionales avanzados SI**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

console.log(" ");
console.log("ITERATION#2---------------------------");

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for ( const alumn of alumns) {
    let approved = 0;
    if (alumn.T1){                                              //? ((alumn.T1 && alumn.T2) || (alumn.T1 && alumn.T3) || (alumn.T2 && alumn.T3))
        // console.log(alumn.name);                             //? approved++;
        approved++;    
    }
    if (alumn.T2) {
        // console.log(alumn.name);
        approved++;  
    }
    if (alumn.T3) {
        // console.log(alumn.name);
        approved++;  
    }
    if (approved > 1) {
        alumn.isApproved = true;                                //! preguntar por qué alumn.isApproved y no alumns.isApproved
        // console.log(alumn.name, "esta APROVADO!!");          //! si me interesa modificar el array ALUMNS
    } else {                                                    //* si lo hacemos sobre ALUMNS estariamos intentando poner un array
        alumn.isApproved = false;                               //* detrás del último objeto de ALUMNS, y da error    
    }
};

for ( const alumn of alumns) {
    console.log(alumn);
};


// **Iteración #3: Probando For...of SI**

// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
// Puedes usar este array:


console.log(" ");
console.log("ITERATION#3---------------------------");

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for ( const place of placesToTravel) {
    console.log(place);
};


// **Iteración #4: Probando For...in SI**

// Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

console.log(" ");
console.log("ITERATION#4---------------------------");

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const dato in alien) {
    console.log("El dato: [", dato, "] del alien es:", alien[dato]);
};


// **Iteración #5: Probando For SI**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

console.log(" ");
console.log("ITERATION#5---------------------------");

const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

let places = [];

for (let i = 0; i < placesToTravel2.length; i++) {
    // console.log(placesToTravel2[i]);
    if(placesToTravel2[i].id != 11 && placesToTravel2[i].id != 40){
        places.push(placesToTravel2[i]);
    }
}

console.log("Los destinos para viajar elegidos son:",places);


// **Iteración #6: Mixed For e includes SI**

// Usa un bucle **for** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

console.log(" ");
console.log("ITERATION#6---------------------------");

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

const noCatToy = [];

for (const toy of toys) {
    if (!toy.name.includes("gato")){
        noCatToy.push(toy);
    }
}

console.log(noCatToy);
