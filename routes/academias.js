exports.get = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    var soap = require('soap');
    var url = 'http://coatl.cecyt9.ipn.mx/wsExpobatiz/WebService.asmx?WSDL';

    var lol = require('url');
    var params = lol.parse(req.url, true).query;
    const args = {
        token: params.token
    }
    
    
    soap.createClient(url, function(err, client) {
        client.categorias(args, function(err, result) {
            let categorias = result.categoriasResult.split('**');
            console.log(categorias);
            let array =[];
            for(x=1; x < categorias.length-1;  x ++){
                let element = {
                    id: categorias[x].split('/')[1],
                    nombre: categorias[x].split('/')[0]
                }
                array.push(element);
            }
            res.end(JSON.stringify(array))
        });
    });

    
};