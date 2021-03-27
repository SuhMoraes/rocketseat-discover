const express = require("express");
const server = express();

// Request, respponse
server.get('/', (request,response) => {  
  return response.sendFile("Olá")
})

server.listen(3000, () => console.log('rodando') )