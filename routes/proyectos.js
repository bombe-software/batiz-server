const soap = require('soap');
var url = 'http://coatl.cecyt9.ipn.mx/wsExpobatiz/WebService.asmx?WSDL';

exports.get = function (req, res) {
    try {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        var lol = require('url');
        var params = lol.parse(req.url, true).query;
        const args = {
            token: params.token,
            id: params.id
        }
        soap.createClient(url, function (err, client) {
            client.proyectos(args, function (err, result) {
                if (!result.proyectosResult) {
                    res.end(JSON.stringify([]))
                } else {
                    let proyectos = result.proyectosResult.split('/');
                    let array = [];
                    for (x = 0; x < proyectos.length; x++) {
                        let element = {
                            id: proyectos[x].split('**')[0],
                            nombre: proyectos[x].split('**')[1],
                            descripcion: proyectos[x].split('**')[2]
                        }
                        array.push(element);
                    }
                    res.end(JSON.stringify(array))
                }

            });
        });
    } catch (e) {
        console.log(e);
    }
};