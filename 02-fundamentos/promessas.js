let empleados = [
    {
        id: 1,
        nombre: "Fabio",
    },
    {
        id: 2,
        nombre: "Debora",
    },
    {
        id: 3,
        nombre: "Aurora",
    },
];

let salarios = [
    {
        id: 1,
        salarios: 10000,
    },
    {
        id: 2,
        salarios: 20000,
    },
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No tienes salarios este usuario ID ${empleado.id}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salarios,
                id: empleado.id,
            });
        }
    });
};

getEmpleado(1).then(empleado => {
    
    return getSalario(empleado);
})
.then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
})
.catch(err => {
    console.log(err);
})