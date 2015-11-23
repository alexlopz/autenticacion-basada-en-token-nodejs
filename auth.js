var mongoose = require('mongoose');
var User = require('./models/user');
var service = require('./services');

exports.emailSignup = function(req, res){
  var user = new User({
        // Creamos el usuario con los campos
        // que definamos en el Schema
        // nombre, email, etc...

        nombre:   req.body.nombre,
        email:    req.body.email,
        password: req.body.password,
        token:    req.body.token,

  });

  user.save(function(err){
    return res
      .status(200)
      .send({token: service.createToken(user)});
  });

};

exports.emailLogin = function(req, res){
    User.findOne({email: req.body.email.toLowerCase()}, function(err, user){
        // Comprobar si hay errores
        // Si el usuario existe o no
        // Y si la contraseña es correcta

      return res
        .status(200)
        .send({token: service.createToken(user)});
    })
}
