exports.get = function (req, res) {
    const data = [
        {
            "id": "1",
            "nombre": "Cañón electromagnético",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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