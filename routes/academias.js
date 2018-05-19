exports.get = function (req, res) {
    try {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        var soap = require('soap');
        var url = 'http://coatl.cecyt9.ipn.mx/wsExpobatiz/WebService.asmx?WSDL';

        var lol = require('url');
        var params = lol.parse(req.url, true).query;
        const args = {
            token: params.token
        }
        soap.createClient(url, function (err, client) {
            client.categorias(args, function (err, result) {
                if (!result.categoriasResult) {
                    res.end(JSON.stringify([]))
                } else {
                    let categorias = result.categoriasResult.split('**');
                    console.log(categorias);
                    let array = [];
                    for (x = 1; x < categorias.length - 2; x++) {
                        let element = {
                            id: categorias[x + 1].split('/')[1],
                            nombre: categorias[x].split('/')[0]
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