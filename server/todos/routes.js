var mongoose = require('mongoose');
var Todo = require('../db/db').Todo;

module.exports.getTodos=function(req, res) {
    Todo.find(function(err, results) {
        if (err) { console.log(err); }
        
        res.send({todos:results});
    });
}

module.exports.saveTodos=function(req, res) {
   var todo = new Todo(req.body);
   todo.save(function(err) {
        if (err) { console.log(err); }
		res.json(req.body);
        console.log('ToDo saved');
    });
}


   module.exports.updateTodos=function(req,res) {
   	var id=req.params.id;
   // get the id from the url
  console.log("in edit");
  if(req.body.task!=null){
   	Todo.update({ _id:mongoose.Types.ObjectId(id) },{ $set: { task: req.body.task } },
   		function(err)
   		{
   			if(err){ console.log(err);  }

   			res.send('todo updated');
   		});
   	}
   	else{
   		Todo.update({ _id:mongoose.Types.ObjectId(id) },{ $set: { isCompleted: req.body.isCompleted} },
   		function(err)
   		{
   			if(err){ console.log(err);  }

   			res.send('todo updated');
   		});

   	}
   }

   module.exports.deleteTodos=function(req,res) {
   	var id=req.params.id;
    console.log(id);
   	Todo.remove({ _id:mongoose.Types.ObjectId(id) }, 
   		function(err){
   			if(err){ console.log(err);  }

   			res.send('todo deleted');
   		});
   }



