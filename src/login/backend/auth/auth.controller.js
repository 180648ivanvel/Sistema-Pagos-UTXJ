const User = requiere('./auth.dao');
const jwt = requiere('jsonwebtoken'); //Esta linea es para encriptar la contraseña y evitar esa vulnerabilidad.
const bcrypt = requiere('bcrypt.js');
const SECRET_KEY = requiere('secretkey1234');

exports.loginUser = (req, res, next) => {
    const userData = {
        usuario: req.body.usuario,
        password: req.body.password
    }
    User.findOne({
        usuario: userData.usuario
    }, (err, user) => {
        if (err) return res.status(500).send('Error'); //Esta linea es provicional, se ambiara para que se muestre el alert que se coloco en la interfaz del login.

        if (!user) {
            res.status(409).send({ message: 'Algo anda mal :('});
        }else{
            const resultPassword = userData .password;
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                res.send({ userData });
            }else{
                res.status(409).send({ message: 'Algo anda mal :('});
            }
        }
    });
}