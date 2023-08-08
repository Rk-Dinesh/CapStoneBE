const express = require('express')
const cors = require("cors")
const { db } = require('./db/db')
// const {readdirSync} = require('fs')
const fs = require('fs');
const path = require('path');

const app = express()

require ('dotenv').config()

const PORT = process.env.PORT 

app.use(express.json())
app.use(cors())

//routes
//readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
// ...

const routeFiles = fs.readdirSync('./routes').filter(file => path.extname(file) === '.js');

routeFiles.forEach((route) => {
  const routeModule = require(`./routes/${route}`);
  app.use('/api/v1', routeModule);
});



const server = () =>{
    db()
    app.listen(PORT,() => {
        console.log('listening to port ' , PORT);  
    })
}

server()