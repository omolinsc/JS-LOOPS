// **Iteración #1: Usa includes SI**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

console.log("ITERATION#1---------------------------")
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (const producto of products) {
    
    if (producto.includes("Camiseta")) {
        console.log("Elementos que contienen CAMISETA : ", producto);
    }
}