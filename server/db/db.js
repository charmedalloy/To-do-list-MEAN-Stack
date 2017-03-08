var mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Todo=mongoose.model('Todo',{
	task:String,
	isCompleted:Boolean,
	isEditing:Boolean
});

module.exports.Todo=Todo;
