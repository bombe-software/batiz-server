const soap = require('soap');
var url = 'http://coatl.cecyt9.ipn.mx/wsExpobatiz/WebService.asmx?WSDL';
exports.get = function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    var args = {token: req.params.token, id: req.params.id};
    const data = {
        "id": "1",
        "nombre": "Cañón electromagnético",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "rating": 3.9,
        "integrantes": [{
                "id": "1",
                "nombre": "Juan"
            },
            {
                "id": "2",
                "nombre": "Chancho"
            }
        ]
    };
    soap.createClient(url, function (err, client) {
        client.proyecto_detalle(args, function (err, result) {
            let proyectos = result.proyecto_detalleResult.split('##');
            let element = {
                id: proyectos[0].split("**")[0],
                nombre: proyectos[0].split("**")[1],
                descripcion: proyectos[proyectos.length - 1],
                integrantes: []
            }
            for(x=1; x<proyectos.length-1; x++){
                element.integrantes.push({id: proyectos[x].split('**')[0], nombre: proyectos[x].split('**')[1]})
            }
            res.end(JSON.stringify(element))
        });
    });
};