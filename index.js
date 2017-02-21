const express = require('express');
const port = process.argv[2] || 3333

const app = express();

app.get('/', function(req, res){
  res.json({
    success: true,
    msg: "you have hit the api"
  })
})

app.listen(port, function(){
  console.log(`Server on port: ${port}`);
});
