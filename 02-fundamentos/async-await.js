let getNombre = async() => {
    // undefined.nombre;
    return "Fabio";
};

getNombre().then(nombre => {
    console.log(nombre);
}).catch(error => {
    console.log('Erro ASYNC: ');
})
