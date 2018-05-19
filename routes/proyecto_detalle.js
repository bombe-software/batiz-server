const soap = require('soap');
var url = 'http://coatl.cecyt9.ipn.mx/wsExpobatiz/WebService.asmx?WSDL';
exports.get = function (req, res) {
    try {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        var lol = require('url');
        var params = lol.parse(req.url, true).query;
        const args = {
            token: params.token,
            id: params.id
        }

        soap.createClient(url, function (err, client) {
            client.proyecto_detalle(args, function (err, result) {
                if (result.length == 0 || !result) {
                    let proyectos = result.proyecto_detalleResult.split('##');
                    let element = {
                        id: proyectos[0].split("**")[0],
                        nombre: proyectos[0].split("**")[1],
                        descripcion: proyectos[proyectos.length - 1],
                        integrantes: []
                    }
                    for (x = 1; x < proyectos.length - 1; x++) {
                        element.integrantes.push({ id: proyectos[x].split('**')[0], nombre: proyectos[x].split('**')[1] })
                    }
                    res.end(JSON.stringify(element))
                } else {
                    res.end(JSON.stringify({}))
                }
            });
        });
    } catch (e) {
        console.log(e)
    }
};