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
        salarios: 1000,
    },
    {
        id: 2,
        salarios: 2000,
    },
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No tienes salarios este usuario ID ${empleado.id}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salarios,
            id: empleado.id,
        });
    }
};

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    });
});
