exports.get = function (req, res) {
    const data = [
        {
            "nombre": "Física",
            "id": "1"
        },
        {
            "nombre": "Química",
            "id": "2"
        },
        {
            "nombre": "Matemáticas",
            "id": "3"
        },
        {
            "nombre": "Programación",
            "id": "4"
        },
        {
            "nombre": "Sistemas",
            "id": "5"
        },
        {
            "nombre": "Máquinas",
            "id": "6"
        }
    ];
    res.end(JSON.stringify(data))
};