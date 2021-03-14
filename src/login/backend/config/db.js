const mogoose = require('mongoose');
const dbURL = require('./properties').DB;
module.exports = () => {
    mogoose.connect(dbURL, { useNewUrlParser: true })
    .then(() => console.log('Mongo conectado en ${dbURL}'))
    .catch(err => console.log('Error en la conexión ${err}'))
    process.on('SIGINT', () => {
        mongoose.connection.close(()=>{
            console.log('Mongo ha sido desconectado');
            process.exit(0)
        });
    });
}