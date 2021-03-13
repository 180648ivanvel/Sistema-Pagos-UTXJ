const mogoose = require('mongoose');
const dbURL = require('./properties').DB;
module.exports = () => {
    mogoose.connect(dbURL, { useNewUrlParser: true })
    .then(() => console.log('Mongo conectado en ${dbURL}'))
    .catch(err => console.log('Erooro en la conexión ${err}'))
    process.on('SIGINT', () => {
        mongoose.connection.close(()=>{
            console.log('Mongo a sido desconectado');
            process.exit(0)
        });
    });
}