exports.get = function (req, res) {
    res.end('/condiciones.html');
};
exports.condiciones = function (req, res) {
    res.sendFile(__dirname+ '/condiciones.html');
};