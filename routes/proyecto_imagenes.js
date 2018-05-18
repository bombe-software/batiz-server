exports.get = function (req, res) {
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

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><meta charset="UTF-8" /><title>:V</title></head>');
    res.write('<body>');

    for(x=0; x < data.imagenes.length; x++){
        res.write(`<img src="${data.imagenes[x].url}" alt="Smiley face" width="100%" /> <br />`);
    }
    res.write('</body>');
    res.end('</html>');
};