exports.condiciones = function (req, res) {
    res.sendFile(__dirname+ '/condiciones.html');
};


exports.get = function (req, res) {
    passport.use(new FacebookStrategy({
        clientID: '172252590129742',
        clientSecret: '2164c43945f78e9fc211b8de5747cd82',
        callbackURL: "http://localhost:7000/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        console.log(accessToken, refreshToken, profile, cb);
        return cb(profile);
      }
    ));
};
