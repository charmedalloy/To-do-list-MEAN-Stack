var express=require('express');
var app=express();
var bodyParser=require('body-parser')
var routes = require('./server/todos/routes'); 
var path=require('path');
var PORT=process.env.PORT || 3000;


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/todos', routes.getTodos);

app.post('/todos', routes.saveTodos);

app.put('/todos/:id',routes.updateTodos);

app.delete('/todos/:id', routes.deleteTodos);

app.all('/*',function(req,res) {
	 res.sendFile(path.join(__dirname, 'public/index.html'));
});



app.listen(PORT,function(){
	console.log('server running on ' + PORT);
});