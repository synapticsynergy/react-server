const express = require('express');
const bodyParser = require('body-parser');
const port = process.argv[2] || 3333


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS
app.use(function (req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});

app.get('/', function(req, res){
  res.json({
    success: true,
    msg: "you have hit the api"
  })
})

app.post('/', function(req,res) {
	res.json({
		success: true,
		msg: `your name is ${req.body.name}`
	});
});

app.listen(port, function(){
  console.log(`Server on port: ${port}`);
});
