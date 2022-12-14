// requireds
const fs = require("fs");
const { resolve } = require("path");

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = "";

        for (let i = 1; i <= 10; i++) {
            data += `${i} * ${base} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
};
