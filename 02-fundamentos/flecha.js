// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// function saludar() {
//     return 'Hola mundo'
// }

// let saludar = () => "Hola Mundo";

// console.log(saludar());

let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre: () => {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    },
};

console.log(deadpool.getNombre());