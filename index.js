require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

/**crear el server app */
const app = express();

/**CORS  */
app.use(cors());

/** base de datos */
// pass mongo pPbCoKx0k0IYNOhm
// user mongo user_mean
dbConnection();

// RUTAS
app.get('/',(req, res)=> {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('server is up on ' + process.env.PORT);
});