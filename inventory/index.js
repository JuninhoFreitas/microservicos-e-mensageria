const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req,res)=>{
    res.status(200).send(process.env.MICROSERVICE_NAME || 'OK');
})

app.listen(PORT, ()=>{
    console.log(`Running microservice of ${process.env.MICROSERVICE_NAME||'example-app'} in localhost:${PORT}/`)
})