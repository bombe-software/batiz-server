exports.get = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const data = [
        {
            "id": "1",
            "nombre": "Cañón electromagnético",
            "descripcion": "Lorém ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "id": "2",
            "nombre": "Etanol espacial",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "id": "3",
            "nombre": "Demos",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];
    res.end(JSON.stringify(data))
};