var express = require('express'),
	app = express(),
	path = require('path'),
	mongoose = require('mongoose');

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/ceril_venegas.html'));
});



app.route('/login')

	// show the form (GET http://localhost:1337/login)
	.get(function(req,res){
		res.send('this is the login form');
	})

	.post(function(req,req){
		console.log('processing');
		res.send('processing the login form!');
	});

var adminRouter = express.Router();

adminRouter.param('name', function(req, res, next, name){
	// Do validation on name here
	// validate
	// Log somethin so we know it's working
	console.log('doing name validations on '+ name);

	//once validation is done savethe new item inthe req
	req.name = name;
	next();
});

adminRouter.use(function(req, res, next){
	//log each request to the console
	console.log(req.method, req.url);
	// continue doing what we were doing and go to the route
	next();
});





adminRouter.get('/hello/:name', function(req,res){
	res.send('hello ' + req.name + '!');
});

adminRouter.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/page2.html'));
});

adminRouter.get('/users', function(req,res){
	res.send('I show all the users!');
});

adminRouter.get('/posts', function(req,res){
	res.send('I show all the posts!');
});

// route with parameters (http://localhost:1337/admin/users/:name)
adminRouter.get('/users/:name', function(req,res){
	res.send('hello ' + req.params.name + '!');
});


app.use('/admin', adminRouter);


app.listen(1337);
console.log('1337 isthe magicport!');
