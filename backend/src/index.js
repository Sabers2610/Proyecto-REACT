require("dotenv").config()

const app = require("./app")
require("./database")

// ejecucion de servidor
async function main(){
    await app.listen(app.get('port'))
    console.log(`el servidor se esta ejecutando en el puerto: ${app.get('port')} `);
}

main();