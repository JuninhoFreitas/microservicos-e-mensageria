const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log(`Running microservice of ${process.env.MICROSERVICE_NAME||'example-app'} in localhost:${PORT}/`)
})