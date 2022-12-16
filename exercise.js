// **Iteración #1: Usa includes SI**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

console.log("ITERATION#1---------------------------");

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (const producto of products) {
    
    if (producto.includes("Camiseta")) {
        console.log("Elementos que contienen CAMISETA : ", producto);
    }
}


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
]

for ( const alumn of alumns) {
    let approved = 0;
    if (alumn.T1){
        // console.log(alumn.name);
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
        alumn.isApproved = true;                                //!preguntar por qué alumn.isApproved y no alumns.isApproved
        // console.log(alumn.name, "esta APROVADO!!");
    } else {
        alumn.isApproved = false;
    }
}

for ( const alumn of alumns) {
    console.log(alumn);
}