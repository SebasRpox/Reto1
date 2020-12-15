//funcion para extraer un numero aleatorio entre 0 y 1
function num() {
    return String(Math.round(Math.random() * (1 - 0) + 0));
}
// Fact se le asigna la funcion num anterior
let fact = num();
//bucle hojas
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 6; j++) {
        document.write(`<h3 class="nums" align="center" style="color: green;">${fact}</h3> `);
        fact += num() + num() + num();
    }
    //método slice devuelve elementos de la funcion/matriz en este caso 2 y -2
    fact = fact.slice(2, -2)
}
//bucle tallo
for (var i = 0; i < 3; i++) {
    document.write(`
         <h3 class="nums" align="center" style="color: brown;">10101</h3>
         `)
}