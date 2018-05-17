exports.get = function (req, res) {
    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const data = {
        "id": "1",
        "nombre": "Cañón electromagnético",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "rating": 3.9,
        "integrantes": [
            {
                "id": "1",
                "nombre": "Juan"
            },
            {
                "id": "2",
                "nombre": "Chancho"
            }
        ],
        "imagenes": [
            {
                "url": "http://via.placeholder.com/900x900"
            },
            {
                "url": "http://via.placeholder.com/800x400"
            }
        ]
    };
    res.end(JSON.stringify(data))
};